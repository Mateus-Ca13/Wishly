'use client'
import React from 'react'
import { Plan } from '@/types/entities'
import { Check, ChevronRight, Star } from 'lucide-react'
import { formatPrice } from '@/utils/format'
import { MotionDiv } from '@/components/Motion/Motion'
import { toast } from 'sonner'

interface PlanCardProps {
    plan: Plan
    delay: number
}

export default function PlanCard({ plan, delay }: PlanCardProps) {


    const premium = plan.code === 'PREMIUM'

    const onClick = () => {
        toast.info('O sistema de assinaturas ainda está em desenvolvimento')
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full'>
            <div
                onClick={onClick}
                className={`relative w-full hover:bg-gray-50 duration-200 p-3 rounded-xl flex
                flex-col items-start justify-start gap-3 cursor-pointer border-gray-200 
                border shadow ${premium ? 'border-primary-500 border-2 hover:bg-primary-50' : ''}`}>

                {premium && <div className='absolute top-2 right-2 flex items-center justify-end self-end text-start gap-2 bg-gradient p-2 rounded-xl'>
                    <Star className='text-white fill-white size-4' />
                    <p className='text-sm md:text-base text-white'>Recomendado</p>
                </div>}
                <div className='flex flex-col items-start justify-start text-start my-2'>
                    <p className='text-3xl md:text-4xl text-gradient font-semibold'>R$ {formatPrice(plan.price)}<span className='text-lg md:text-xl text-black ms-1'>/ mês</span></p>
                    <p className='text-lg md:text-xl text-primary-500 font-semibold'>{plan.display_name}</p>
                    <p className='text-sm md:text-base text-gray-500'>{plan.description}</p>
                </div>
                <div>
                    <div className='flex items-center justify-start text-start gap-2'>
                        <Check className='text-green-500 size-4' />
                        <p className='text-sm md:text-base text-gray-500'><span className='font-semibold text-primary-500'>{plan.max_rooms > 100 ? 'Ilimitadas' : plan.max_rooms}</span> salas</p>
                    </div>
                    <div className='flex items-center justify-start text-start gap-2'>
                        <Check className='text-green-500 size-4' />
                        <p className='text-sm md:text-base text-gray-500'><span className='font-semibold text-primary-500'>{plan.max_members_per_room > 100 ? 'Ilimitados' : plan.max_members_per_room}</span> membros por sala</p>
                    </div>
                    <div className='flex items-center justify-start text-start gap-2'>
                        <Check className='text-green-500 size-4' />
                        <p className='text-sm md:text-base text-gray-500'><span className='font-semibold text-primary-500'>{plan.max_items_per_wishlist > 100 ? 'Ilimitados' : plan.max_items_per_wishlist}</span> itens por lista</p>
                    </div>
                    {premium && <div className='flex items-center justify-start text-start gap-2'>
                        <Check className='text-green-500 size-4' />
                        <p className='text-sm md:text-base text-gray-500'><span className='font-semibold text-primary-500'>Notificações</span> personalizadas</p>
                    </div>}
                </div>
                <div className={`flex items-center self-end text-end mt-2 text-gray-400 ${premium ? ' text-primary-500' : ''}`}>
                    <p className='text-sm md:text-base '>Ver detalhes</p>
                    <ChevronRight className='ms-auto size-5' />
                </div>
            </div>
        </MotionDiv>
    )
}
