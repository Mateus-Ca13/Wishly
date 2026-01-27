import { Database } from '@/types/supabase'
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(
  request: NextRequest,
  options: { protectedPaths: string[] } = { protectedPaths: ['/dashboard', '/invite', '/'] }
) {

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })


  const supabase = createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll()
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value, options }) => request.cookies.set(name, value))
          response = NextResponse.next({
            request,
          })
          cookiesToSet.forEach(({ name, value, options }) =>
            response.cookies.set(name, value, options)
          )
        },
      },
    }
  )

  // IMPORTANTE: getUser() é mais seguro que getSession() aqui
  const { data: { user } } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname

  // Cenario A: Usuário NÃO está logado
  if (!user) {
    const shouldRedirect = options.protectedPaths.some((p) => {
      if (p === '/') return path === '/'
      return path.startsWith(p)
    })

    if (shouldRedirect) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Cenario B: Usuário ESTÁ logado
  if (user) {
    // Se ele tentar acessar /login ou a raiz /, manda pro Dashboard
    if (path.startsWith('/login') || path === '/') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return response
}