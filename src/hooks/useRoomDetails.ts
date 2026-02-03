
'use client'
import { getMembersAction, removeMemberAction } from "@/actions/roomMembers"
import { Profile, Room } from "@/types/entities"
import { useCallback, useEffect, useRef, useState } from "react"
import { toast } from "sonner"

export function useRoomDetails(initialMembers: { members: Profile[], count: number }, room: Room, currentUser?: Profile) {

    const [members, setMembers] = useState<{ members: Profile[], count: number }>({ members: initialMembers.members, count: initialMembers.count })
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [isRefreshing, setIsRefreshing] = useState(false)
    const [isOwner, setIsOwner] = useState(false)
    const isFirstRender = useRef(true)
    const [removeMemberDialogIsOpen, setRemoveMemberDialogIsOpen] = useState(false)
    const [memberSelected, setMemberSelected] = useState<Profile | null>(null)

    useEffect(() => {
        setIsOwner(room.owner_id === currentUser?.id)
    }, [room])

    const fetchMembers = useCallback(async (searchTerm: string, showLoader = true) => {
        if (isFirstRender.current) {
            isFirstRender.current = false
            return
        }
        if (showLoader) setIsLoading(true)
        else setIsRefreshing(true)

        try {
            const response = await getMembersAction(searchTerm, room.id)
            setMembers(response.success ? response.data || { members: [], count: 0 } : { members: [], count: 0 })
        } finally {
            setIsLoading(false)
            setIsRefreshing(false)
        }
    }, [search, room.id])

    // Debounce effect
    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            fetchMembers(search, true)
        }, 500)
        return () => clearTimeout(delayDebounceFn)
    }, [search, fetchMembers])

    const openRemoveMemberDialog = (member: Profile) => {
        setMemberSelected(member)
        setRemoveMemberDialogIsOpen(true)
    }

    const handleRemoveMember = async (memberId: string) => {
        const response = await removeMemberAction(memberId, room.id)
        if (response.success) {
            toast.success(response.message)
            await fetchMembers(search, false)
        } else {
            toast.error(response.message)
        }
        closeRemoveMemberDialog()
    }

    const closeRemoveMemberDialog = () => {
        setRemoveMemberDialogIsOpen(false)
        setMemberSelected(null)
    }

    return {
        members, setMembers,
        search, setSearch,
        isLoading, isRefreshing,
        refresh: () => fetchMembers(search, false),
        removeMemberDialogIsOpen, openRemoveMemberDialog, closeRemoveMemberDialog,
        memberSelected, setMemberSelected,
        handleRemoveMember,
        isOwner
    }
}