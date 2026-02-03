'use server'
import { createClient } from "@/lib/supabase/server"
import { Plan, Subscription } from "@/types/entities"
import { ActionResponse } from "@/types/response"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"

import { getTranslations } from "next-intl/server"

export async function getCurrentSubscriptionAction(): Promise<ActionResponse<Subscription | null>> {
    const supabase = await createClient()
    const t = await getTranslations('Dashboard.Responses')

    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) return sendErrorResponse(userError?.code || 'Unauthorized', userError?.message || t('Auth.unauthorized'), null)

    const { data, error } = await supabase.from('subscriptions').select('*, plan: plans(*, prices:plan_prices(*))').eq('user_id', user.id).single()

    if (error) return sendErrorResponse(error.code, error.message, null)
    return sendSuccessResponse(200, t('Subscriptions.Get.success'), data)
}

export async function getPlansAction(): Promise<ActionResponse<Plan[]>> {
    const supabase = await createClient()
    const t = await getTranslations('Dashboard.Responses')

    const { data, error } = await supabase.from('plans').select('*, prices:plan_prices(*)').eq('viewable', true)

    if (error) return sendErrorResponse(error.code, error.message, null)

    return sendSuccessResponse(200, t('Subscriptions.Plans.success'), data)
}
