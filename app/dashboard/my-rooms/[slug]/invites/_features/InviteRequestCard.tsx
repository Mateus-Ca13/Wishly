'use client'
import { Profile } from '@/types/entities'
import { Check, X } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { MotionDiv } from '@/components/Motion/Motion'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Button from '@/components/Button/Button'
import { useTranslations } from 'next-intl'

interface InviteRequestCardProps {
    profile: Profile
    delay: number
    onAccept: (profile: Profile) => void
    onDecline: (profile: Profile) => void
}

export default function InviteRequestCard({ profile, delay, onAccept, onDecline }: InviteRequestCardProps) {
    console.log(profile)
    const t = useTranslations('Dashboard.RoomSettings.InviteRequests')
    const initialLetter = `${profile.username ? profile.username[0] : 'U'}`

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full'>

            <Card className='w-full p-2 flex flex-row items-center justify-between gap-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900'>
                <div className='flex justify-center items-center gap-4 flex-1 min-w-0'>
                    <Avatar className='w-17.5 h-17.5  rounded-lg'>
                        <AvatarImage className='rounded-lg' src="" />
                        <AvatarFallback className='text-black font-semibold  text-3xl bg-linear-to-tr from-secondary-100 to-primary-100 dark:to-secondary-700! dark:text-white dark:from-primary-700! w-full h-full flex items-center justify-center rounded-lg'>{initialLetter}</AvatarFallback>
                    </Avatar>
                    <div className='min-w-0 flex-1'>
                        <h2 className='text-lg md:text-xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{profile.username}</h2>
                        <p className='text-sm text-gray-500 dark:text-gray-400 truncate'>{profile.full_name}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2 shrink-0'>
                    <Button
                        variant='contained'
                        className='rounded-full p-2! md:p-4!'
                        onClick={() => onAccept(profile)}
                    >
                        <Check className='size-5' />
                    </Button>
                    <Button
                        variant='destructive'
                        className='rounded-full p-2! md:p-4!'
                        onClick={() => onDecline(profile)}
                    >
                        <X className='size-5' />
                    </Button>
                </div>
            </Card>
        </MotionDiv>
    )
}
