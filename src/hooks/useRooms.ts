'use client'
import { getRoomsAction, registerRoomAction } from "@/actions/rooms"
import { RegisterOrEditRoomSchema } from "@/schemas/rooms"
import { Room } from "@/types/entities"
import { useCallback, useEffect, useRef, useState } from "react"
import { toast } from "sonner"


export function useRooms(initialRooms: { rooms: Room[], count: number }) {

    const [rooms, setRooms] = useState<{ rooms: Room[], count: number }>({ rooms: initialRooms.rooms, count: initialRooms.count })
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [isCreateRoomDrawerOpen, setIsCreateRoomDrawerOpen] = useState(false)
    const isFirstRender = useRef(true)


    const fetchRooms = useCallback(async (searchTerm: string, showLoader = true) => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }

        if (showLoader) setIsLoading(true)
        else setIsRefreshing(true)

        try {
            const response = await getRoomsAction(searchTerm)
            setRooms(response.success ? response.data || { rooms: [], count: 0 } : { rooms: [], count: 0 })
        } finally {
            setIsLoading(false)
            setIsRefreshing(false)
        }
    }, [])

    // Debounce effect
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchRooms(search, true)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [search, fetchRooms])

    const onCreateConfirm = async (roomData: RegisterOrEditRoomSchema) => {
        const response = await registerRoomAction(roomData)

        if (response.success) {
            toast.success(response.message)
            fetchRooms(search, false)
        } else {
            toast.error(response.message)
        }
        closeCreateRoomDrawer()
    }

    const openCreateRoomDrawer = () => setIsCreateRoomDrawerOpen(true)
    const closeCreateRoomDrawer = () => setIsCreateRoomDrawerOpen(false)

    return {
        rooms, setRooms,
        search, setSearch,
        isLoading, isRefreshing,
        refresh: () => fetchRooms(search, false),
        isCreateRoomDrawerOpen,
        onCreateConfirm,
        openCreateRoomDrawer,
        closeCreateRoomDrawer
    }
}