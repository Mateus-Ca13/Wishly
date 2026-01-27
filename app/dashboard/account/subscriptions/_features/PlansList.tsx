import { Plan } from '@/types/entities'
import React from 'react'
import PlanCard from './PlanCard'
import { Separator } from '@/components/ui/separator'
import { MotionH1 } from '@/components/Motion/Motion'

type PlansListProps = {
    plans: Plan[]
}

export default function PlansList({ plans }: PlansListProps) {

    const delay = 0.2

    return (
        <div className='flex flex-col  w-full justify-center items-center'>
            <MotionH1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='text-lg flex flex-col items-center justify-between md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden'>
                Planos

                <Separator orientation='horizontal' className='w-24! h-0.5! rounded-full bg-primary-100 my-0' />
            </MotionH1>
            <div className='flex flex-col gap-4 md:gap-8 w-full justify-center items-center my-4'>
                {plans.map((plan, index) => (
                    <PlanCard key={plan.id} plan={plan} delay={delay * (index + 1)} />
                ))}
            </div>
        </div>
    )
}
