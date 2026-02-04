import React from 'react'
import { MotionDiv } from '@/components/Motion/Motion'
import { Separator } from '@/components/ui/separator'
import ToggleTheme from './ToggleTheme'
import SelectLanguage from './SelectLanguage'
import { getTranslations } from 'next-intl/server'

export default async function PreferencesContainer() {
    const t = await getTranslations('Dashboard.Preferences');

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='flex shadow flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>

            <div className='flex flex-col '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('Themes.title')}</h2>
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('Themes.description')}</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />
            <div className='flex flex-col w-full '>
                <ToggleTheme />
            </div>
            <div className='flex flex-col '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('Language.title')}</h2>
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('Language.description')}</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />
            <div className='flex flex-col w-full '>
                <SelectLanguage />
            </div>
        </MotionDiv>
    )
}

