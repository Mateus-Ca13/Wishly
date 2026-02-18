import { AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import React from 'react'

interface QuestionCardProps {
    question: string
    answer: string
    value: string
}

export default function QuestionCard({ question, answer, value }: QuestionCardProps) {
    return (
        <div className='border-gray-200 border w-full bg-white rounded-xl px-4 text-start mb-4'>
            <AccordionItem value={value}>
                <AccordionTrigger className='text-base md:text-lg text-black hover:no-underline hover:text-primary-700 cursor-pointer'>{question}</AccordionTrigger>
                <AccordionContent className='text-sm md:text-base text-gray-500'>{answer}</AccordionContent>
            </AccordionItem>
        </div>
    )
}
