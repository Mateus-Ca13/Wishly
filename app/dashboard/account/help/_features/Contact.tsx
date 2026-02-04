'use client'
import { MotionDiv } from '@/components/Motion/Motion'
import { Separator } from '@/components/ui/separator'
import { useTranslations } from 'next-intl'
import { ChevronRight, Mail } from 'lucide-react'
import { toast } from 'sonner'

export default function Contact() {
    const t = useTranslations('Dashboard.Help.Contact')
    const t2 = useTranslations('Dashboard.Responses.Help')
    const email = "suportewishly@gmail.com"

    const handleCopy = () => {
        navigator.clipboard.writeText(email)
        toast.success(t2('emailCopied'))
    }
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='flex flex-col gap-4 p-4 rounded-xl border shadow border-gray-200 dark:border-gray-800 dark:bg-gray-900'>

            <div className='flex flex-col '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('title')}</h2>
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('description')}</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />
            <div className='flex flex-col w-full '>
                <button onClick={handleCopy} className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <Mail className='size-10 bg-primary-100 dark:bg-primary-700 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold dark:text-white'>{t('ContactOptionsGroup.Email.title')}</p>
                        <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{email}</p>
                    </div>
                    <ChevronRight className='ms-auto size-5 dark:text-white' />
                </button>
            </div>
        </MotionDiv>
    )
}
