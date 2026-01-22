'use client'
import { MotionAnimatePresence, MotionH1 } from '@/components/Motion/Motion';
import { Separator } from '@radix-ui/react-separator';
import { usePathname } from 'next/navigation';
import { getRoomBySlugAction } from '../../../src/actions/rooms';

export default function PathTitle() {

    const path = usePathname();
    const userInfo = getRoomBySlugAction

    const navsTitles = [ // Prioridade maior para URL dinâmicas
        { href: '/dashboard/my-rooms/', title: 'Detalhes do Grupo' },
        { href: '/dashboard/my-rooms', title: 'Meus Grupos' },
        { href: '/dashboard/wishlists/', title: 'Lista de Desejos' },
        { href: '/dashboard/my-wishlist', title: 'Lista de Desejos' },
        { href: '/dashboard/account', title: 'Minha Conta' },
    ]

    const currentPath = navsTitles.find(nav => path.startsWith(nav.href));
    const title = currentPath ? currentPath.title : 'Dashboard';

  return (
    <header className="overflow-hidden w-full flex flex-col items-center justify-center p-4">
            <MotionAnimatePresence mode='wait'>
                <MotionH1
                    key={title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className='text-2xl md:text-3xl font-semibold'
                >
                    {title}
                </MotionH1>
            </MotionAnimatePresence>
            <Separator orientation="horizontal" className="my-2 md:my-4 bg-primary-100 w-1/2 md:w-4/12 h-1 rounded-2xl" />
        </header>
  )
}
