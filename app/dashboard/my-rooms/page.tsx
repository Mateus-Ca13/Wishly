import CreateRoomDrawer from './_features/CreateRoomDrawer'
import RoomsList from './_features/RoomsList'

export default function RoomsPage() {

  return (
    <div className='flex flex-col items-center justify-center gap-4 w-full mx-auto'>
      <RoomsList />
      <CreateRoomDrawer />
    </div>
  )
}
