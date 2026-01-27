import React from 'react'
import { redirect } from 'next/navigation'

export default function RoomInviteMainPage() {
    return (
        redirect('/dashboard/my-rooms')
    )
}
