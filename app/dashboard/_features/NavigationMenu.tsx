'use client'
import { MotionDiv } from '@/components/Motion/Motion';
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils';
import { Sparkles, User, Users } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function NavigationMenu() {

  const navItems = [
    { href: '/dashboard/my-rooms', label: 'Grupos', icon: Users },
    { href: '/dashboard/my-wishlist', label: 'Wishlist', icon: Sparkles },
    { href: '/dashboard/account', label: 'Conta', icon: User },

  ]
  const pathname = usePathname();

  return (
    <>
      <div className="w-full h-36 md:h-48"></div> {/*Adicionado para dar margem abaixo do NavigationMenu*/}
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className='fixed bottom-0 md:bottom-8 left-1/2 -translate-x-1/2 max-w-7xl w-full md:w-11/12 z-50 '
      >
        <Card className='rounded-none! md:rounded-2xl! border-gray-200 shadow-2xl 
        w-full px-2 flex flex-row items-center justify-around bg-white py-0 pt-3 relative overflow-hidden
        dark:bg-gray-800 dark:border-gray-700 dark:text-white
        '>

          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== '/dashboard' && pathname.startsWith(item.href));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "relative flex flex-col items-center justify-center gap-1 pb-2 transition-colors w-full",
                  isActive ? "text-primary-500 dark:text-primary-300" : "text-black-custom dark:text-white"
                )}
              >
                {isActive && (
                  <MotionDiv
                    layoutId="active-nav-indicator"
                    className="absolute -top-3 w-1/2 h-1 bg-primary-300 rounded-b-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}

                <item.icon className="size-5 z-10" />
                <p className="text-sm font-medium z-10">{item.label}</p>
              </Link>
            )
          })}

        </Card>
      </MotionDiv>
    </>
  )
}
