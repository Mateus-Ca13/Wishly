'use client'
import { Item, ItemWithoutReservation } from "@/types/entities"
import { useOwnerWishlist } from "@/hooks/useOwnerWishlist"
import OwnerItemList from "./OwnerItemList"
import DeleteitemDialog from "./DeleteitemDialog"
import ItemDrawer from "./ItemDrawer"
import CreateItemButton from "./CreateItemButton"
import OwnerItemViewerDrawer from "./OwnerItemViewerDrawer"


type MyWishlistContainerProps = {
    userId: string
    initialItems: { items: Item[] | ItemWithoutReservation[], count: number }
}

export default function OwnerWishlistContainer({ userId, initialItems }: MyWishlistContainerProps) {

    const { items, search, setSearch, isLoading, isItemDrawerOpen, isViewerDrawerOpen, itemDrawerMode, isDeleteDialogOpen, handleOpenDeleteDialog, handleOpenItemDrawer, handleOpenViewerDrawer, handleEditItem, handleCreateItem, handleDeleteItem, selectedItem, closeItemDrawer, closeDeleteDialog, closeViewerDrawer } = useOwnerWishlist(userId, initialItems)

    return (
        <div className='w-full'>
            <OwnerItemList
                search={search}
                setSearch={setSearch}
                items={items}
                isLoading={isLoading}
                onViewItem={handleOpenViewerDrawer}
                onEditItem={handleOpenItemDrawer}
                onDeleteItem={handleOpenDeleteDialog}
            />

            <CreateItemButton onClick={handleOpenItemDrawer} />

            <ItemDrawer
                itemDrawerMode={itemDrawerMode}
                isOpen={isItemDrawerOpen}
                onConfirm={{ edit: handleEditItem, create: handleCreateItem }}
                item={selectedItem}
                onClose={closeItemDrawer}
            />

            <DeleteitemDialog
                item={selectedItem}
                isOpen={isDeleteDialogOpen}
                onConfirm={handleDeleteItem}
                onClose={closeDeleteDialog}
            />

            <OwnerItemViewerDrawer
                item={selectedItem}
                isOpen={isViewerDrawerOpen}
                onClose={closeViewerDrawer}
                onEditItem={handleOpenItemDrawer}
            />
        </div>
    )
}

