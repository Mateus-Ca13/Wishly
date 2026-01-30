'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { loginSchema, LoginSchema, registerProfileSchema, RegisterProfileSchema } from '../schemas/auth'
import { sendErrorResponse } from '@/utils/response'
import { customAlphabet } from 'nanoid'
import slugify from 'slugify'

const generateSuffix = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6)

export async function authLoginAction(data: LoginSchema) {

  const parse = loginSchema.safeParse(data)
  if (!parse.success) {
    return sendErrorResponse(400, parse.error.message, null)
  }

  const supabase = await createClient()

  const { error } = await supabase.auth.signInWithPassword({
    email: parse.data.email,
    password: parse.data.password,
  })

  if (error) {
    const errorMessage = error.code === 'invalid_credentials' ? 'Email ou senha incorretos' : error.message

    return sendErrorResponse(error.code, errorMessage, error)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard/my-rooms')
}

export async function authRegisterAction(userData: RegisterProfileSchema) {
  const parse = registerProfileSchema.safeParse(userData)
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
      }
    }
  })

  if (error) {
    if (error.code === 'user_already_exists') return sendErrorResponse(400, 'Este e-mail já está cadastrado', null)
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