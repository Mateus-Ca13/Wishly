'use server'
import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response"


export async function getMembersAction (search: string = '', roomId: number) {
    const supabase = await createClient()
    const { data: { user }, error: authError } = await supabase.auth.getUser()

    if (authError || !user) {
        return sendErrorResponse(authError?.message, "Falha na autenticação", {authError})
    }

    const [membersResponse, countResponse] = await Promise.all([
        
        // 1. Busca Principal (Com filtros de nome)
        supabase
            .from('room_members')
            .select('public_profiles!inner(*)')
            .eq('room_id', roomId)
            .neq('user_id', user.id)
            .ilike('public_profiles.username', `%${search}%`),

        // 2. Busca de Contagem Total (Sem filtro de nome, Super leve)
        supabase
            .from('room_members')
            .select('*', { count: 'exact', head: true })
            .eq('room_id', roomId)
            .neq('user_id', user.id) 
    ])

    // Tratamento de erros
    if (membersResponse.error) return sendErrorResponse(500, "Erro na busca", membersResponse.error)
    if (countResponse.error) return sendErrorResponse(500, "Erro na contagem", countResponse.error)

    const members = membersResponse.data
    const totalMembers = countResponse.count || 0 

    const formattedData = members.map(item => ( item.public_profiles ))
    
    return sendSuccessResponse(200, "Lista de membros retornada com sucesso!", {members: formattedData, count: totalMembers})
}