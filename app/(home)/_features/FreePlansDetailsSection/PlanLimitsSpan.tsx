import React from 'react'

interface PlanLimitsSpanProps {
    description: string;
    type: 'greater' | 'simple'
}

export default function PlanLimitsSpan({ description, type }: PlanLimitsSpanProps) {
    return (
        <div className='flex items-center gap-2'>
            <div className='w-2 h-2 rounded-full bg-primary-500'></div>
            <p className={`text-sm font-bold ${type === 'greater' ? 'text-primary-500' : 'text-gray-500'}`}>{description}</p>
        </div>
    )
}
