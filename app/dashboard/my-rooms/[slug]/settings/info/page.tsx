import { getRoomBySlugAction } from '@/actions/rooms'
import { redirect } from 'next/navigation'
import EditRoomContainer from './_features/EditRoomContainer'

interface RoomInfoPageProps {
    params: Promise<{ slug: string }>
}

export default async function RoomInfoPage({ params }: RoomInfoPageProps) {
    const { slug } = await params
    const roomResponse = await getRoomBySlugAction(slug)

    if (!roomResponse.data) {
        redirect('/dashboard/my-rooms')
    }

    return (
        <EditRoomContainer room={roomResponse.data} />
    )
}
