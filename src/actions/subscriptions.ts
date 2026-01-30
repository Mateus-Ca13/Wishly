'use server'
import { createClient } from "@/lib/supabase/server"
import { Plan, Subscription } from "@/types/entities"
import { ActionResponse } from "@/types/response"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"

export async function getCurrentSubscriptionAction(): Promise<ActionResponse<Subscription | null>> {
    const supabase = await createClient()

    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) return sendErrorResponse(userError?.code || 'Unauthorized', userError?.message || 'Usuário não autenticado', null)

    const { data, error } = await supabase.from('subscriptions').select('*, plan: plans(*, prices:plan_prices(*))').eq('user_id', user.id).single()

    if (error) return sendErrorResponse(error.code, error.message, null)
    return sendSuccessResponse(200, 'Assinatura buscada com sucesso', data)
}

export async function getPlansAction(): Promise<ActionResponse<Plan[]>> {
    const supabase = await createClient()

    const { data, error } = await supabase.from('plans').select('*, prices:plan_prices(*)').eq('viewable', true)

    if (error) return sendErrorResponse(error.code, error.message, null)

    return sendSuccessResponse(200, 'Planos buscados com sucesso', data)
}
