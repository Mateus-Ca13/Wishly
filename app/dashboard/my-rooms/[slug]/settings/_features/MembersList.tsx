import { Profile } from '@/types/entities'
import MemberSettingsCard from './MemberSettingsCard'
import { Separator } from '@radix-ui/react-separator'
import { MotionDiv } from '@/components/Motion/Motion'
import { Subscription } from '@/types/entities'
import { useTranslations } from 'next-intl'

interface SettingsMembersListProps {
    members: { members: Profile[], count: number }
    onClick: (member: Profile) => void
    currentSubscription: Subscription | null
    currentUser: Profile
}

export default function SettingsMembersList({ members, onClick, currentSubscription, currentUser }: SettingsMembersListProps) {
    const t = useTranslations('Dashboard.RoomSettings')
    const totalMembers = members.count + 1
    const maxMembers = currentSubscription?.plan.max_members_per_room
    const isLimitReached = maxMembers ? totalMembers >= maxMembers : false

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full gap flex flex-col items-center justify-center gap-2 p-4 shadow-lg rounded-lg border-gray-200 dark:border-gray-800 dark:bg-gray-900 border'>
            <div className='flex flex-row items-center justify-between w-full '>
                <div className='flex flex-col text-start w-full '>
                    <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('membersTitle')}</h2>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('membersDescription')}</p>
                </div>
                <p className={`text-sm md:text-base text-gray-500 dark:text-gray-300 px-2 ${isLimitReached ? 'text-red-500' : ''}`}>{totalMembers}/{maxMembers}</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800 mb-4' />
            <MemberSettingsCard member={currentUser} delay={0} onClick={() => { }} isOwner={true} />
            {members.count > 0 ? (
                members.members.map((member, index) => (
                    <MemberSettingsCard key={member.id} member={member} delay={index * 0.2} onClick={onClick} />
                ))
            ) : (
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300 text-center py-8'></p>
            )}
        </MotionDiv>
    )
}
