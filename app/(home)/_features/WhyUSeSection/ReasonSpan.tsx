import { LucideIcon } from 'lucide-react'
import React from 'react'

interface ReasonSpanProps {
    title: string
    description: string
    icon: LucideIcon
}

export default function ReasonSpan({ title, description, icon }: ReasonSpanProps) {
    const Icon = icon

    return (
        <div className='flex items-start gap-4'>
            <div className='p-2 lg:p-4 rounded-full bg-gray-800'>
                <Icon className='size-5 lg:size-8 text-primary-300' />
            </div>
            <div className='flex flex-col justify-start items-start gap-2 text-start'>
                <h2 className='2xl:text-xl md:text-lg text-base font-semibold text-white'>{title}</h2>
                <p className='2xl:text-lg md:text-base text-sm text-gray-500'>{description}</p>
            </div>
        </div>
    )
}
