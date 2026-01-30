import { MotionDiv } from '@/components/Motion/Motion'
import React from 'react'

export default function AppDetails() {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full flex flex-col items-center justify-center gap-2 md:gap-4'
        >
            <p className='text-sm md:text-base text-gray-500 dark:text-gray-400'>Versão {process.env.NEXT_PUBLIC_APP_VERSION}</p>
            <p className='text-sm md:text-base text-gray-500 dark:text-gray-400'>© {new Date().getFullYear()} Wishly. Todos os direitos reservados.</p>
            <p className='text-sm md:text-base text-gray-500 dark:text-gray-400'>Desenvolvido por <a href='https://www.linkedin.com/in/mateus-cavichion/' target='_blank' className='text-primary-500 hover:underline'>Mateus Cavichion</a></p>

        </MotionDiv>
    )
}
