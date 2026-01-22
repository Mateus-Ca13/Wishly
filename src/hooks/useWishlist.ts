'use client'
import { useState, useEffect } from 'react'
import { getItemsAction } from '@/actions/itemsActions'
import { getUserByIdAction } from '@/actions/profiles'
import { Item, Profile } from '@/types/entities'
import { ActionResponse } from '@/types/response'
import { toast } from 'sonner'
import { confirmReservationAction } from '@/actions/reservations'

export function useWishlist(userId: string, initialItems: any[]) {

    const [items, setItems] = useState<Item[]>(initialItems)
    const [search, setSearch] = useState('')
    const [isLoading, setIsLoading] = useState(true)
    const [isReservationMode, setReservationMode] = useState(false)
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const [isConfirmReservationDialogOpen, setIsConfirmReservationDialogOpen] = useState(false)
    const [isDrawerOpen, setIsDrawerOpen] = useState(false)

    useEffect(() => {
        const fetchItems = async () => {
            setIsLoading(true)
            const response = await getItemsAction(search, userId)
            setItems(response.success ? response.data || [] : [])
            setIsLoading(false)
        }

        const timeout = setTimeout(fetchItems, 500)
        return () => clearTimeout(timeout)
    }, [search, userId])

    const toggleReservationMode = () => {
        setReservationMode(prev => !prev)
        setSelectedItem(null)
    }

    const handleItemClick = (item: Item) => {
        setSelectedItem(item)
        if (isReservationMode) {
            if(item.reservations){
                toast.error('Item já reservado!')
                return
            }
            setIsConfirmReservationDialogOpen(true)
        } else {
            setIsDrawerOpen(true)
        }
    }

    const handleConfirmReservation = async (anonymousGiver: boolean, itemId: number) => {
        setIsConfirmReservationDialogOpen(false)
        setSelectedItem(null)
        const reservationResponse = await confirmReservationAction(itemId, anonymousGiver)
        if(reservationResponse.success){
            toast.success('Reserva confirmada com sucesso!')
        }else{
            toast.error('Erro ao confirmar reserva!')
        }
    }

    const closeConfirmReservationDialog = () => {setIsConfirmReservationDialogOpen(false); setSelectedItem(null)}
    const closeDrawer = () => {setSelectedItem(null); setIsDrawerOpen(false)}

    return {
        items,
        search,
        setSearch,
        isLoading,
        isReservationMode,
        selectedItem,
        toggleReservationMode,
        handleItemClick,
        closeDrawer,
        closeConfirmReservationDialog,
        isConfirmReservationDialogOpen,
        isDrawerOpen,    
        handleConfirmReservation
    
    }
}