'use client'
import React, { useEffect, useState } from 'react'
import { getItemsAction } from '../../../../../src/actions/itemsActions'
import { MotionDiv } from '@/components/Motion/Motion'
import Input from '@/components/Input/Input'
import { LoaderCircle, SearchX } from 'lucide-react'
import ItemCardWithReservation from './ItemCardWithReservation'
import ReservationButton from './ReservationButton'
import { toast } from 'sonner' // Assumindo que você usa sonner

type ItemsListWithReservationProps = {
  items: any[]
  isLoading: boolean
  isReservationMode: boolean
  onItemClick: (item: any) => void
  search: string
  setSearch: (value: string) => void
}

export default function ItemsListWithReservation({ items, isLoading, isReservationMode, onItemClick, search, setSearch }: ItemsListWithReservationProps) {


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
                    placeholder='Buscar itens da wishlist...' 
                    onChange={(e) => setSearch(e.target.value)} 
                   />
                </div>

                {isLoading ? (
                    <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-500 animate-pulse'>
                        <LoaderCircle className='size-10 animate-spin mb-2 text-primary-500' />
                        <p className='text-xl font-semibold'>Carregando os itens...</p>
                    </div>
                ) : items.length > 0 ? (
                    <div className='w-full flex flex-col gap-2'>
                        {items.map((item, index) => (
                            <ItemCardWithReservation 
                                key={item.id} 
                                item={item} 
                                delay={index * 0.05} // Delay menor pra lista grande
                                isReservationMode={isReservationMode} // <--- Passamos o estado
                                onItemClick={onItemClick}
                            />
                        ))}
                    </div>
                ) : (
                    <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
                              <SearchX className='size-10 mb-2 text-primary-500' />
                              <p className='text-xl font-semibold'>Nenhum item encontrado</p>
                              <p className='text-sm'>Tente buscar por outro nome ou verifique a lista mais tarde.</p>
                            </div>
                )}
            </MotionDiv>
        </div>
    )
}