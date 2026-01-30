
'use client'
import ReservationButton from './ReservationButton'
import ItemDetailsDrawer from './ItemDetailsDrawer'
import ItemsListWithReservation from './GuestItemsList'
import ConfirmReservationDialog from './ConfirmReservationDialog'
import { Profile } from '@/types/entities'
import CancelReservationDialog from './CancelReservationDialog'
import { useGuestWishlist } from '@/hooks/useGuestWishlist'
import { Item, ItemWithoutReservation } from '@/types/entities'
import { useTranslations } from 'next-intl'

type GuestWishlistContainerProps = {
    userId: string
    initialItems: { items: Item[] | ItemWithoutReservation[], count: number }
    currentUser: Profile
}

export default function GuestWishlistContainer({ userId, initialItems, currentUser }: GuestWishlistContainerProps) {
    const t = useTranslations('Dashboard.MemberWishlist.ToastResponses')

    const toastMessages = {
        successReserve: t('successReserve'),
        errorReserve: t('errorReserve'),
        successCancelReserve: t('successRemoveReservation'),
        errorCancelReserve: t('errorRemoveReservation'),
        alreadyReserved: t('alreadyReserved'),
    }

    const {
        items, search, setSearch, isLoading,
        isReservationMode, toggleReservationMode,
        selectedItem, handleItemClick,
        isConfirmReservationDialogOpen, closeConfirmReservationDialog,
        isItemInfoDrawerOpen, closeItemInfoDrawer,
        handleConfirmReservation,
        isCancelReservationDialogOpen, closeCancelReservationDialog,
        handleCancelReservation,
        handleOpenCancelReservation
    } = useGuestWishlist(userId, initialItems, toastMessages)

    return (
        <div className='w-full'>
            <ItemsListWithReservation
                search={search}
                setSearch={setSearch}
                items={items}
                isLoading={isLoading}
                isReservationMode={isReservationMode}
                onItemClick={handleItemClick}
            />


            <ReservationButton
                isActive={isReservationMode}
                onClick={toggleReservationMode}
            />

            <ItemDetailsDrawer
                onOpenCancelReservation={handleOpenCancelReservation}
                currentUser={currentUser}
                item={selectedItem}
                isOpen={isItemInfoDrawerOpen}
                onClose={closeItemInfoDrawer}
            />

            <CancelReservationDialog
                onConfirm={handleCancelReservation}
                item={selectedItem}
                open={isCancelReservationDialogOpen}
                onClose={closeCancelReservationDialog}
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
