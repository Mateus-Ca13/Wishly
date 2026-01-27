'use client'
import { useRooms } from '@/hooks/useRooms'
import { Room } from '@/types/entities'
import RoomsList from './RoomsList'
import CreateRoomDrawer from './CreateRoomDrawer'

export default function RoomsContainer({ initialRooms }: { initialRooms: { rooms: Room[], count: number } }) {

    const { rooms, search, setSearch, isLoading, isCreateRoomDrawerOpen, onCreateConfirm, closeCreateRoomDrawer, openCreateRoomDrawer } = useRooms(initialRooms)

    return (
        <div>
            <RoomsList
                search={search}
                setSearch={setSearch}
                isLoading={isLoading}
                rooms={rooms}
            />
            <CreateRoomDrawer onCreateConfirm={onCreateConfirm} isOpen={isCreateRoomDrawerOpen} onClose={closeCreateRoomDrawer} onOpen={openCreateRoomDrawer} />
        </div>
    )
}
