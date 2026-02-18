import { MotionDiv } from '@/components/Motion/Motion';
import { LucideIcon } from 'lucide-react';
import React from 'react'

interface AboutCardProps {
    title: string
    description: string
    icon: LucideIcon
    delay: number
}

export default function AboutCard({ title, description, icon, delay }: AboutCardProps) {

    const Icon = icon;

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 1 }}
            transition={{ delay: delay, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full md:hover:-translate-y-2 duration-300 md:hover:border-primary-300 flex-1 relative bg-white rounded-xl shadow-lg border-2 p-6 border-gray-200 flex flex-col items-start justify-start text-start'>
            <div className='absolute lg:-top-8 -top-6 p-3 left-4 bg-linear-to-tr from-primary-500 to-secondary-500 rounded-full flex items-center justify-center'>
                <Icon className='lg:size-6 size-4 text-white' />
            </div>
            <h1 className='2xl:text-2xl md:text-xl text-lg font-bold text-primary-900 mt-4'>{title}</h1>
            <p className='2xl:text-lg md:text-base text-sm text-gray-500 md:mt-4 mt-2'>{description}</p>
        </MotionDiv>
    )
}
