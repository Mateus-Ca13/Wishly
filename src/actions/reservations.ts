'use server'
import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"
import { getTranslations } from "next-intl/server"

export const confirmReservationAction = async (itemId: number, anonymousGiver: boolean) => {
    const supabase = await createClient()
    const t = await getTranslations('Dashboard.Responses')

    const { data, error } = await supabase.from('reservations').insert({
        item_id: itemId,
        anonymous_giver: anonymousGiver
    })

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, t('Reservations.Create.success'), data)

}

export const cancelReservationAction = async (itemId: number) => {
    const supabase = await createClient()
    const t = await getTranslations('Dashboard.Responses')

    const { data, error } = await supabase.from('reservations').delete().eq('item_id', itemId)

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, t('Reservations.Delete.success'), data)

}
