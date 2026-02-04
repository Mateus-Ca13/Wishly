'use client'
import { MotionDiv } from '@/components/Motion/Motion'
import { useTranslations } from 'next-intl'

export default function AppDetails() {
    const t = useTranslations('Dashboard.Utils.appInfo')

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full flex flex-col items-center justify-center gap-2 md:gap-4 mt-4'
        >
            <p className='text-sm md:text-base text-gray-500 dark:text-gray-400'>{t('version')} {process.env.NEXT_PUBLIC_APP_VERSION} (Beta)</p>
            <p className='text-sm md:text-base text-gray-500 dark:text-gray-400'>© {new Date().getFullYear()} {t('title')}. {t('copyright')}</p>
            <p className='text-sm md:text-base text-gray-500 dark:text-gray-400'>{t('developer')} <a href='https://www.linkedin.com/in/mateus-cavichion/' target='_blank' className='text-primary-500 hover:underline'>Mateus Cavichion</a></p>

        </MotionDiv>
    )
}

