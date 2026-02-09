import { MotionDiv } from '@/components/Motion/Motion'
import { Room } from '@/types/entities'
import { useTranslations } from 'next-intl'
import LinkCard from '@/components/LinkCard/LinkCard'
import { Pencil } from 'lucide-react'
import { Separator } from '@/components/ui/separator'

interface RoomInfoProps {
    room: Room
}

export default function RoomInfo({ room }: RoomInfoProps) {
    const t = useTranslations('Dashboard.RoomSettings')

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full'>
            <div className='w-full flex flex-col justify-start items-start gap-4 shadow-lg rounded-lg p-4 border-gray-200 dark:border-gray-800 border bg-white dark:bg-gray-900'>
                <div className='flex flex-col text-start w-full '>
                    <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('formTitle')}</h2>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('formDescription')}</p>
                </div>
                <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />
                <div className='flex flex-col justify-center items-center text-center w-full gap-2 rounded-lg p-2 bg-gray-50 dark:bg-gray-800 border-gray-200 dark:border-gray-800 border'>
                    <h2 className='text-lg md:text-2xl font-semibold dark:text-white rounded-lg px-4 truncate'>{room.name}</h2>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-300 rounded-lg px-4 truncate'>{room.description || t('noDescription')}</p>
                </div>
                <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />
                <LinkCard
                    icon={Pencil}
                    title={t('editRoomLink')}
                    href={`/dashboard/my-rooms/${room.slug}/settings/info`}
                />
            </div>
        </MotionDiv >
    )
}
