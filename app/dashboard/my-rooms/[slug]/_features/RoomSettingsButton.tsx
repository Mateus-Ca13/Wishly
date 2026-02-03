'use client'
import HoverCard from '@/components/HoverCard/HoverCard'
import { Settings } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Link from 'next/link'

interface RoomSettingsButtonProps {
    slug: string
}


export default function RoomSettingsButton({ slug }: RoomSettingsButtonProps) {
    const t = useTranslations('Dashboard.RoomsDetails')

    return (
        <Link
            href={`/dashboard/my-rooms/${slug}/settings`}
            className='cursor-pointer absolute -top-16.5 md:-top-21 right-3 z-50'>
            <HoverCard message={t('settingsButton')} variant='alt' side="left">
                <Settings className='size-6 md:size-7' />
            </HoverCard >
        </Link>

    )
}
