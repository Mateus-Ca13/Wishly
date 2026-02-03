'use server'

import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

import { getTranslations } from "next-intl/server"

export async function getRoomPublicInfoBySlugAction(slug: string) {
    const supabase = await createClient()
    const { data, error } = await supabase.from('public_rooms').select('*').eq('slug', slug).single()
    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    const t = await getTranslations('Dashboard.Responses')
    return sendSuccessResponse(200, t('Rooms.Get.success'), data)
}

export async function acceptInviteAction(roomId: number, userId: string) {
    const t = await getTranslations('Dashboard.Responses')

    const supabase = await createClient()
    const { error } = await supabase.from('room_members').insert({
        room_id: roomId,
        user_id: userId,
        role: 'USER'
    })

    if (error) {

        if (error.code === "42501") return sendErrorResponse(error.code, t('Invite.alreadyMember'), null)

        return sendErrorResponse(error.code, error.message, null)
    }

    revalidatePath('/dashboard/my-rooms')
    redirect('/dashboard/my-rooms')
}

