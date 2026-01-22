'use server'
import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"
import { getCurrentUserAction } from "./profiles"

export async function getItemsAction(search: string = '', ownerId: string) {
    const supabase = await createClient()

    const currentUser = await getCurrentUserAction()
    
    const { data: rawItems, error } = await supabase
        .from('items')
        .select(`
            *, 
            reservations (
                *,
                profile: public_profiles (username) 
            )
        `)
        .eq('user_id', ownerId)
        .ilike('name', `%${search}%`)
        .order('created_at', { ascending: false })


    const sanitizedItems = rawItems?.map((item) => {
        const reservation = item.reservations || null

        if (!reservation) {
            return { ...item, reservations: null }
        }

        const isMe = reservation.user_id === currentUser.data.id
        const shouldHide = reservation.anonymous_giver && !isMe

        if (shouldHide) {
            return {
                ...item,
                reservations: {
                    ...reservation,
                    user_id: null, 
                    profile: {         
                        username: 'Anônimo',

                    }
                }
            }
        }

        return item
    })

    console.log(sanitizedItems)

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }
    return sendSuccessResponse(200, "Lista de itens retornada com sucesso!", sanitizedItems)
}


