import { getRoomBySlugAction } from '@/actions/rooms'
import { redirect } from 'next/navigation'
import InviteRequestsContainer from './_features/InviteRequestsContainer'
import { getRoomJoinRequestsByIdAction } from '@/actions/invite'

interface InviteRequestsPageProps {
    params: Promise<{ slug: string }>
}

export default async function InviteRequestsPage({ params }: InviteRequestsPageProps) {
    const { slug } = await params
    const room = await getRoomBySlugAction(slug)
    const pendingRequests = await getRoomJoinRequestsByIdAction(room.data.id)

    return (
        <InviteRequestsContainer room={room.data} initialRequests={pendingRequests.data} />
    )
}
