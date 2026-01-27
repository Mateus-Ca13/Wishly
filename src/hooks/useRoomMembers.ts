
'use client'
import { getMembersAction } from "@/actions/roomMembers"
import { getRoomBySlugAction } from "@/actions/rooms"
import { Profile } from "@/types/entities"
import { useCallback, useEffect, useRef, useState } from "react"


export function useRoomMembers(initialMembers: { members: Profile[], count: number }, slug: string) {

    const [members, setMembers] = useState<{ members: Profile[], count: number }>({ members: initialMembers.members, count: initialMembers.count })
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [roomId, setRoomId] = useState<number | null>(null)
    const isFirstRender = useRef(true)

    useEffect(() => {
        getRoomBySlugAction(slug).then((room) => {
            if (room.success) {
                setRoomId(room.data.id)
            }
        })
    }, [slug])


    const fetchMembers = useCallback(async (searchTerm: string, showLoader = true) => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        if (!roomId) return
        if (showLoader) setIsLoading(true)
        else setIsRefreshing(true)

        try {
            const response = await getMembersAction(searchTerm, roomId)
            setMembers(response.success ? response.data || { members: [], count: 0 } : { members: [], count: 0 })
        } finally {
            setIsLoading(false)
            setIsRefreshing(false)
        }
    }, [search, roomId])

    // Debounce effect
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchMembers(search, true)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [search, fetchMembers])

    return {
        members, setMembers,
        search, setSearch,
        isLoading, isRefreshing,
        refresh: () => fetchMembers(search, false)
    }
}