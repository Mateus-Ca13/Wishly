'use client'
import Button from '@/components/Button/Button'
import { MotionDiv } from '@/components/Motion/Motion'
import { Separator } from '@radix-ui/react-separator'
import { useTranslations } from 'next-intl'

interface RemoveRoomButtonProps {
    onClick: () => void
}

export default function RemoveRoomButton({ onClick }: RemoveRoomButtonProps) {
    const t = useTranslations('Dashboard.RoomSettings')

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full flex flex-col items-center justify-center gap-2 p-4 shadow-lg rounded-lg border-gray-200 bg-white dark:bg-gray-900 dark:border-gray-800 border'>
            <div className='flex flex-col text-start w-full '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('removeRoomButton')}</h2>
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('removeRoomDescription')}</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800 mb-4' />

            <Button className='w-full py-4 font-semibold text-base md:text-lg' variant='destructive' onClick={onClick}>
                {t('removeRoomButton')}
            </Button>
        </MotionDiv>
    )
}