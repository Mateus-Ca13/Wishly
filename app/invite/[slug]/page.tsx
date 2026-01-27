import { getCurrentUserAction } from '@/actions/profiles'
import { getRoomBySlugAction } from '@/actions/rooms'
import RoomInviteContainer from './_features/RoomInviteContainer';

type RoomInvitePageProps = {
    params: Promise<{ slug: string }>
}


export default async function RoomInvitePage({ params }: RoomInvitePageProps) {

    const { slug } = await params;
    const roomResponse = await getRoomBySlugAction(slug)
    const currentUser = await getCurrentUserAction()
    return (
        <RoomInviteContainer room={roomResponse.data} currentUser={currentUser.data} />
    )
}
