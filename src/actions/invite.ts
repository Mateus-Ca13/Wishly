'use server'

import { createClient } from "@/lib/supabase/server"
import { createClientAdmin } from "@/lib/supabase/admin"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import { getTranslations } from "next-intl/server"
import { Room } from "@/types/entities"

export async function getRoomPublicInfoBySlugAction(slug: string) {
    const supabase = await createClient()
    const { data, error } = await supabase.from('public_rooms').select('*').eq('slug', slug).single()
    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    const t = await getTranslations('Dashboard.Responses')
    return sendSuccessResponse(200, t('Rooms.Get.success'), data)
}

export async function getRoomJoinRequestsByIdAction(id: number) {
    const supabase = await createClient()
    const { data, error } = await supabase.from('room_join_requests').select('*, profile: public_profiles(*)').eq('room_id', id)

    if (error) return sendErrorResponse(error.code, error.message, error)

    const t = await getTranslations('Dashboard.Responses')
    return sendSuccessResponse(200, t('Invite.Get.success'), data)
}

export async function joinRoomAction(room: Room, userId: string) {
    const t = await getTranslations('Dashboard.Responses')

    const supabase = await createClient()

    const needsApproval = room.requires_approval
    console.log('precisa de aprovação: ', needsApproval ? 'Sim' : 'Não');
    console.log('room: ', room);

    if (needsApproval) {
        const { error } = await supabase.from('room_join_requests').insert({
            room_id: room.id,
            user_id: userId,
        })
        if (error) {
            console.log('error: ', error);
            if (error.code === "23505") return sendErrorResponse(error.code, t('Invite.aleradyRequest'), null)
            return sendErrorResponse(error.code, error.message, error)
        }
        return sendSuccessResponse(200, t('Invite.requestSent'), null)
    }
    const checkUserRoomMemberResponse = await checkUserRoomMemberAction(room)
    if (!checkUserRoomMemberResponse.success) return checkUserRoomMemberResponse

    const { error } = await supabase.from('room_members').insert({
        room_id: room.id,
        user_id: userId,
        role: 'USER'
    })

    if (error) {

        if (error.code === "23505") return sendErrorResponse(error.code, t('Invite.aleradyMember'), null)

        return sendErrorResponse(error.code, error.message, null)
    }

    revalidatePath('/dashboard/my-rooms')
    return sendSuccessResponse(200, t('Invite.successMessage'), null)
}

export async function acceptJoinRequestAction(room: Room, userId: string) {
    const t = await getTranslations('Dashboard.Responses')
    const supabase = await createClient()
    const checkUserRoomMemberResponse = await checkUserRoomMemberAction(room)
    if (!checkUserRoomMemberResponse.success) return checkUserRoomMemberResponse

    const { error: insertError } = await supabase.from('room_members').insert({
        room_id: room.id,
        user_id: userId,
        role: 'USER'
    })

    if (insertError) {
        if (insertError.code === "23505") return sendErrorResponse(insertError.code, t('Invite.aleradyMemberToHost'), null)
        return sendErrorResponse(insertError.code, insertError.message, null)
    }

    const { error: deleteError } = await supabase.from('room_join_requests').delete().match({ room_id: room.id, user_id: userId })

    if (deleteError) {
        // Rollback manual
        await supabase.from('room_members').delete().match({ room_id: room.id, user_id: userId })

        return sendErrorResponse(deleteError.code, deleteError.message, deleteError)
    }

    revalidatePath(`/dashboard/my-rooms/${room.slug}/invites`)
    return sendSuccessResponse(200, t('JoinRequest.successMessage'), null)
}

export async function declineJoinRequestAction(room: Room, userId: string) {
    const t = await getTranslations('Dashboard.Responses')
    const supabase = await createClient()

    const { error } = await supabase.from('room_join_requests').delete().match({ room_id: room.id, user_id: userId })

    if (error) return sendErrorResponse(error.code, error.message, error)

    revalidatePath(`/dashboard/my-rooms/${room.slug}/invites`)
    return sendSuccessResponse(200, t('JoinRequest.declineSuccessMessage'), null)
}

async function checkUserRoomMemberAction(room: Room) {
    const t = await getTranslations('Dashboard.Responses')

    const supabase = await createClientAdmin()

    const [membersCountResponse, roomLimitsResponse] = await Promise.all([
        supabase.from('room_members').select('*', { count: 'exact', head: true }).eq('room_id', room.id),
        supabase.from('subscriptions').select('*, plan: plans(*)').eq('user_id', room.owner_id).single()
    ])

    if (membersCountResponse.error) return sendErrorResponse(membersCountResponse.error.code, membersCountResponse.error.message, membersCountResponse.error)
    if (roomLimitsResponse.error) return sendErrorResponse(roomLimitsResponse.error.code, roomLimitsResponse.error.message, roomLimitsResponse.error)


    const maxMembersPerRoom = roomLimitsResponse.data.plan.max_members_per_room
    const currentMembersPerRoom = membersCountResponse.count ?? 0

    if (currentMembersPerRoom >= maxMembersPerRoom) return sendErrorResponse(426, t('Invite.roomFull'), null)

    return sendSuccessResponse(200, 'OK', null)
}
