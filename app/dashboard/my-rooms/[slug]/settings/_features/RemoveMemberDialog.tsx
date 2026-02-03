'use client'
import { Profile } from '@/types/entities'
import React from 'react'
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Button from '@/components/Button/Button'
import { useTranslations } from 'next-intl'

interface RemoveMemberDialogProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (memberId: string) => void
    member: Profile | null
}

export default function RemoveMemberDialog({ isOpen, onClose, onConfirm, member }: RemoveMemberDialogProps) {
    const t = useTranslations('Dashboard.RoomSettings.RemoveMemberDialog')
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className='bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4 dark:bg-gray-800'>
                <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
                    <DialogTitle className='text-center text-lg md:text-2xl dark:text-white'>{t('title')}</DialogTitle>
                    <DialogDescription className='text-center text-base mb-2 dark:text-gray-300'>
                        {t('description')}
                    </DialogDescription>
                </DialogHeader>
                <p className='font-bold truncate max-w-10/12 text-center text-primary-700 text-lg dark:text-primary-100'>{member?.username}</p>
                <DialogFooter className='w-full mt-4'>
                    <Button variant="contained" className='w-full' onClick={() => onConfirm(member?.id || 'none')}>{t('confirmButton')}</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}