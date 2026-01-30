import { useState } from 'react'
import { useWishlistData } from './useWishlistData'
import { Item, ItemWithoutReservation } from '@/types/entities'
import { RegisterOrEditItemSchema } from '@/schemas/items'
import { createItemAction, deleteItemAction, updateItemAction } from '@/actions/items'
import { toast } from 'sonner'

type ToastMessages = {
    successCreate: string
    errorCreate: string
    successUpdate: string
    errorUpdate: string
    successDelete: string
    errorDelete: string
    invalidItemId: string
}

export function useOwnerWishlist(userId: string, initialItems: { items: Item[] | ItemWithoutReservation[], count: number }, messages: ToastMessages) {
    const { items, search, setSearch, isLoading, refresh } = useWishlistData(userId, initialItems, false)
    const [selectedItem, setSelectedItem] = useState<ItemWithoutReservation | null>(null)
    const [isItemDrawerOpen, setIsItemDrawerOpen] = useState(false)
    const [itemDrawerMode, setItemDrawerMode] = useState<'edit' | 'create'>('edit')
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)

    // 3. Lógica exclusiva do Dono
    const handleEditItem = async (itemId: number | undefined | null, itemData: RegisterOrEditItemSchema) => {


        if (!itemId) return toast.error(messages.invalidItemId)

        const response = await updateItemAction(itemId, itemData)

        if (response.success) {
            toast.success(messages.successUpdate)
            await refresh()
        } else {
            toast.error(messages.errorUpdate)
        }

        setSelectedItem(null)
        setIsItemDrawerOpen(false)
    }

    const handleDeleteItem = async (itemId: number) => {
        const response = await deleteItemAction(itemId)

        if (response.success) {
            toast.success(messages.successDelete)
            await refresh()
        } else {
            toast.error(messages.errorDelete)
        }

        closeDeleteDialog()
        setSelectedItem(null)
    }

    const handleCreateItem = async (itemData: RegisterOrEditItemSchema) => {
        const response = await createItemAction(itemData)
        if (response.success) {
            toast.success(messages.successCreate)
            await refresh()
        } else {
            toast.error(messages.errorCreate)
        }
        setSelectedItem(null)
        setIsItemDrawerOpen(false)
    }

    const handleOpenItemDrawer = (item: ItemWithoutReservation | null, mode: 'edit' | 'create') => {
        setSelectedItem(item ?? {} as ItemWithoutReservation)
        setItemDrawerMode(mode)
        setIsItemDrawerOpen(true)
        setIsDeleteDialogOpen(false)
    }

    const handleOpenDeleteDialog = (item: ItemWithoutReservation) => {
        setSelectedItem(item)
        setIsDeleteDialogOpen(true)
        setIsItemDrawerOpen(false)
    }

    const closeItemDrawer = () => {
        setIsItemDrawerOpen(false)
        setSelectedItem(null)
    }

    const closeDeleteDialog = () => {
        setIsDeleteDialogOpen(false)
        setSelectedItem(null)
    }

    return {
        items, search, setSearch, isLoading,
        isItemDrawerOpen,
        handleEditItem, handleDeleteItem, handleCreateItem,
        itemDrawerMode,
        selectedItem,
        closeItemDrawer,
        closeDeleteDialog,
        isDeleteDialogOpen,
        handleOpenItemDrawer,
        handleOpenDeleteDialog,

    }
}
