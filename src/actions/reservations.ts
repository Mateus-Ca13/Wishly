'use server'
import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"

export const confirmReservationAction = async (itemId: number, anonymousGiver: boolean) => {
    
    const supabase = await createClient()

    const { data, error } = await supabase.from('reservations').insert({
        item_id: itemId,
        anonymous_giver: anonymousGiver
    })

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, 'Reserva confirmada com sucesso!', data)
    
}