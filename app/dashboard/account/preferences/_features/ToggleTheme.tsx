"use client"

import { Monitor, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()

    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        return null
    }


    return (
        <div className='flex flex-col items-start gap-2'>
            <p className='text-lg md:text-xl text-black me-2 dark:text-white '>Escolha o tema do aplicativo</p>
            <div className='flex flex-col md:flex-row items-center gap-2 w-full'>
                <div onClick={() => setTheme('light')} className={`flex flex-col border-2 w-full md:w-1/3 border-gray-200 dark:border-gray-800 items-center gap-2 px-12 py-6 rounded-lg cursor-pointer ${theme === 'light' ? 'bg-primary-50 dark:bg-gray-800 border-primary-300' : ''}`}>
                    <Sun className='text-black dark:text-white text-lg md:text-xl' />
                    <p className='text-black dark:text-white text-lg md:text-xl'>Claro</p>
                </div>
                <div onClick={() => setTheme('dark')} className={`flex flex-col border-2 w-full md:w-1/3 border-gray-200 dark:border-gray-800 items-center gap-2 px-12 py-6 rounded-lg cursor-pointer ${theme === 'dark' ? 'bg-gray-200 dark:bg-gray-800 dark:border-primary-500!' : ''}`}>
                    <Moon className='text-black dark:text-white text-lg md:text-xl' />
                    <p className='text-black dark:text-white text-lg md:text-xl'>Escuro</p>
                </div>
                <div onClick={() => setTheme('system')} className={`flex flex-col border-2 w-full md:w-1/3 border-gray-200 dark:border-gray-800 items-center gap-2 px-12 py-6 rounded-lg cursor-pointer ${theme === 'system' ? 'bg-gray-200 dark:bg-gray-800 border-primary-500 dark:border-primary-500' : ''}`}>
                    <Monitor className='text-black dark:text-white text-lg md:text-xl' />
                    <p className='text-black dark:text-white text-lg md:text-xl'>Automático</p>
                </div>
            </div>
        </div>
    )
}