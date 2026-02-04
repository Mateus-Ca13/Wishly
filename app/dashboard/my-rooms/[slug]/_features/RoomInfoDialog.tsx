'use client'
import { Room } from '@/types/entities'
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { useTranslations } from 'next-intl'
import { Separator } from '@/components/ui/separator'
import { Info } from 'lucide-react'
import HoverCard from '@/components/HoverCard/HoverCard'
import { DialogTrigger } from '@radix-ui/react-dialog'
import { formatDate } from '@/utils/format'

type RoomInfoDialogProps = {
    room: Room
}

export default function RoomInfoDialog({ room }: RoomInfoDialogProps) {
    const t = useTranslations('Dashboard.RoomsDetails.InfoDialog')

    return (
        <Dialog>
            <DialogTrigger asChild>
                <div className='cursor-pointer absolute -top-16.5 md:-top-21 right-3 z-50'>
                    <HoverCard message={t('title')} variant='alt' side="left">
                        <Info className='size-6 md:size-7' />
                    </HoverCard >
                </div>
            </DialogTrigger>
            <DialogContent className=' bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4 dark:bg-gray-800'>
                <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
                    <DialogTitle className='text-center text-lg md:text-2xl dark:text-white'>{t('title')}</DialogTitle>
                    <Separator />
                </DialogHeader>
                <DialogFooter className='w-full'>
                    <div className='w-full flex items-center justify-center flex-col'>
                        <div className='p-3 rounded-md w-full text-center'>
                            <p className=' text-center text-primary-700 text-lg dark:text-primary-100 truncate'>{room.name}</p>
                        </div>
                        <div className='p-3 rounded-md w-full h-32 overflow-y-auto'>
                            <p className='text-center text-gray-700 dark:text-gray-300'>{room.description}</p>
                        </div>
                        <p className='text-center text-sm md:text-base mt-4 text-gray-400 dark:text-gray-500'>
                            Criado em {formatDate(room.created_at, 'short')}
                        </p>
                    </div>

                </DialogFooter>

            </DialogContent>
        </Dialog>
    )
}

