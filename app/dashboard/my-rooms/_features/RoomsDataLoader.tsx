import { getRoomsAction } from '@/actions/rooms'
import { ActionResponse } from '@/types/response'
import { Room } from '@/types/entities'
import RoomsContainer from './RoomsContainer'

export default async function RoomsDataLoader() {
    const roomsResponse: ActionResponse<{ rooms: Room[], count: number }> = await getRoomsAction()

    return (
        <RoomsContainer initialRooms={roomsResponse.success ? roomsResponse.data : { rooms: [], count: 0 }} />
    )
}
