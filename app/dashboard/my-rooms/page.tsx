import CreateRoomDrawer from './_features/CreateRoomDrawer'
import RoomsList from './_features/RoomsList'
import { getRoomsAction } from '@/actions/rooms'
import { ActionResponse } from '@/types/response'
import { Room } from '@/types/entities'
import RoomsContainer from './_features/RoomsContainer'

export default async function RoomsPage() {

  const roomsResponse: ActionResponse<{ rooms: Room[], count: number }> = await getRoomsAction()

  return (
    <div>
      <RoomsContainer initialRooms={roomsResponse.success ? roomsResponse.data : { rooms: [], count: 0 }} />
    </div>
  )
}
