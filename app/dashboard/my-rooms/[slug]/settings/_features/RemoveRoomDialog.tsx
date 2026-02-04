'use client'
import { Room } from '@/types/entities'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Button from '@/components/Button/Button'
import { useTranslations } from 'next-intl'
import Input from '@/components/Input/Input'
import { useState } from 'react'
import { redirect } from 'next/navigation'

interface RemoveRoomDialogProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (roomId: number) => void
    room: Room | null
}

export default function RemoveRoomDialog({ isOpen, onClose, onConfirm, room }: RemoveRoomDialogProps) {

    if (!room) return redirect('/dashboard/my-rooms')

    const t = useTranslations('Dashboard.RoomSettings.RemoveRoomDialog')
    const [roomName, setRoomName] = useState('')

    return (
        <Dialog open={isOpen} onOpenChange={() => { onClose(); setRoomName('') }}>
            <DialogContent className='bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4 dark:bg-gray-800'>
                <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
                    <DialogTitle className='text-center text-lg md:text-2xl dark:text-white'>{t('title')}</DialogTitle>
                    <DialogDescription className='text-center text-base mb-2 dark:text-gray-300'>
                        {t('inputLabel')}
                    </DialogDescription>
                </DialogHeader>
                <p className='font-bold truncate max-w-10/12 text-center text-primary-700 text-lg dark:text-primary-100'>{room?.name}</p>
                <DialogFooter className='w-full mt-2 flex flex-col! gap-2 items-center justify-center'>
                    <Input
                        className='w-full'
                        type='text'
                        placeholder={room?.name}
                        value={roomName}
                        onChange={(e) => setRoomName(e.target.value)}
                    />
                    <Button
                        disabled={roomName.toLowerCase().trim() !== room?.name.toLowerCase().trim()}
                        variant="contained"
                        className='w-full mt-4'
                        onClick={() => onConfirm(room?.id || -1)}>{t('confirmButton')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}