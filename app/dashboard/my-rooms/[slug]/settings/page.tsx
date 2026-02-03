import { getRoomBySlugAction } from '@/actions/rooms'
import { Room } from '@/types/entities'
import RoomSettingsContainer from './_features/RoomSettingsContainer'
import { getMembersAction } from '@/actions/roomMembers'
import { redirect } from 'next/navigation'
import { getCurrentSubscriptionAction } from '@/actions/subscriptions'
import { getCurrentUserAction } from '@/actions/profiles'

interface GroupSettingsPageProps {
    params: { slug: string }
}

export default async function GroupSettingsPage({ params }: GroupSettingsPageProps) {
    const { slug } = await params
    const roomResponse = await getRoomBySlugAction(slug)

    if (!roomResponse.data) {
        return redirect('/dashboard/my-rooms')
    }

    const members = await getMembersAction('', roomResponse.data.id).then(res => res.data)
    const currentSubscription = await getCurrentSubscriptionAction()
    const currentUser = await getCurrentUserAction()

    const room: Room = roomResponse.data

    return (
        <RoomSettingsContainer room={room} initialMembers={members} currentSubscription={currentSubscription.data} currentUser={currentUser.data} />
    )
}
