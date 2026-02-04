import { Profile } from '@/types/entities'
import { Crown, Trash } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { MotionDiv } from '@/components/Motion/Motion'
import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import HoverCard from '@/components/HoverCard/HoverCard'
import { useTranslations } from 'next-intl'

interface MemberSettingsCardProps {
    member: Profile
    delay: number
    onClick: (member: Profile) => void
    isOwner?: boolean
}

export default function MemberSettingsCard({ member, delay, onClick, isOwner = false }: MemberSettingsCardProps) {
    const t = useTranslations("Dashboard.RoomSettings.HoverInfo")
    const initialLetter = `${member.username ? member.username[0] : 'U'}`

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full cursor-pointer'>

            <Card onClick={() => onClick(member)} className='w-full p-2 flex flex-row items-center justify-between gap-2 md:hover:bg-gray-100 duration-200 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 dark:md:hover:bg-gray-800'>
                <div className='flex justify-center items-center gap-4 w-9/10'>
                    <Avatar className='w-17.5 h-17.5  rounded-lg'>
                        <AvatarImage className='rounded-lg' src="" />
                        <AvatarFallback className='text-black font-semibold  text-3xl bg-linear-to-tr from-secondary-100 to-primary-100 dark:to-secondary-700! dark:text-white dark:from-primary-700! w-full h-full flex items-center justify-center rounded-lg'>{initialLetter}</AvatarFallback>
                    </Avatar>
                    <div className='min-w-0 flex-1'>
                        <h2 className='text-lg md:text-xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{member.username}</h2>
                    </div>
                </div>
                {isOwner ? (
                    <HoverCard message={t('owner')} variant='alt' side='left'>
                        <Crown className='size-5 text-yellow-500 dark:text-yellow-400 mr-4' />
                    </HoverCard>
                )
                    : (<HoverCard message={t('removeMember')} variant='alt' side='left'>
                        <Trash className='size-5 text-red-500 dark:hover:text-red-400 mr-4' />
                    </HoverCard>)}
            </Card>
        </MotionDiv>
    )
}
