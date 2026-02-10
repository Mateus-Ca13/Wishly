'use client'

import { MotionDiv } from '@/components/Motion/Motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import UpdatePasswordForm from './UpdatePasswordForm';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import useAuth from '@/hooks/useAuth';
import Button from '@/components/Button/Button';

export default function UpdatePasswordWrapper() {
    const t = useTranslations('Dashboard.UpdatePassword');
    const { handleLogout } = useAuth({});

    return (
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

                <h1 className="text-3xl font-bold mb-4 text-center">{t('title')}</h1>
                <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-400">{t('description')}</p>

                <UpdatePasswordForm />

                <Button
                    onClick={handleLogout}
                    variant='blank'
                    className='flex items-center justify-center gap-2 text-center mt-2 text-primary-700 dark:text-primary-300 hover:underline'>
                    <ArrowLeft className='size-4' />
                    {t('backToLogin')}
                </Button>
            </div>
        </MotionDiv>
    )
}
