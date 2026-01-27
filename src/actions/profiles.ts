'use server'

import { createClient } from "@/lib/supabase/server";
import { EditProfileSchema, editProfileSchema } from "@/schemas/auth";
import { sendErrorResponse, sendSuccessResponse } from "@/utils/response";
import { cache } from "react";
import slugify from "slugify";
import { customAlphabet } from 'nanoid'

const generateSuffix = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6)

export const getUserBySlugAction = cache(async (slug: string) => {
    const supabase = await createClient()

    const { data, error } = await supabase.from('public_profiles').select('*').eq('slug', slug).single()

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, "Usuário retornado com sucesso!", data)
})

export const getUserByIdAction = cache(async (id: string) => {
    const supabase = await createClient()

    const { data, error } = await supabase.from('public_profiles').select('*').eq('id', id).single()

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    return sendSuccessResponse(200, "Usuário retornado com sucesso!", data)
})

export const getCurrentUserAction = cache(async () => {
    const supabase = await createClient();
    const { data: { user }, error } = await supabase.auth.getUser();

    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }

    const { data: profile } = await supabase.from('public_profiles').select('*').eq('id', user?.id!).single()

    return sendSuccessResponse(200, "Usuário retornado com sucesso!", profile)
})

export const updateProfileAction = async (profile: EditProfileSchema, userId: string) => {

    const parsedProfile = editProfileSchema.parse(profile)

    const baseSlug = slugify(parsedProfile.username, {
        lower: true,
        strict: true,
        trim: true,
    })

    const newSlug = `${baseSlug}-${generateSuffix()}`

    const supabase = await createClient()
    const { data, error } = await supabase.from('public_profiles').update({
        ...parsedProfile,
        slug: newSlug,
    }).eq('id', userId).select().single()
    if (error) {
        return sendErrorResponse(error.code, error.message, error)
    }
    return sendSuccessResponse(200, "Perfil atualizado com sucesso!", data)
}
