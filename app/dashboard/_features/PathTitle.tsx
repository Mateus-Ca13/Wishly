'use client'
import Button from '@/components/Button/Button';
import HoverCard from '@/components/HoverCard/HoverCard';
import { MotionAnimatePresence, MotionDiv, MotionH1 } from '@/components/Motion/Motion';
import { Separator } from '@radix-ui/react-separator';
import { ChevronLeftIcon } from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

export default function PathTitle() {

    const path = usePathname();
    const router = useRouter();

    const navsTitles = [ // Prioridade maior para URL dinâmicas
        { href: '/dashboard/account/profile', title: 'Perfil' },
        { href: '/dashboard/account/subscriptions', title: 'Assinaturas' },
        { href: '/dashboard/account/privacy', title: 'Privacidade' },
        { href: '/dashboard/account/preferences', title: 'Preferências' },
        { href: '/dashboard/account/help', title: 'Ajuda' },
        { href: '/dashboard/my-rooms/', title: 'Detalhes do Grupo' },
        { href: '/dashboard/my-rooms', title: 'Meus Grupos' },
        { href: '/dashboard/wishlists/', title: 'Wishlist de Membro' },
        { href: '/dashboard/my-wishlist', title: 'Minha Whishlist' },
        { href: '/dashboard/account', title: 'Minha Conta' },
    ]

    const pathsWithoutBackButton = [
        '/dashboard/my-rooms',
        '/dashboard/my-wishlist',
        '/dashboard/account',
    ]

    const currentPath = navsTitles.find(nav => path.startsWith(nav.href));
    const title = currentPath ? currentPath.title : 'Dashboard';

    return (
        <header className="overflow-hidden w-full flex flex-col items-center justify-center p-4 relative max-w-7xl">

            {!pathsWithoutBackButton.includes(path) && (<MotionDiv
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className='absolute left-4 top-8.5 md:top-10 -translate-y-1/2'
            >

                <HoverCard message="Voltar" variant='alt' side="right">
                    <Button
                        className=''
                        onClick={() => router.back()} variant='blank'><ChevronLeftIcon className='size-7 md:size-9' />
                    </Button>
                </HoverCard>
            </MotionDiv>
            )}

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
