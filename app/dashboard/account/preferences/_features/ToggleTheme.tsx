"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTranslations } from "next-intl"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()
    const t = useTranslations('Dashboard.Preferences.Themes');

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }


    return (
        <div className='flex flex-col items-start gap-2'>
            <p className='text-lg md:text-xl text-black me-2 dark:text-white '>{t('description')}</p>
            <div className='flex flex-col md:flex-row items-center gap-2 w-full'>
                <div onClick={() => setTheme('light')} className={`flex flex-col border-2 w-full md:w-1/3 border-gray-200 dark:border-gray-800 items-center gap-2 px-12 py-3 md:py-6 rounded-lg cursor-pointer ${theme === 'light' ? 'bg-primary-50 dark:bg-gray-800 border-primary-300' : ''}`}>
                    <Sun className='text-black dark:text-white text-lg md:text-xl' />
                    <p className='text-black dark:text-white text-lg md:text-xl'>{t('light')}</p>
                </div>
                <div onClick={() => setTheme('dark')} className={`flex flex-col border-2 w-full md:w-1/3 border-gray-200 dark:border-gray-800 items-center gap-2 px-12 py-3 md:py-6 rounded-lg cursor-pointer ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-800 dark:border-primary-500!' : ''}`}>
                    <Moon className='text-black dark:text-white text-lg md:text-xl' />
                    <p className='text-black dark:text-white text-lg md:text-xl'>{t('dark')}</p>
                </div>
                <div onClick={() => setTheme('system')} className={`flex flex-col border-2 w-full md:w-1/3 border-gray-200 dark:border-gray-800 items-center gap-2 px-12 py-3 md:py-6 rounded-lg cursor-pointer ${theme === 'system' ? 'bg-primary-50 dark:bg-gray-800 border-primary-300 dark:border-primary-500' : ''}`}>
                    <Monitor className='text-black dark:text-white text-lg md:text-xl' />
                    <p className='text-black dark:text-white text-lg md:text-xl'>{t('system')}</p>
                </div>
            </div>
        </div>
    )
}