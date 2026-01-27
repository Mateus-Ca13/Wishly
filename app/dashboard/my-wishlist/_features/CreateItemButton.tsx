import { MotionDiv } from '@/components/Motion/Motion'
import React from 'react'
import { PlusCircle } from 'lucide-react'
import { ItemWithoutReservation } from '@/types/entities'

type CreateItemButtonProps = {
    onClick: (item: ItemWithoutReservation | null, mode: 'create' | 'edit') => void
}

export default function CreateItemButton({ onClick }: CreateItemButtonProps) {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='fixed bottom-20 right-4 md:right-12 md:bottom-30 xl:right-1/2 xl:translate-x-1/2 
                    bg-linear-to-bl to-primary-500 from-secondary-500 rounded-full p-2 xl:px-12 shadow-md
                    cursor-pointer hover:brightness-110 duration-200'
            onClick={() => onClick(null, 'create')}
        >
            <div className='flex items-center text-white gap-2 py-2'>
                <PlusCircle className=' size-6' />
                <p className='font-semibold me-1'>Criar Item</p>
            </div>
        </MotionDiv>
    )
}
