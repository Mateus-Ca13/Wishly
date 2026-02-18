'use client'
import useAuth from '@/hooks/useAuth'
import DeleteAccountDialog from './DeleteAccountDialog'
import { ChevronRight, Trash2Icon } from 'lucide-react'
import { useTranslations } from 'next-intl'

type DeleteAccountButtonProps = {
    username: string
}

export default function DeleteAccountButton({ username }: DeleteAccountButtonProps) {
    const t = useTranslations('Dashboard.Privacy')
    const { handleDeleteAccount, isDeleteAccountDialogOpen, isDeletingAccount, openDeleteAccountDialog, closeDeleteAccountDialog } = useAuth({})

    return (
        <>
            <button
                onClick={openDeleteAccountDialog}
                className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-red-100/30 cursor-pointer transition-colors duration-200'
            >
                <Trash2Icon className='size-10 bg-red-100 dark:bg-red-700 p-2 rounded-lg' />
                <div className='flex flex-col items-start justify-start text-start'>
                    <p className='text-base md:text-xl font-semibold dark:text-white'>{t('DeleteAccount.title')}</p>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('DeleteAccount.description')}</p>
                </div>
                <ChevronRight className='ms-auto size-5 dark:text-white' />
            </button>

            <DeleteAccountDialog
                username={username}
                isOpen={isDeleteAccountDialogOpen}
                isLoading={isDeletingAccount}
                onClose={closeDeleteAccountDialog}
                onConfirm={handleDeleteAccount}
            />
        </>
    )
}
