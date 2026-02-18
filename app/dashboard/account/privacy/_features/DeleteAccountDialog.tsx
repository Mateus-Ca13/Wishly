'use client'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { LoaderCircle } from 'lucide-react'

type DeleteAccountDialogProps = {
    username: string
    isOpen: boolean
    isLoading: boolean
    onClose: () => void
    onConfirm: (confirmUsername: string) => void
}

export default function DeleteAccountDialog({ username, isOpen, isLoading, onClose, onConfirm }: DeleteAccountDialogProps) {
    const t = useTranslations('Dashboard.Privacy.DeleteAccountDialog')
    const [confirmValue, setConfirmValue] = useState('')

    const isMatch = confirmValue === username

    const handleClose = () => {
        setConfirmValue('')
        onClose()
    }

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className='bg-white-custom border-0 flex flex-col gap-2 items-center justify-center px-4 dark:bg-gray-800'>
                <DialogHeader className='flex flex-col gap-2 items-center justify-center px-4'>
                    <DialogTitle className='text-center text-lg md:text-2xl dark:text-white'>{t('title')}</DialogTitle>
                    <DialogDescription className='text-center text-base md:text-lg mb-2 dark:text-gray-300'>
                        {t('description')}
                    </DialogDescription>
                </DialogHeader>
                <p className='text-sm text-gray-500 dark:text-gray-400 text-center'>
                    {t('confirmLabel')}
                </p>
                <p className='font-bold truncate max-w-10/12 text-center text-primary-700 dark:text-primary-400 text-lg'>{username}</p>
                <DialogFooter className='w-full mt-2 flex flex-col! gap-2 items-center justify-center'>
                    <Input
                        className='w-full'
                        type='text'
                        placeholder={username}
                        value={confirmValue}
                        onChange={(e) => setConfirmValue(e.target.value)}
                        autoComplete='off'
                    />
                    <Button
                        disabled={!isMatch || isLoading}
                        variant="contained"
                        className='w-full mt-4 flex items-center justify-center bg-red-500! hover:bg-red-600!'
                        onClick={() => onConfirm(confirmValue)}
                    >
                        {isLoading ? <LoaderCircle className='size-5 animate-spin' /> : t('confirmButton')}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
