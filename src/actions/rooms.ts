'use server'
import { createClient } from "@/lib/supabase/server";
import slugify from 'slugify'
import { customAlphabet } from 'nanoid'
import { getRegisterOrEditRoomSchema, RegisterOrEditRoomSchema } from "../schemas/rooms";
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response";
import { redirect } from "next/navigation";
import { cache } from "react";
import { getTranslations } from "next-intl/server";

const generateSuffix = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6)

export async function registerRoomAction(data: RegisterOrEditRoomSchema) {
    const t = await getTranslations('Dashboard.MyRooms.Drawer')

    const parse = getRegisterOrEditRoomSchema(t).safeParse(data)
    if (!parse.success) {
        return sendErrorResponse(400, parse.error.message, null)
    }

    const baseSlug = slugify(data.name, {
        lower: true,
        strict: true,
        trim: true,
    })

    const supabase = await createClient()

    const { error, data: room } = await supabase.from('rooms').insert({
        name: parse.data.name,
        description: parse.data.description,
        cover_theme: parse.data.icon,
        slug: `${baseSlug}-${generateSuffix()}`

    }).select('slug').single()

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    const tResponse = await getTranslations('Dashboard.Responses')
    return sendSuccessResponse(200, tResponse('Rooms.Create.success'), room)
}

export async function getRoomsAction(search: string = '') {
    const supabase = await createClient()

    const [roomsResponse, roomsCount] = await Promise.all([
        supabase.from('rooms').select('*, room_members(count)').ilike('name', `%${search}%`),
        supabase.from('rooms').select('id', { count: 'exact', head: true })
    ])

    if (roomsResponse.error) return sendErrorResponse(roomsResponse.error.code, roomsResponse.error.message, roomsResponse.error)
    if (roomsCount.error) return sendErrorResponse(roomsCount.error.code, roomsCount.error.message, roomsCount.error)


    const t = await getTranslations('Dashboard.Responses')
    return sendSuccessResponse(200, t('Rooms.Get.success'), { rooms: roomsResponse.data, count: roomsCount.count })
}

export const getRoomBySlugAction = cache(async (slug: string) => {
    const supabase = await createClient()

    const { data, error } = await supabase.from('rooms').select('*').eq('slug', slug).single()

    if (error) {
        if (error.code === 'PGRST116') return sendErrorResponse(404, 'Sala não encontrada', null)
        return sendErrorResponse(error.code, error.message, error)
    }




    const t = await getTranslations('Dashboard.Responses')
    return sendSuccessResponse(200, t('Rooms.Get.success'), data)
})


export async function updateRoomAction(id: number, data: RegisterOrEditRoomSchema) {
    const t = await getTranslations('Dashboard.MyRooms.Drawer')

    const parse = getRegisterOrEditRoomSchema(t).safeParse(data)
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

    const tResponse = await getTranslations('Dashboard.Responses')
    return sendSuccessResponse(200, tResponse('Rooms.Update.success'), room)
}


export async function deleteRoomAction(id: number) {

    const supabase = await createClient()

    const { error } = await supabase.from('rooms').delete().eq('id', id)
    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    const t = await getTranslations('Dashboard.Responses')
    return sendSuccessResponse(200, t('Rooms.Delete.success'), null)
}
