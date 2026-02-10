'use client'

import { MotionDiv } from '@/components/Motion/Motion';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import ForgetPasswordForm from './ForgetPasswordForm';
import { useState } from 'react';

export default function ForgetPasswordWrapper() {
    const t = useTranslations('Dashboard.ForgetPassword');
    const [formStep, setFormStep] = useState<'forgetPassword' | 'finished'>('forgetPassword');

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
                {formStep === 'forgetPassword' ? (
                    <>
                        <h1 className="text-3xl font-bold mb-4 text-center">{t('title')}</h1>
                        <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-400">{t('description')}</p>

                        <ForgetPasswordForm setFormStep={setFormStep} />
                    </>
                ) : (
                    <>
                        <h1 className="text-3xl font-bold mb-4 text-center text-gradient">{t('finishedTitle')}</h1>
                        <p className="text-base md:text-lg text-center text-gray-600 dark:text-gray-400">{t('finishedDescription')}</p>
                    </>
                )}
            </div>
        </MotionDiv>
    )
}
