import { getCurrentUserAction } from '@/actions/profiles'
import RoomInviteContainer from './_features/RoomInviteContainer';
import { getRoomPublicInfoBySlugAction } from '@/actions/invite';

type RoomInvitePageProps = {
    params: Promise<{ slug: string }>
}


export default async function RoomInvitePage({ params }: RoomInvitePageProps) {

    const { slug } = await params;
    const roomResponse = await getRoomPublicInfoBySlugAction(slug)
    const currentUser = await getCurrentUserAction()

    return (
        <RoomInviteContainer room={roomResponse.success ? roomResponse.data : null} currentUser={currentUser.data} />
    )
}
