'use client'
import { Room } from '@/types/entities'
import EditRoomForm from './EditRoomForm'
import useRoomSettings from '@/hooks/useRoomSettings'

interface EditRoomContainerProps {
    room: Room
}

export default function EditRoomContainer({ room }: EditRoomContainerProps) {
    const { handleUpdateRoom } = useRoomSettings(room)

    return (
        <EditRoomForm room={room} onSubmit={handleUpdateRoom} />
    )
}
