import { getTranslations } from 'next-intl/server'

export default async function PrivacyPage() {
    const t = await getTranslations('Dashboard.Privacy')

    return (
        <div className='flex flex-col w-full h-96 text-center justify-center items-center px-4'>
            <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('developmentWarning')}</p>
        </div>
    )
}