'use client'
import { Room } from '@/types/entities'
import SettingsMembersList from './MembersList'
import { Profile } from '@/types/entities'
import RemoveMemberDialog from './RemoveMemberDialog'
import RemoveRoomDialog from './RemoveRoomDialog'
import useRoomSettings from '@/hooks/useRoomSettings'
import RemoveRoomButton from './RemoveRoomButton'
import { Subscription } from '@/types/entities'
import { useRoomDetails } from '@/hooks/useRoomDetails'
import { MotionDiv } from '@/components/Motion/Motion'
import Link from 'next/link'
import { ChevronRight, Pencil, Settings } from 'lucide-react'
import { useTranslations } from 'next-intl'
import { Separator } from '@/components/ui/separator'
import LinkCard from '@/components/LinkCard/LinkCard'
import RoomInfo from './RoomInfo'

interface RoomSettingsContainerProps {
    room: Room,
    initialMembers: { members: Profile[], count: number }
    currentSubscription: Subscription | null
    currentUser: Profile
}

export default function RoomSettingsContainer({ room, initialMembers, currentSubscription, currentUser }: RoomSettingsContainerProps) {
    const t = useTranslations('Dashboard.RoomSettings')

    const { members, openRemoveMemberDialog, closeRemoveMemberDialog, removeMemberDialogIsOpen, memberSelected, handleRemoveMember } = useRoomDetails(initialMembers, room)
    const { handleDeleteRoom, deleteRoomDialogIsOpen, openDeleteRoomDialog, closeDeleteRoomDialog } = useRoomSettings(room)

    return (
        <div className='w-full flex flex-col justify-center items-center gap-8'>
            <RoomInfo
                room={room} />

            <SettingsMembersList
                room={room}
                currentUser={currentUser}
                currentSubscription={currentSubscription}
                members={members}
                onClick={openRemoveMemberDialog} />

            <RemoveMemberDialog
                isOpen={removeMemberDialogIsOpen}
                onClose={closeRemoveMemberDialog}
                onConfirm={handleRemoveMember}
                member={memberSelected}
            />
            <RemoveRoomButton onClick={openDeleteRoomDialog} />
            <RemoveRoomDialog
                room={room}
                isOpen={deleteRoomDialogIsOpen}
                onClose={closeDeleteRoomDialog}
                onConfirm={handleDeleteRoom} />
        </div >
    )
}
