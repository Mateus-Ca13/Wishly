import { useState } from 'react'
import { useWishlistData } from './useWishlistData'
import { toast } from 'sonner'
import { confirmReservationAction, cancelReservationAction } from '@/actions/reservations'
import { Item, ItemWithoutReservation } from '@/types/entities'

export function useGuestWishlist(userId: string, initialItems: {items:Item[] | ItemWithoutReservation[], count:number}) {
    // 1. Usa a lógica compartilhada (com reservas = true)
    const { items, search, setSearch, isLoading, refresh } = useWishlistData(userId, initialItems, true)

    // 2. Estados exclusivos do Visitante
    const [isReservationMode, setReservationMode] = useState(false)
    const [selectedItem, setSelectedItem] = useState<Item | null>(null)
    const [isItemInfoDrawerOpen, setIsItemInfoDrawerOpen] = useState(false)
    const [isConfirmReservationDialogOpen, setIsConfirmReservationDialogOpen] = useState(false)
    const [isCancelReservationDialogOpen, setIsCancelReservationDialogOpen] = useState(false)

    // 3. Lógica exclusiva do Visitante
    const toggleReservationMode = () => {
        setReservationMode(prev => !prev)
        setSelectedItem(null)
    }

    const handleConfirmReservation = async (anonymous: boolean, itemId: number) => {
        setIsConfirmReservationDialogOpen(false)
        
        const reservationResponse = await confirmReservationAction(itemId, anonymous)
        
        if(reservationResponse.success){
            toast.success('Reserva confirmada!')
            setSelectedItem(null)
        } else {
            toast.error('Erro ao confirmar reserva!')
        }
        await refresh()
    }

    const handleCancelReservation = async (itemId: number) => {
         setIsCancelReservationDialogOpen(false)
        
        const reservationResponse = await cancelReservationAction(itemId)
        
        if(reservationResponse.success){
            toast.success('Reserva cancelada!')
            setSelectedItem(null)
        } else {
            toast.error('Erro ao cancelar!')
        }
        await refresh()
    }

    const handleOpenCancelReservation = () => {
        setIsCancelReservationDialogOpen(true)
        setIsItemInfoDrawerOpen(false)  
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
            setIsItemInfoDrawerOpen(true)
        }
    }

    const closeCancelReservationDialog = () => {setIsCancelReservationDialogOpen(false); setSelectedItem(null)}
    const closeConfirmReservationDialog = () => {setIsConfirmReservationDialogOpen(false); setSelectedItem(null)}
    const closeItemInfoDrawer = () => {setSelectedItem(null); setIsItemInfoDrawerOpen(false)}

    return {
        items, search, setSearch, isLoading,
        isReservationMode, toggleReservationMode,
        handleConfirmReservation, handleCancelReservation,
        handleOpenCancelReservation,
        selectedItem,
        isItemInfoDrawerOpen,
        isConfirmReservationDialogOpen,
        isCancelReservationDialogOpen,
        handleItemClick,
        closeConfirmReservationDialog,
        closeCancelReservationDialog,
        closeItemInfoDrawer,
        // ...
    }
}