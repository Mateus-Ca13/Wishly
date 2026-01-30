'use client'
import { MotionDiv } from '@/components/Motion/Motion'
import Input from '@/components/Input/Input'
import { LoaderCircle, Meh, SearchX } from 'lucide-react'
import GuestItemCard from './GuestItemCard'
import { Item } from '@/types/entities'
import { useTranslations } from 'next-intl'

type GuestItemsListProps = {
    items: { items: Item[], count: number }
    isLoading: boolean
    isReservationMode: boolean
    onItemClick: (item: Item) => void
    search: string
    setSearch: (value: string) => void
}

export default function GuestItemsList({ items, isLoading, isReservationMode, onItemClick, search, setSearch }: GuestItemsListProps) {
    const t = useTranslations('Dashboard.MemberWishlist');

    return (
        <div className='w-full relative'>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className='w-full flex flex-col gap-2 pb-24'
            >
                <div className="sticky top-0 z-10 bg-background/95 backdrop-blur py-2">
                    <Input
                        value={search}
                        className='w-full'
                        variant='secondary'
                        placeholder={t('searchPlaceholder')}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                {isLoading ? (
                    <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-500 animate-pulse'>
                        <LoaderCircle className='size-10 animate-spin mb-2 text-primary-500' />
                        <p className='text-xl font-semibold'>{t('ListResponses.loading')}</p>
                    </div>
                ) : items.items.length > 0 ? (
                    <div className='w-full flex flex-col gap-2'>
                        {items.items.map((item, index) => (
                            <GuestItemCard
                                key={item.id}
                                item={item}
                                delay={index * 0.05} // Delay menor pra lista grande
                                isReservationMode={isReservationMode} // <--- Passamos o estado
                                onItemClick={onItemClick}
                            />
                        ))}
                    </div>
                ) : items.count !== 0 ? (
                    <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
                        <SearchX className='size-10 mb-2 text-primary-500' />
                        <p className='text-xl font-semibold'>{t('ListResponses.emptyState')}</p>
                        <p className='text-sm md:text-base'>{t('ListResponses.emptyStateDescription')}</p>
                    </div>
                ) : (
                    <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
                        <Meh className='size-10 mb-2 text-primary-500' />
                        <p className='text-xl font-semibold'>Essa lista parece estar vazia!</p>
                        <p className='text-sm md:text-base'>Aguarde ou avise o dono da lista para adicionar itens.</p>
                    </div>
                )}
            </MotionDiv>
        </div>
    )
}