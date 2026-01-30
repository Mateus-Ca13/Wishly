'use client'
import Input from '@/components/Input/Input'
import { MotionDiv } from '@/components/Motion/Motion'
import React from 'react'
import { LoaderCircle, Meh, SearchX } from 'lucide-react'
import { Item, ItemWithoutReservation } from '@/types/entities'
import OwnerItemCard from './OwnerItemCard'
import { useTranslations } from 'next-intl'

type OwnerItemListProps = {
    search: string
    setSearch: (search: string) => void
    items: { items: Item[], count: number }
    isLoading: boolean
    onEditItem: (item: ItemWithoutReservation, mode: "edit" | "create") => void
    onDeleteItem: (item: ItemWithoutReservation) => void
}

export default function OwnerItemList({ search, setSearch, items, isLoading, onEditItem, onDeleteItem }: OwnerItemListProps) {
    const t = useTranslations('Dashboard.MyWishlist');

    return (
        <div className='w-full'>
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
                            <OwnerItemCard
                                key={item.id}
                                item={item}
                                delay={index * 0.05}
                                onEditItem={onEditItem}
                                onDeleteItem={onDeleteItem}
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
                        <p className='text-xl font-semibold'>{t('ListResponses.noItemsTitle')}</p>
                        <p className='text-sm md:text-base'>{t('ListResponses.noItemsDescription')}</p>
                    </div>
                )}
            </MotionDiv>
        </div>
    )
}


