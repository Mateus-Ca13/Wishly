import { useState } from 'react'
import { useWishlistData } from './useWishlistData'
import { Item, ItemWithoutReservation } from '@/types/entities'
import { RegisterOrEditItemSchema } from '@/schemas/items'
import { createItemAction, deleteItemAction, updateItemAction } from '@/actions/items'
import { toast } from 'sonner'

export function useOwnerWishlist(userId: string, initialItems: { items: Item[] | ItemWithoutReservation[], count: number }) {
    const { items, search, setSearch, isLoading, refresh } = useWishlistData(userId, initialItems, false)
    const [selectedItem, setSelectedItem] = useState<ItemWithoutReservation | null>(null)
    const [isItemDrawerOpen, setIsItemDrawerOpen] = useState(false)
    const [itemDrawerMode, setItemDrawerMode] = useState<'edit' | 'create'>('edit')
    const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false)
    const [isViewerDrawerOpen, setIsViewerDrawerOpen] = useState(false)

    const handleEditItem = async (itemId: number | undefined | null, itemData: RegisterOrEditItemSchema) => {
        if (!itemId) {
            toast.error('Invalid item ID')
            return Promise.reject('Invalid item ID')
        }

        const response = await updateItemAction(itemId, itemData)

        if (response.success) {
            toast.success(response.message)
            await refresh()
        } else {
            toast.error(response.message)
        }

        setSelectedItem(null)
        setIsItemDrawerOpen(false)
    }

    const handleDeleteItem = async (itemId: number) => {
        const response = await deleteItemAction(itemId)

        if (response.success) {
            toast.success(response.message)
            await refresh()
        } else {
            toast.error(response.message)
        }

        closeDeleteDialog()
        setSelectedItem(null)
    }

    const handleCreateItem = async (itemData: RegisterOrEditItemSchema) => {
        const response = await createItemAction(itemData)
        if (response.success) {
            toast.success(response.message)
            await refresh()
        } else {
            toast.error(response.message)
        }
        setSelectedItem(null)
        setIsItemDrawerOpen(false)
    }

    const handleOpenItemDrawer = (item: ItemWithoutReservation | null, mode: 'edit' | 'create') => {
        setSelectedItem(item ?? {} as ItemWithoutReservation)
        setItemDrawerMode(mode)
        setIsItemDrawerOpen(true)
        setIsDeleteDialogOpen(false)
        setIsViewerDrawerOpen(false)
    }

    const handleOpenDeleteDialog = (item: ItemWithoutReservation) => {
        setSelectedItem(item)
        setIsDeleteDialogOpen(true)
        setIsItemDrawerOpen(false)
    }

    const handleOpenViewerDrawer = (item: ItemWithoutReservation) => {
        setSelectedItem(item)
        setIsViewerDrawerOpen(true)
        setIsItemDrawerOpen(false)
        setIsDeleteDialogOpen(false)
    }

    const closeViewerDrawer = () => {
        setIsViewerDrawerOpen(false)
        setSelectedItem(null)
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
        isViewerDrawerOpen,
        handleEditItem, handleDeleteItem, handleCreateItem,
        itemDrawerMode,
        selectedItem,
        closeItemDrawer,
        closeDeleteDialog,
        closeViewerDrawer,
        isDeleteDialogOpen,
        handleOpenItemDrawer,
        handleOpenDeleteDialog,
        handleOpenViewerDrawer,
    }
}
