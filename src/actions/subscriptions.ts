'use server'
import { createClient } from "@/lib/supabase/server"
import { Subscription } from "@/types/entities"
import { ActionResponse } from "@/types/response"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"

export async function getSubscriptionAction(): Promise<ActionResponse<Subscription | null>> {
    const supabase = await createClient()

    const { data: { user }, error: userError } = await supabase.auth.getUser()

    if (userError || !user) return sendErrorResponse(userError?.code || 'Unauthorized', userError?.message || 'Usuário não autenticado', null)

    const { data, error } = await supabase.from('subscriptions').select('*, plan: plans(*)').eq('user_id', user.id).single()

    if (error) return sendErrorResponse(error.code, error.message, null)
    return sendSuccessResponse(200, 'Assinatura buscada com sucesso', data)
}