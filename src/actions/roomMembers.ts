'use server'
import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"
import { getTranslations } from "next-intl/server"


export async function getMembersAction(search: string = '', roomId: number) {
    const supabase = await createClient()
    const t = await getTranslations('Dashboard.Responses')
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return sendErrorResponse(authError?.message, t('Auth.unauthorized'), { authError })
    }

    const [membersResponse, countResponse] = await Promise.all([

        supabase
            .from('room_members')
            .select('public_profiles!inner(*)')
            .eq('room_id', roomId)
            .neq('user_id', user.id)
            .ilike('public_profiles.username', `%${search}%`),

        supabase
            .from('room_members')
            .select('*', { count: 'exact', head: true })
            .eq('room_id', roomId)
            .neq('user_id', user.id)
    ])

    if (membersResponse.error) return sendErrorResponse(500, t('General.searchError'), membersResponse.error)
    if (countResponse.error) return sendErrorResponse(500, t('General.countError'), countResponse.error)

    const members = membersResponse.data
    const totalMembers = countResponse.count || 0

    const formattedData = members.map(item => (item.public_profiles))

    return sendSuccessResponse(200, t('RoomMembers.Get.success'), { members: formattedData, count: totalMembers })
}


export async function removeMemberAction(memberId: string, roomId: number) {
    const supabase = await createClient()
    const t = await getTranslations('Dashboard.Responses')

    const { error, data } = await supabase
        .from('room_members')
        .delete()
        .eq('room_id', roomId)
        .eq('user_id', memberId)

    if (error) return sendErrorResponse(500, t('RoomMembers.Delete.error'), error)

    return sendSuccessResponse(200, t('RoomMembers.Delete.success'), data)
}
