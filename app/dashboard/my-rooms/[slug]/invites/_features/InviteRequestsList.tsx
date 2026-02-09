'use client'
import { JoinRequest, Profile, Room } from '@/types/entities'
import InviteRequestCard from './InviteRequestCard'
import { Separator } from '@radix-ui/react-separator'
import { MotionDiv } from '@/components/Motion/Motion'
import { useTranslations } from 'next-intl'
import { acceptJoinRequestAction, declineJoinRequestAction } from '@/actions/invite'
import { toast } from 'sonner'
import JoinApprovalSwitch from './JoinApprovalSwitch'

interface InviteRequestsListProps {
    room: Room
    requests: JoinRequest[]
}

export default function InviteRequestsList({ room, requests }: InviteRequestsListProps) {
    const t = useTranslations('Dashboard.RoomSettings.InviteRequests')

    const onAccept = async (profile: Profile) => {
        const response = await acceptJoinRequestAction(room, profile.id)
        if (response.success) {
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }
    }

    const onDecline = async (profile: Profile) => {
        const response = await declineJoinRequestAction(room, profile.id)
        if (response.success) {
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full gap flex flex-col items-center justify-center gap-2 p-4 shadow-lg rounded-lg border-gray-200 dark:border-gray-800 dark:bg-gray-900 border'>
            <div className='flex flex-row items-center justify-between w-full'>
                <div className='flex flex-col text-start w-full'>
                    <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('title')}</h2>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('description')}</p>
                </div>
                <p className='text-sm md:text-base text-black dark:text-white px-2 bg-primary-100 dark:bg-primary-700 rounded-full font-semibold'>{requests.length}</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800 mb-4' />
            {requests.length > 0 ? (
                requests.map((request, index) => (
                    <InviteRequestCard
                        key={request.id}
                        profile={request.profile!}
                        delay={index * 0.1}
                        onAccept={onAccept}
                        onDecline={onDecline}
                    />
                ))
            ) : (
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300 text-center py-8'>{t('emptyState')}</p>
            )}
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800 mb-4' />
            <JoinApprovalSwitch room={room} />
        </MotionDiv>
    )
}
