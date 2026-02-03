'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getLoginSchema, LoginSchema, getRegisterProfileSchema, RegisterProfileSchema } from '../schemas/auth'
import { sendErrorResponse } from '@/utils/response'
import { customAlphabet } from 'nanoid'
import slugify from 'slugify'
import { getTranslations } from 'next-intl/server'

const generateSuffix = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6)

export async function authLoginAction(data: LoginSchema) {
  const t = await getTranslations('Dashboard.Auth.Login')
  const tForm = await getTranslations('Dashboard.Profile.Form')

  const parse = getLoginSchema(tForm).safeParse(data)
  if (!parse.success) {
    return sendErrorResponse(400, parse.error.message, null)
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: parse.data.email,
    password: parse.data.password,
  })

  if (error) {
    const tResponse = await getTranslations('Dashboard.Responses')
    const errorMessage = error.code === 'invalid_credentials' ? tResponse('Auth.Login.invalidCredentials') : error.message

    return sendErrorResponse(error.code, errorMessage, error)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard/my-rooms')
}

export async function authRegisterAction(userData: RegisterProfileSchema) {
  const t = await getTranslations('Dashboard.Profile.Toast')
  const tForm = await getTranslations('Dashboard.Profile.Form')

  const parse = getRegisterProfileSchema(tForm).safeParse(userData)
  if (!parse.success) return sendErrorResponse(400, parse.error.message, null)


  const baseSlug = slugify(parse.data.username, {
    lower: true,
    strict: true,
    trim: true,
  })

  const supabase = await createClient()

  const { data: registerData, error } = await supabase.auth.signUp({
    email: parse.data.email,
    password: parse.data.password,
    options: {
      data: {
        full_name: parse.data.full_name,
        username: parse.data.username,
        slug: `${baseSlug}-${generateSuffix()}`,
        birthday: parse.data.birthday,
        gender: parse.data.gender,
      }
    }
  })

  if (error) {
    const tResponse = await getTranslations('Dashboard.Responses')
    if (error.code === 'user_already_exists') return sendErrorResponse(400, tResponse('Auth.Register.alreadyExists'), null)
    return sendErrorResponse(error.code, error.message, null)
  }



  revalidatePath('/', 'layout')
  redirect('/dashboard/my-rooms')
}


export async function authLogoutAction() {
  const supabase = await createClient()

  const { error } = await supabase.auth.signOut()

  if (error) {
    return sendErrorResponse(error.code, error.message, null)
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}