'use client'
import Button from '@/components/Button/Button'
import { MotionDiv } from '@/components/Motion/Motion'
import { Separator } from '@/components/ui/separator'
import useAuth from '@/hooks/useAuth'
import { ChevronRight, CircleQuestionMark, CircleStar, LogOut, Settings, Shield, User } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function AccountButtonsContainer() {
    const t = useTranslations('Dashboard.Account');
    const { handleLogout } = useAuth({})

    return (
        <div className='w-full flex flex-col items-center justify-center gap-4'>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full flex flex-col items-start justify-start gap-2 md:gap-4 shadow p-4 rounded-lg border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden mb-2 dark:text-white'>{t('MyAccountGroup.title')}</h2>
                <Link href='/dashboard/account/profile' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <User className='size-10 bg-primary-100 dark:bg-primary-700 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold dark:text-white'>{t('MyAccountGroup.EditProfile.title')}</p>
                        <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('MyAccountGroup.EditProfile.description')}</p>
                    </div>
                    <ChevronRight className='ms-auto size-5 dark:text-white' />
                </Link>
                <Separator className='w-full bg-gray-200 dark:bg-gray-800' />
                <Link href='/dashboard/account/subscriptions' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <CircleStar className='size-10 bg-primary-100 dark:bg-primary-700 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold dark:text-white'>{t('MyAccountGroup.Subscription.title')}</p>
                        <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('MyAccountGroup.Subscription.description')}</p>
                    </div>
                    <ChevronRight className='ms-auto size-5 dark:text-white' />
                </Link>
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full flex flex-col items-start justify-start gap-2 md:gap-4 shadow p-4 rounded-lg border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden mb-2 dark:text-white'>{t('SettingsGroup.title')}</h2>
                <Link href='/dashboard/account/privacy' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <Shield className='size-10 bg-primary-100 dark:bg-primary-700 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold dark:text-white'>{t('SettingsGroup.Privacy.title')}</p>
                    </div>
                    <ChevronRight className='ms-auto size-5 dark:text-white' />
                </Link>
                <Separator className='w-full bg-gray-200 dark:bg-gray-800' />
                <Link href='/dashboard/account/preferences' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <Settings className='size-10 bg-primary-100 dark:bg-primary-700 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold dark:text-white'>{t('SettingsGroup.Preferences.title')}</p>
                    </div>
                    <ChevronRight className='ms-auto size-5 dark:text-white' />
                </Link>
                <Separator className='w-full bg-gray-200 dark:bg-gray-800' />
                <Link href='/dashboard/account/help' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <CircleQuestionMark className='size-10 bg-primary-100 dark:bg-primary-700 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold dark:text-white'>{t('SettingsGroup.Help.title')}</p>
                    </div>
                    <ChevronRight className='ms-auto size-5 dark:text-white' />
                </Link>
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full flex flex-col items-start justify-start gap-2 md:gap-4 shadow p-4 rounded-lg border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>
                <Button onClick={handleLogout} className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-secondary-100/30' variant='blank' >
                    <LogOut className='size-10 bg-secondary-100 dark:text-white dark:bg-secondary-700 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold dark:text-white'>{t('Exit.title')}</p>
                    </div>
                    <ChevronRight className='ms-auto size-5 dark:text-white' />
                </Button>
            </MotionDiv>

        </div>
    )
}

