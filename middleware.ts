import { type NextRequest } from 'next/server'
import { updateSession } from './src/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  // Simplesmente repassa para a nossa função lógica
  return await updateSession(request)
}

export const config = {
  // O Matcher diz onde o middleware deve rodar.
  // Aqui estamos excluindo arquivos estáticos (_next, imagens, favicon)
  // para não pesar o servidor à toa.
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}