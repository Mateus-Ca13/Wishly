import { Database } from '@/types/supabase'
import { createServerClient } from '@supabase/ssr'
import { NextResponse, type NextRequest } from 'next/server'

export async function updateSession(
  request: NextRequest,
  options: { protectedPaths: string[] } = { protectedPaths: ['/dashboard', '/invite'] }
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

  const { data: { user } } = await supabase.auth.getUser()

  const path = request.nextUrl.pathname
  console.log('path', path);


  // Cenario A: Usuário NÃO está logado
  if (!user) {
    const isProtected = options.protectedPaths.some((p) => path.startsWith(p))

    if (isProtected) {
      //Salva a URL que ele tentou acessar
      const loginUrl = new URL('/login', request.url)

      //Adiciona ?next=/invite/slug na URL de login
      loginUrl.searchParams.set('next', path)

      return NextResponse.redirect(loginUrl)
    }
  }

  // Cenario B: Usuário ESTÁ logado
  if (user) {

    if (path.startsWith('/login')) {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return response
}