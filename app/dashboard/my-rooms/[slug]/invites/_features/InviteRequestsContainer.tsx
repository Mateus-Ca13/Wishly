import { Room, JoinRequest } from '@/types/entities'
import InviteRequestsList from './InviteRequestsList'

interface InviteRequestsContainerProps {
    room: Room
    initialRequests: JoinRequest[]
}

export default function InviteRequestsContainer({ room, initialRequests }: InviteRequestsContainerProps) {

    return (
        <InviteRequestsList
            room={room}
            requests={initialRequests}
        />
    )
}
