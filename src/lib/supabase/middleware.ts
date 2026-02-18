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
  const searchParams = request.nextUrl.searchParams


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

    // Evita que o usuário acesse a landing page em caso de PWA
    // Seta um cookie persistente na primeira visita com ?source=pwa
    const isPwaSource = searchParams.get('source') === 'pwa'
    const isPwaCookie = request.cookies.get('pwa')?.value === 'true'

    if (isPwaSource && !isPwaCookie) {
      const redirectUrl = new URL('/login', request.url)
      const redirectResponse = NextResponse.redirect(redirectUrl)
      redirectResponse.cookies.set('pwa', 'true', {
        path: '/',
        maxAge: 60 * 60 * 24 * 365, // 1 ano
        sameSite: 'lax',
      })
      return redirectResponse
    }

    if (path === '/' && (isPwaSource || isPwaCookie)) {
      return NextResponse.redirect(new URL('/login', request.url))
    }
  }

  // Cenario B: Usuário ESTÁ logado
  if (user) {

    if (path.startsWith('/login') || path === '/') {
      return NextResponse.redirect(new URL('/dashboard', request.url))
    }
  }

  return response
}