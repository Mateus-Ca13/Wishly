'use server'
import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"
import { getCurrentUserAction } from "./profiles"
import { Item, ItemWithoutReservation } from "@/types/entities"
import { ActionResponse, CountResponse } from "@/types/response"
import { log } from "console"
import { getRegisterOrEditItemSchema, RegisterOrEditItemSchema } from "@/schemas/items"
import { getTranslations } from "next-intl/server"

export async function getItemsAction(search: string = '', ownerId: string, includeReservations: boolean = true): Promise<ActionResponse<{ items: Item[] | ItemWithoutReservation[], count: number }>> {
    const supabase = await createClient()

    const currentUser = await getCurrentUserAction()

    const selectQuery = includeReservations ? "*,reservations(*,profile:public_profiles(username))" : "*"

    const [itemsResponse, countResponse] = await Promise.all([
        supabase
            .from('items')
            .select(selectQuery)
            .eq('user_id', ownerId)
            .ilike('name', `%${search}%`)
            .order('created_at', { ascending: false }) as any as { data: Item[], error: any },

        supabase
            .from('items')
            .select('id', { count: 'exact', head: true })
            .eq('user_id', ownerId) as any as CountResponse

    ])

    if (!includeReservations) return sendSuccessResponse(200, "Lista de itens retornada com sucesso!", { items: itemsResponse.data, count: countResponse.count })
    if (itemsResponse.error) return sendErrorResponse(itemsResponse.error.code, itemsResponse.error.message, itemsResponse.error)
    if (countResponse.error) return sendErrorResponse(countResponse.error.code, countResponse.error.message, countResponse.error)

    const sanitizedItems = itemsResponse.data?.map((item) => {
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

    return sendSuccessResponse(200, "Lista de itens retornada com sucesso!", { items: sanitizedItems, count: countResponse.count })
}

export async function createItemAction(itemData: RegisterOrEditItemSchema) {
    const t = await getTranslations('Dashboard.MyWishlist.Drawer')

    const parse = getRegisterOrEditItemSchema(t).safeParse(itemData)

    if (!parse.success) {
        return sendErrorResponse(400, parse.error.message, null)
    }

    const supabase = await createClient()

    const { data, error } = await supabase
        .from('items')
        .insert(itemData)
        .select('id')
        .single()

    if (error) return sendErrorResponse(error.code, error.message, error)

    return sendSuccessResponse(200, "Item criado com sucesso!", data)
}

export async function updateItemAction(id: number, itemData: RegisterOrEditItemSchema) {
    const t = await getTranslations('Dashboard.MyWishlist.Drawer')

    const parse = getRegisterOrEditItemSchema(t).safeParse(itemData)

    if (!parse.success) {
        return sendErrorResponse(400, parse.error.message, null)
    }

    const supabase = await createClient()

    const { data, error } = await supabase
        .from('items')
        .update(itemData)
        .eq('id', id)
        .select('id')
        .single()

    if (error) return sendErrorResponse(error.code, error.message, error)

    return sendSuccessResponse(200, "Item atualizado com sucesso!", data)
}


export async function deleteItemAction(id: number) {
    const supabase = await createClient()

    const { error } = await supabase.from('items').delete().eq('id', id)
    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, "Item deletado com sucesso!", null)
}

