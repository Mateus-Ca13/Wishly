import React from 'react'
import Header from './_features/Header'
import Footer from './_features/Footer'
import { ScrollToHash } from '@/components/ScrollToHash/ScrollToHash'

export default function HomeLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='bg-linear-to-bl from-primary-100/60 via-white-custom to-secondary-100/20'>
            <ScrollToHash />
            <Header />
            {children}
            <Footer />
        </div>
    )
}
