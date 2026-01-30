'use client'
import { ItemWithoutReservation } from '@/types/entities'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Button from '@/components/Button/Button'
import { useTranslations } from 'next-intl'

type DeleteitemDialogProps = {
  item: ItemWithoutReservation | null
  isOpen: boolean
  onClose: () => void
  onConfirm: (itemId: number) => void
}

export default function DeleteitemDialog({ item, isOpen, onClose, onConfirm }: DeleteitemDialogProps) {
  const t = useTranslations('Dashboard.MyWishlist.DeleteDialog')

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=' bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4 dark:bg-gray-800'>
        <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
          <DialogTitle className='text-center text-lg md:text-2xl dark:text-white'>{t('title')}</DialogTitle>
          <DialogDescription className='text-center text-base mb-2 dark:text-gray-300'>
            {t('description')}
          </DialogDescription>
        </DialogHeader>
        <p className='font-bold truncate max-w-10/12 text-center text-primary-700 text-lg dark:text-primary-100'>{item?.name}</p>
        <DialogFooter className='w-full mt-4'>
          <Button onClick={() => item?.id && onConfirm(item?.id)} className='w-full' variant='contained'>{t('confirmButton')}</Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}

