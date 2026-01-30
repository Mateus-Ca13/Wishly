import { ItemWithoutReservation } from '@/types/entities'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Button from '@/components/Button/Button'

type DeleteitemDialogProps = {
  item: ItemWithoutReservation | null
  isOpen: boolean
  onClose: () => void
  onConfirm: (itemId: number) => void
}

export default function DeleteitemDialog({ item, isOpen, onClose, onConfirm }: DeleteitemDialogProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className=' bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4 dark:bg-gray-800'>
        <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
          <DialogTitle className='text-center text-lg md:text-2xl dark:text-white'>Excluir Item</DialogTitle>
          <DialogDescription className='text-center text-base mb-2 dark:text-gray-300'>
            Você tem certeza que deseja excluir o seguinte item de sua wishlist?
          </DialogDescription>
        </DialogHeader>
        <p className='font-bold truncate max-w-10/12 text-center text-primary-700 text-lg dark:text-primary-100'>{item?.name}</p>
        <DialogFooter className='w-full mt-4'>
          <Button onClick={() => item?.id && onConfirm(item?.id)} className='w-full' variant='contained'>Confirmar</Button>
        </DialogFooter>

      </DialogContent>
    </Dialog>
  )
}
