'use server'
import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"
import { getCurrentUserAction } from "./profiles"
import { Item, ItemWithoutReservation } from "@/types/entities"
import { ActionResponse, CountResponse } from "@/types/response"
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

    const t = await getTranslations('Dashboard.Responses')

    if (!includeReservations) return sendSuccessResponse(200, t('Items.Get.success'), { items: itemsResponse.data, count: countResponse.count })
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

    return sendSuccessResponse(200, t('Items.Get.success'), { items: sanitizedItems, count: countResponse.count })
}

export async function createItemAction(itemData: RegisterOrEditItemSchema) {
    const t = await getTranslations('Dashboard.MyWishlist.Drawer')

    const parse = getRegisterOrEditItemSchema(t).safeParse(itemData)

    if (!parse.success) {
        return sendErrorResponse(400, parse.error.message, null)
    }

    const checkLimitsResponse = await checkItemLimitsAction()
    if (!checkLimitsResponse.success) return checkLimitsResponse

    const tResponse = await getTranslations('Dashboard.Responses')
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('items')
        .insert(itemData)
        .select('id')
        .single()

    if (error) return sendErrorResponse(error.code, error.message, error)

    return sendSuccessResponse(200, tResponse('Items.Create.success'), data)
}

export async function updateItemAction(id: number, itemData: RegisterOrEditItemSchema) {
    const t = await getTranslations('Dashboard.MyWishlist.Drawer')

    const parse = getRegisterOrEditItemSchema(t).safeParse(itemData)

    if (!parse.success) {
        return sendErrorResponse(400, parse.error.message, null)
    }

    const tResponse = await getTranslations('Dashboard.Responses')
    const supabase = await createClient()

    const { data, error } = await supabase
        .from('items')
        .update(itemData)
        .eq('id', id)
        .select('id')
        .single()

    if (error) return sendErrorResponse(error.code, error.message, error)

    return sendSuccessResponse(200, tResponse('Items.Update.success'), data)
}


export async function deleteItemAction(id: number) {
    const supabase = await createClient()

    const t = await getTranslations('Dashboard.Responses')
    const { error } = await supabase.from('items').delete().eq('id', id)
    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, t('Items.Delete.success'), null)
}

async function checkItemLimitsAction() {
    const t = await getTranslations('Dashboard.Responses')
    const supabase = await createClient()

    const currentUser = await supabase.auth.getUser()

    if (!currentUser.data.user) return sendErrorResponse(401, 'Unauthorized', null)

    const [itemsCountResponse, subscriptionResponse] = await Promise.all([
        supabase.from('items').select('*', { count: 'exact', head: true }).eq('user_id', currentUser.data.user.id),
        supabase.from('subscriptions').select('*, plan: plans(*)').eq('user_id', currentUser.data.user.id).single()
    ])

    if (itemsCountResponse.error) return sendErrorResponse(itemsCountResponse.error.code, itemsCountResponse.error.message, itemsCountResponse.error)
    if (subscriptionResponse.error) return sendErrorResponse(subscriptionResponse.error.code, subscriptionResponse.error.message, subscriptionResponse.error)

    const maxItems = subscriptionResponse.data.plan.max_items_per_wishlist
    const currentItems = itemsCountResponse.count ?? 0

    if (currentItems >= maxItems) return sendErrorResponse(426, t('Items.Limits.exceeded'), null)

    return sendSuccessResponse(200, 'OK', null)
}