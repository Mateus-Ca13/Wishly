'use client'

import { MotionDiv } from '@/components/Motion/Motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ArrowLeft, ShieldAlert } from 'lucide-react';

export default function AuthCodeErrorPage() {
    const t = useTranslations('Dashboard.AuthCodeError');

    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center bg-linear-to-tr from-primary-500 to-secondary-500">
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="flex flex-col items-center justify-center m-3 mb-8"
            >
                <Image
                    src="/icon_faded.png"
                    alt="Wishly Logo"
                    width={200}
                    height={100}
                    className='mb-4'
                />
                <div
                    className='w-full max-w-md p-8 bg-white dark:bg-gray-800 rounded-2xl shadow-xl space-y-6 flex flex-col items-center justify-center'>

                    <ShieldAlert className='size-12 text-red-500' />
                    <h1 className="text-3xl font-bold mb-2 text-center">{t('title')}</h1>
                    <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-400">{t('description')}</p>

                    <Link
                        href="/login"
                        className='flex items-center justify-center gap-2 text-center mt-4 text-primary-700 dark:text-primary-300 hover:underline'>
                        <ArrowLeft className='size-4' />
                        {t('backToLogin')}
                    </Link>
                </div>
            </MotionDiv>
        </section>
    )
}
