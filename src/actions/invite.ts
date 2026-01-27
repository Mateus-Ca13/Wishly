'use server'

import { createClient } from "@/lib/supabase/server"
import { sendErrorResponse } from "@/utils/response"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

export async function acceptInviteAction(roomId: number, userId: string) {

    const supabase = await createClient()
    const { error } = await supabase.from('room_members').insert({
        room_id: roomId,
        user_id: userId,
        role: 'USER'
    })

    if (error) {

        if (error.code === "42501") return sendErrorResponse(error.code, 'Você já é membro desta sala', null)

        return sendErrorResponse(error.code, error.message, null)
    }

    revalidatePath('/dashboard/my-rooms')
    redirect('/dashboard/my-rooms')
}

