'use client'
import MembersList from './MembersList'
import InviteMemberDrawer from './InviteMemberDrawer'
import { Profile, Room } from '@/types/entities'
import RoomSettingsButton from './RoomSettingsButton'
import { useRoomDetails } from '@/hooks/useRoomDetails'
import RoomInfoDialog from './RoomInfoDialog'
import { MotionDiv } from '@/components/Motion/Motion'

type RoomDetailsContainerProps = {
    initialMembers: { members: Profile[], count: number }
    currentUser: Profile
    room: Room
}

export default function RoomDetailsContainer({ initialMembers, room, currentUser }: RoomDetailsContainerProps) {

    const { members, isLoading, search, setSearch, isOwner } = useRoomDetails(initialMembers, room, currentUser)
    return (

        <div className='relative'>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
            >
                {isOwner ?
                    <RoomSettingsButton slug={room.slug} /> :
                    <RoomInfoDialog room={room} />
                }
            </MotionDiv>

            <MembersList search={search} setSearch={setSearch} isLoading={isLoading} members={members} />
            <InviteMemberDrawer slug={room.slug} />
        </div>
    )
}
