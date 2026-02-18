
'use client'
import { Share2 } from 'lucide-react'
import Image from 'next/image'
import { handleShare } from '@/utils/share'
import { getCurrentUrl } from '@/utils/url'
import Link from 'next/link'

export default function Footer() {

    const onClickShare = async () => {
        const inviteUrl = getCurrentUrl('origin')
        await handleShare(inviteUrl, "Wishly", "Confira minha lista!")
    }

    return (
        <footer className='bg-gray-950 w-full flex flex-col items-center justify-center p-4 pt-8 md:p-8 lg:p-16 gap-8 pb-8!'>
            <div className='w-full flex flex-col md:flex-row gap-8 items-start justify-center'>
                <div className='w-full md:w-1/3 flex flex-col gap-4'>
                    <div className='flex items-center gap-4'>
                        <Image src="/icon-192x192.png" alt="Wishly Logo" width={40} height={40} />
                        <h1 className='text-2xl font-bold text-white font-leckerli'>Wishly</h1>
                    </div>
                    <p className='text-gray-500 '>A plataforma que vai transformar a maneira como você troca presentes!</p>
                    <div className='flex items-start gap-2 border border-gray-500 p-2 rounded-full w-fit pr-2.5 hover:brightness-110 hover:scale-105 duration-200 cursor-pointer'>
                        <Share2 className='text-gray-500 size-4' onClick={onClickShare} />
                    </div>
                </div>
                <div className='w-full md:w-2/3 flex flex-col md:flex-row items-start justify-center gap-4'>
                    <div className='flex flex-col gap-4 w-full'>
                        <h1 className=' text-lg md:text-xl xl:text-2xl font-bold text-white'>Plataforma</h1>
                        <Link href="/#aboutapp" className='text-gray-500 hover:underline lg:text-lg'>Como funciona</Link>
                        <Link href="/#whyuse" className='text-gray-500 hover:underline lg:text-lg'>Recursos</Link>
                        <Link href="/#faq" className='text-gray-500 hover:underline lg:text-lg'>FAQ</Link>
                    </div>
                    <div className='flex flex-col gap-4 w-full'>
                        <h1 className=' text-lg md:text-xl xl:text-2xl font-bold text-white'>Legal</h1>
                        <Link href="/use-terms" className='text-gray-500 hover:underline lg:text-lg'>Termos de Uso</Link>
                        <Link href="/privacy-policy" className='text-gray-500 hover:underline lg:text-lg'>Política de Privacidade</Link>
                        <Link href="/cookies-policy" className='text-gray-500 hover:underline lg:text-lg'>Política de Cookies</Link>
                    </div>
                </div>
            </div>
            <div className='w-full border-t border-gray-900 pt-8 flex items-center justify-center'>
                <p className='text-gray-600 text-sm'>© {new Date().getFullYear()} Wishly. Todos os direitos reservados.</p>
            </div>
        </footer>
    )
}
