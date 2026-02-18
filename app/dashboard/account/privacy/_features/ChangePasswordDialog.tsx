'use client'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { useState } from 'react'
import { useTranslations } from 'next-intl'
import { LoaderCircle } from 'lucide-react'
import { ChangePasswordSchema } from '@/schemas/auth'

type ChangePasswordDialogProps = {
    isOpen: boolean
    isLoading: boolean
    onClose: () => void
    onConfirm: (data: ChangePasswordSchema) => void
}

export default function ChangePasswordDialog({ isOpen, isLoading, onClose, onConfirm }: ChangePasswordDialogProps) {
    const t = useTranslations('Dashboard.Privacy.ChangePasswordDialog')
    const tForm = useTranslations('Dashboard.Profile.Form')
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const isValid = currentPassword.length >= 6 && newPassword.length >= 6 && newPassword === confirmPassword

    const handleClose = () => {
        setCurrentPassword('')
        setNewPassword('')
        setConfirmPassword('')
        onClose()
    }

    const handleSubmit = () => {
        onConfirm({
            current_password: currentPassword,
            password: newPassword,
            confirm_password: confirmPassword,
        })
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
                <DialogFooter className='w-full mt-2 flex flex-col! gap-3 items-center justify-center'>
                    <div className='w-full flex flex-col gap-1'>
                        <Input
                            label={t('currentPasswordLabel')}
                            className='w-full'
                            type='password'
                            placeholder='••••••'
                            value={currentPassword}
                            onChange={(e) => setCurrentPassword(e.target.value)}
                            autoComplete='current-password'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <Input
                            label={tForm('PasswordInput.label')}
                            className='w-full'
                            type='password'
                            placeholder='••••••'
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            autoComplete='new-password'
                        />
                    </div>
                    <div className='w-full flex flex-col gap-1'>
                        <Input
                            label={tForm('ConfirmPasswordInput.label')}
                            className='w-full'
                            type='password'
                            placeholder='••••••'
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            autoComplete='new-password'
                        />
                        {confirmPassword.length > 0 && newPassword !== confirmPassword && (
                            <p className='text-xs text-red-500 mt-1'>{tForm('ConfirmPasswordInput.matchError')}</p>
                        )}
                    </div>
                    <Button
                        disabled={!isValid || isLoading}
                        variant="contained"
                        className='w-full mt-4 flex items-center justify-center'
                        onClick={handleSubmit}
                    >
                        {isLoading ? <LoaderCircle className='size-5 animate-spin' /> : t('confirmButton')}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
