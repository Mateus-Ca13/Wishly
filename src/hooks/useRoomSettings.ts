import { deleteRoomAction, updateRoomAction } from "@/actions/rooms"
import { RegisterOrEditRoomSchema } from "@/schemas/rooms"
import { Room } from "@/types/entities"
import { redirect } from "next/navigation"
import { useState } from "react"
import { toast } from "sonner"

export default function useRoomSettings(room: Room) {

    const [deleteRoomDialogIsOpen, setDeleteRoomDialogIsOpen] = useState(false)

    const openDeleteRoomDialog = () => {
        setDeleteRoomDialogIsOpen(true)
    }

    const closeDeleteRoomDialog = () => {
        setDeleteRoomDialogIsOpen(false)
    }

    const handleDeleteRoom = async () => {
        const response = await deleteRoomAction(room.id)
        if (response.success) {
            toast.success(response.message)
            closeDeleteRoomDialog()
            redirect('/dashboard/my-rooms')
        } else {
            toast.error(response.message)
        }
    }

    const handleUpdateRoom = async (data: RegisterOrEditRoomSchema) => {
        const response = await updateRoomAction(room.id, data)
        if (response.success) {
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }
    }

    return {
        deleteRoomDialogIsOpen,
        openDeleteRoomDialog,
        closeDeleteRoomDialog,
        handleDeleteRoom,
        handleUpdateRoom
    }

}