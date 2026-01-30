import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Item } from '@/types/entities'
import Button from '@/components/Button/Button'

type CancelReservationDialogProps = {
    item: Item | null
    open: boolean
    onClose: () => void
    onConfirm: (itemId: number) => void
}

export default function CancelReservationDialog({ item, open, onClose, onConfirm }: CancelReservationDialogProps) {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className=' bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4 dark:bg-gray-900'>
                <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
                    <DialogTitle className='text-center text-lg md:text-2xl dark:text-white'>Cancelar Reserva</DialogTitle>
                    <DialogDescription className='text-center text-base mb-2 dark:text-gray-300'>
                        Você tem certeza que deseja cancelar a reserva do seguinte item?
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
