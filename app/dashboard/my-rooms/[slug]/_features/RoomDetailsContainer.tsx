'use client'
import { useRoomMembers } from '@/hooks/useRoomMembers'
import MembersList from './MembersList'
import InviteMemberDrawer from './InviteMemberDrawer'
import { Profile } from '@/types/entities'

type RoomDetailsContainerProps = {
    initialMembers: { members: Profile[], count: number }
    slug: string
}

export default function RoomDetailsContainer({ initialMembers, slug }: RoomDetailsContainerProps) {

    const { members, isLoading, search, setSearch } = useRoomMembers(initialMembers, slug)
    return (
        <div>
            <MembersList search={search} setSearch={setSearch} isLoading={isLoading} members={members} />
            <InviteMemberDrawer slug={slug} />
        </div>
    )
}
