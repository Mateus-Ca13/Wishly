'use client'
import { acceptInviteAction } from '@/actions/invite'
import Button from '@/components/Button/Button'
import { Profile, Room } from '@/types/entities'
import { redirect } from 'next/navigation'
import { toast } from 'sonner'
import { useTranslations } from 'next-intl'

type RoomInviteContainerProps = {
    room: Room | null
    currentUser: Profile
}

export default function RoomInviteContainer({ room, currentUser }: RoomInviteContainerProps) {
    const t = useTranslations('Dashboard.Invite')

    const handleAcceptInvite = async () => {
        if (!room || !currentUser) return
        const response = await acceptInviteAction(room, currentUser.id)

        if (response.success) {
            toast.success(t('successMessage'))
            setTimeout(() => {
                redirect(`/dashboard/my-rooms`)
            }, 3000)
        } else {
            toast.error(response.message)
        }
    }

    if (!room) return (
        <div className='flex flex-col items-center text-center justify-center bg-white dark:bg-gray-800 dark:border-gray-600 rounded-lg p-8 border-gray-200 border shadow-lg'>
            <h2 className='md:text-3xl text-xl font-semibold text-gradient mb-4'>{t('title')}</h2>
            <p className='md:text-lg text-base'>{t('roomDoesNotExist')}</p>
        </div>
    )

    return (
        <div className='flex flex-col items-center text-center justify-center bg-white dark:bg-gray-800 dark:border-gray-600 rounded-lg p-8 border-gray-200 border shadow-lg'>
            <h2 className='md:text-3xl text-xl font-semibold text-gradient mb-4'>{t('title')}</h2>
            <p className='md:text-lg text-base'>{t('description')}</p>

            <h2 className='md:text-2xl text-lg font-semibold mt-4'>{room.name}</h2>

            <Button className='cursor-pointer gap-1 text-lg w-full mt-6' variant='contained' onClick={handleAcceptInvite}>{t('button')}</Button>
        </div>
    )
}

