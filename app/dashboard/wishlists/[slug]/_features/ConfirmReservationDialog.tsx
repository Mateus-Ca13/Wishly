import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Checkbox } from '@/components/ui/checkbox'
import { Label } from '@/components/ui/label'
import { Item } from '@/types/entities'
import Button from '@/components/Button/Button'

type ConfirmReservationDialogProps = {
    item: Item | null
    open: boolean
    onClose: () => void
    onConfirm: (anonymousGiver: boolean, itemId: number) => void
}

export default function ConfirmReservationDialog({item, open, onClose, onConfirm}: ConfirmReservationDialogProps) {

    const [anonymous, setAnonymous] = React.useState(false)

    const handleAnonymousChange = () => {
        setAnonymous(!anonymous)
    }

    return (
        <Dialog open={open} onOpenChange={onClose}>
        <DialogContent className=' bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4'>
            <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
            <DialogTitle className='text-center text-lg md:text-2xl'>Confirmar Reserva</DialogTitle>
            <DialogDescription className='text-center text-base mb-4'>
                Você tem certeza que deseja confirmar a reserva do seguinte item?             
            </DialogDescription>
            </DialogHeader>
            <p className='font-bold truncate max-w-10/12 text-center text-primary-700 text-lg'>{item?.name}</p>
            <div className='flex gap-2 max-w-10/12 items-center justify-center px-4 my-4'>

                    <Checkbox className='size-6'
                    checked={anonymous}
                    onCheckedChange={handleAnonymousChange}
                    />
                <Label htmlFor="anonymous" className='text-base'>Reservar anonimamente</Label>
            </div>

            <DialogFooter className='w-full'>
            <Button onClick={() => item?.id && onConfirm(anonymous, item?.id)} className='w-full' variant='contained'>Confirmar</Button>
            </DialogFooter>

        </DialogContent>
        </Dialog>
    )
}
