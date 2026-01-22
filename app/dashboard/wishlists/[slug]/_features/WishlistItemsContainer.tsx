
'use client'
import { useWishlist } from '@/hooks/useWishlist'
import { MotionDiv } from '@/components/Motion/Motion'
import ReservationButton from './ReservationButton'
import ItemDetailsDrawer from './ItemDetailsDrawer'
import ItemsListWithReservation from './ItemsListWithreservation'
import ConfirmReservationDialog from './ConfirmReservationDialog'
import { Profile } from '@/types/entities'

type WishlistItemContainerProps = {
    userId: string
    initialItems: any[]
    currentUser: Profile
}

export default function WishlistItemContainer({ userId, initialItems, currentUser }: WishlistItemContainerProps) {
    
    const { 
        items, search, setSearch, isLoading, 
        isReservationMode, toggleReservationMode, 
        selectedItem, handleItemClick,
        isConfirmReservationDialogOpen, closeConfirmReservationDialog,
        isDrawerOpen, closeDrawer,
        handleConfirmReservation
    } = useWishlist(userId, initialItems)

    return (
        <div className='w-full relative min-h-screen'>
            <MotionDiv>

                <ItemsListWithReservation 
                    search={search}
                    setSearch={setSearch}
                    items={items}
                    isLoading={isLoading}
                    isReservationMode={isReservationMode}
                    onItemClick={handleItemClick}
                />

            </MotionDiv>

            <ReservationButton 
                isActive={isReservationMode}
                onClick={toggleReservationMode}
            />
            
            <ItemDetailsDrawer 
                currentUser={currentUser}
                item={selectedItem}
                isOpen={isDrawerOpen}
                onClose={closeDrawer}
            />

            <ConfirmReservationDialog
                onConfirm={handleConfirmReservation}
                item={selectedItem}
                open={isConfirmReservationDialogOpen}
                onClose={closeConfirmReservationDialog}
            />

        </div>
    )
}