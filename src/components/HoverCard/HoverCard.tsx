import React from 'react'
import { HoverCard as CnHoverCard, HoverCardTrigger, HoverCardContent } from '@/components/ui/hover-card'

interface HoverCardProps {
    children: React.ReactNode
    message: React.ReactNode
    variant?: 'default' | 'destructive' | 'alt'
    side?: 'top' | 'right' | 'bottom' | 'left'
}

export default function HoverCard({ children, message, variant = 'default', side = 'top' }: HoverCardProps) {

    const variantClass = {
        default: 'bg-gray-50 text-gray-500',
        alt: 'bg-gray-50 text-gray-500 w-fit py-0',
        destructive: 'bg-red-50 text-red-500'
    }

    return (
        <CnHoverCard>
            <HoverCardTrigger>{children}</HoverCardTrigger>
            <HoverCardContent side={side} className={variantClass[variant]}>
                {message}
            </HoverCardContent>
        </CnHoverCard>
    )
}
