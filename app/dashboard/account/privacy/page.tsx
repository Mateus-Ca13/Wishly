import { getTranslations } from 'next-intl/server'
import { Separator } from '@/components/ui/separator'
import { MotionDiv } from '@/components/Motion/Motion'
import { getCurrentUserAction } from '@/actions/profiles'
import { redirect } from 'next/navigation'
import DeleteAccountButton from './_features/DeleteAccountButton'
import ChangePasswordButton from './_features/ChangePasswordButton'

export default async function PrivacyPage() {
    const t = await getTranslations('Dashboard.Privacy')
    const response = await getCurrentUserAction()

    if (!response.success || !response.data) {
        redirect('/login')
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-4'>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full flex flex-col items-start justify-start gap-2 md:gap-4 shadow p-4 rounded-lg border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden mb-2 dark:text-white'>{t('Secure.title')}</h2>
                <ChangePasswordButton />
                <Separator className='w-full bg-gray-200 dark:bg-gray-800' />
                <DeleteAccountButton username={response.data.username} />
            </MotionDiv>
        </div>
    )
}