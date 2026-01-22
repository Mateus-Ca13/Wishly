'use server'
import { createClient } from "@/lib/supabase/server";
import slugify from 'slugify'
import { customAlphabet } from 'nanoid'
import { registerRoomSchema, RegisterRoomSchema } from "../../app/dashboard/my-rooms/_features/schemas";
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response";
import { redirect } from "next/navigation";
import { cache } from "react";

const generateSuffix = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6)

export async function registerRoomAction(data: RegisterRoomSchema){

    const parse = registerRoomSchema.safeParse(data)
    if (!parse.success) {
        return sendErrorResponse(400, parse.error.message, null)
    }

    const baseSlug = slugify(data.name, {
    lower: true,      
    strict: true,     
    trim: true,       
    })

    const supabase = await createClient()

    const { error, data: room} = await supabase.from('rooms').insert({
        name: parse.data.name,
        description: parse.data.description,
        cover_theme: parse.data.icon, 
        slug: `${baseSlug}-${generateSuffix()}`

    }).select('slug').single()

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    redirect(`/dashboard/my-rooms/${room.slug}`)
}

export async function getRoomsAction(search: string = '') {
    const supabase = await createClient()
    const { data, error } = await supabase.from('rooms').select('*, room_members(count)').ilike('name', `%${search}%`)
    
    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }
    
    return sendSuccessResponse(200, "Lista de salas retornada com sucesso!", data)
}

export const getRoomBySlugAction = cache(async (slug: string) => {
    const supabase = await createClient()
    
    const { data, error } = await supabase.from('rooms').select('*').eq('slug', slug).single()

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, "Sala retornada com sucesso!", data)
})


export async function updateRoomAction(id: number, data: RegisterRoomSchema) {
    const parse = registerRoomSchema.safeParse(data)
    if (!parse.success) {
        return sendErrorResponse(400, parse.error.message, null)
    }

    const supabase = await createClient()

    const { error, data: room } = await supabase.from('rooms').update({
        name: parse.data.name,
        description: parse.data.description,
        cover_theme: parse.data.icon
    }).eq('id', id).select()

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, "Sala atualizada com sucesso!", room)
}

export async function deleteRoomAction(id: number) {
    
    const supabase = await createClient()

    const { error } = await supabase.from('rooms').delete().eq('id', id)
    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, "Sala deletada com sucesso!", null)
}
