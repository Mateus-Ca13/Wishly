import React from 'react'
import FAQCard from './_features/FAQCard'
import Contact from './_features/Contact'

export default function HelpPage() {
    return (
        <div className='flex flex-col gap-4'>
            <FAQCard />
            <Contact />
        </div>
    )
}