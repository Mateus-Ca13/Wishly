'use server'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { getLoginSchema, LoginSchema, getRegisterProfileSchema, RegisterProfileSchema, ForgetPasswordSchema, getForgetPasswordSchema, ResetPasswordSchema, getResetPasswordSchema, ChangePasswordSchema, getChangePasswordSchema } from '../schemas/auth'
import { sendErrorResponse, sendSuccessResponse } from '@/utils/response'
import { customAlphabet } from 'nanoid'
import slugify from 'slugify'
import { getTranslations } from 'next-intl/server'
import { headers } from 'next/headers'

const generateSuffix = customAlphabet('abcdefghijklmnopqrstuvwxyz0123456789', 6)

export async function authLoginAction(data: LoginSchema, nextUrl: string) {
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
  redirect(nextUrl)
}

export async function authRegisterAction(userData: RegisterProfileSchema, nextUrl: string) {
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
    const t = await getTranslations('Dashboard.Responses')
    if (error.code === 'user_already_exists') return sendErrorResponse(400, t('Auth.Register.alreadyExists'), null)
    return sendErrorResponse(error.code, error.message, null)
  }

  revalidatePath('/', 'layout')
  redirect(nextUrl)
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

export async function authForgetPasswordAction(userData: ForgetPasswordSchema) {
  const tForm = await getTranslations('Dashboard.Profile.Form')

  const parse = getForgetPasswordSchema(tForm).safeParse(userData)
  if (!parse.success) return sendErrorResponse(400, parse.error.message, null)


  const supabase = await createClient()

  const origin = await headers().then(h => h.get('origin'))

  if (!origin) return sendErrorResponse(500, 'Internal Server Error', null)

  const { error } = await supabase.auth.resetPasswordForEmail(parse.data.email, {
    redirectTo: `${origin}/auth/callback?redirect_to=/update-password`,
  })

  if (error) return sendErrorResponse(error.code, error.message, null)

  return sendSuccessResponse(200, 'success', null)

}

export async function authUpdatePasswordAction(userData: ResetPasswordSchema) {
  const tForm = await getTranslations('Dashboard.Profile.Form')

  const parse = getResetPasswordSchema(tForm).safeParse(userData)
  if (!parse.success) return sendErrorResponse(400, parse.error.message, null)

  const supabase = await createClient()

  const { error } = await supabase.auth.updateUser({
    password: parse.data.password,
  })

  if (error) {
    const t = await getTranslations('Dashboard.Responses')
    if (error.code === 'same_password') return sendErrorResponse(400, t('Auth.UpdatePassword.samePassword'), null)
    return sendErrorResponse(error.code, error.message, null)
  }

  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function authDeleteAccountAction(confirmUsername: string) {
  const t = await getTranslations('Dashboard.Responses')

  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user) {
    return sendErrorResponse(401, t('Auth.unauthorized'), null)
  }

  const { data: profile, error: profileError } = await supabase
    .from('profiles')
    .select('username')
    .eq('id', user.id)
    .single()

  if (profileError || !profile) {
    return sendErrorResponse(500, t('General.error'), null)
  }

  if (profile.username !== confirmUsername) {
    return sendErrorResponse(400, t('Auth.DeleteAccount.usernameMismatch'), null)
  }

  const { createClientAdmin } = await import('@/lib/supabase/admin')
  const adminClient = await createClientAdmin()

  const { error: deleteError } = await adminClient.auth.admin.deleteUser(user.id)

  if (deleteError) {
    return sendErrorResponse(500, t('Auth.DeleteAccount.error'), null)
  }

  await supabase.auth.signOut()

  revalidatePath('/', 'layout')
  redirect('/login')
}

export async function authChangePasswordAction(data: ChangePasswordSchema) {
  const tForm = await getTranslations('Dashboard.Profile.Form')
  const t = await getTranslations('Dashboard.Responses')

  const parse = getChangePasswordSchema(tForm).safeParse(data)
  if (!parse.success) return sendErrorResponse(400, parse.error.message, null)

  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()

  if (authError || !user || !user.email) {
    return sendErrorResponse(401, t('Auth.unauthorized'), null)
  }

  // Verify current password by re-authenticating
  const { error: signInError } = await supabase.auth.signInWithPassword({
    email: user.email,
    password: parse.data.current_password,
  })

  if (signInError) {
    return sendErrorResponse(400, t('Auth.ChangePassword.wrongCurrentPassword'), null)
  }

  // Update to new password
  const { error: updateError } = await supabase.auth.updateUser({
    password: parse.data.password,
  })

  if (updateError) {
    if (updateError.code === 'same_password') return sendErrorResponse(400, t('Auth.UpdatePassword.samePassword'), null)
    return sendErrorResponse(500, t('General.error'), null)
  }

  return sendSuccessResponse(200, t('Auth.ChangePassword.success'), null)
}


