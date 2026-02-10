import { createClient } from '@/lib/supabase/server'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
    const { searchParams, origin } = new URL(request.url)

    const code = searchParams.get('code')
    const next = searchParams.get('redirect_to') ?? '/dashboard'

    if (code) {
        const supabase = await createClient()

        // Troca o código temporário por uma sessão real
        const { error } = await supabase.auth.exchangeCodeForSession(code)

        if (!error) { // Usuário agora está LOGADO.

            const response = NextResponse.redirect(`${origin}${next}`)

            if (next.includes('/update-password')) {
                response.cookies.set('can_reset_password', 'true', {
                    path: '/',
                    httpOnly: true,
                    maxAge: 600, // Só vale por 10 minutos. Fora isso sempre joga pra dashboard
                    sameSite: 'lax'
                })
            }

            return response
        }
    }

    // Manda pra uma página de erro
    return NextResponse.redirect(`${origin}/auth/auth-code-error`)
}