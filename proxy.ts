import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { intlMiddleware } from '@/lib/i18n/middleware'

export async function proxy(request: NextRequest) {
  // Executa o middleware do Supabase primeiro (autenticação + sessão)
  const supabaseResponse = await updateSession(request)

  const intlResponse = intlMiddleware(request)

  if (supabaseResponse && supabaseResponse.status >= 300 && supabaseResponse.status < 400) {

    intlResponse.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'x-middleware-rewrite') {
        supabaseResponse.headers.set(key, value)
      }
    })
    return supabaseResponse
  }


  if (supabaseResponse) {

    intlResponse.headers.forEach((value, key) => {
      if (key.toLowerCase() !== 'x-middleware-rewrite') {
        supabaseResponse.headers.set(key, value)
      }
    })
    return supabaseResponse
  }

  // Fallback: retorna o intlResponse se não houver supabaseResponse
  return intlResponse
}

export const config = {
  matcher: [
    // Match all paths except static files
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}