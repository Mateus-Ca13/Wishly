import React from 'react'

export default function RoomInviteLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className='w-full h-screen px-4 flex flex-col items-center justify-center gap-4 bg-linear-to-bl from-secondary-500 to-primary-500'>
            {children}
        </div>
    )
}
