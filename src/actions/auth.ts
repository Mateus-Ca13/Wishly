'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { loginSchema, LoginSchema, registerSchema, RegisterSchema } from '../../app/login/_features/schemas'
import { sendErrorResponse } from '@/utils/response'

export async function loginAction(data: LoginSchema) {
  
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
    const errorMessage = error.code ===  'invalid_credentials' ? 'Email ou senha incorretos' : error.message
    
    return sendErrorResponse(error.code, errorMessage, error)
  }    
 
  revalidatePath('/', 'layout')
  redirect('/dashboard') 
}

export async function signupAction(data: RegisterSchema) {
  const parse = registerSchema.safeParse(data)
  if (!parse.success) return sendErrorResponse(400, parse.error.message, null)

  const supabase = await createClient()

  const { error } = await supabase.auth.signUp({
    email: parse.data.email,
    password: parse.data.password,
    options: {
      data: {
        full_name: parse.data.name,
        username: parse.data.username,
      }
    }
  })

  if (error) {
    return sendErrorResponse(error.code, error.message, null)
  }

  revalidatePath('/', 'layout')
  redirect('/dashboard') 
}