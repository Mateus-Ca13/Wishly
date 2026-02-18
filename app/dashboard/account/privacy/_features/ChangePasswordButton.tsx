'use client'
import useAuth from '@/hooks/useAuth'
import ChangePasswordDialog from './ChangePasswordDialog'
import { ChevronRight, KeyRoundIcon } from 'lucide-react'
import { useTranslations } from 'next-intl'

export default function ChangePasswordButton() {
    const t = useTranslations('Dashboard.Privacy')
    const { handleChangePassword, isChangePasswordDialogOpen, isChangingPassword, openChangePasswordDialog, closeChangePasswordDialog } = useAuth({})

    return (
        <>
            <button
                onClick={openChangePasswordDialog}
                className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30 cursor-pointer transition-colors duration-200'
            >
                <KeyRoundIcon className='size-10 bg-primary-100 dark:bg-primary-700 p-2 rounded-lg' />
                <div className='flex flex-col items-start justify-start text-start'>
                    <p className='text-base md:text-xl font-semibold dark:text-white'>{t('ChangePassword.title')}</p>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('ChangePassword.description')}</p>
                </div>
                <ChevronRight className='ms-auto size-5 dark:text-white' />
            </button>

            <ChangePasswordDialog
                isOpen={isChangePasswordDialogOpen}
                isLoading={isChangingPassword}
                onClose={closeChangePasswordDialog}
                onConfirm={handleChangePassword}
            />
        </>
    )
}
