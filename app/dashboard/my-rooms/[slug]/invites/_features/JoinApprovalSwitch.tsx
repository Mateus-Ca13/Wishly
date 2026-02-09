import { useTranslations } from 'next-intl'
import Switch from '@/components/Switch/Switch'
import { useForm } from 'react-hook-form'
import { Room } from '@/types/entities'
import { getRoomApprovalSchema, RoomApprovalSchema } from '@/schemas/rooms'
import { zodResolver } from '@hookform/resolvers/zod'
import { updateRoomApprovalAction } from '@/actions/rooms'
import { toast } from 'sonner'

interface JoinApprovalSwitchProps {
    room: Room
}

export default function JoinApprovalSwitch({ room }: JoinApprovalSwitchProps) {
    const t = useTranslations('Dashboard.RoomSettings.InviteRequests.Switch')
    const tResponse = useTranslations('Dashboard.Responses.Rooms.Update')

    const { watch, handleSubmit, formState: { isSubmitting }, setValue } = useForm<RoomApprovalSchema>({
        resolver: zodResolver(getRoomApprovalSchema(tResponse)),
        defaultValues: {
            requiresApproval: room.requires_approval
        }
    })

    const requiresApproval = watch('requiresApproval')

    const onSubmit = async (data: RoomApprovalSchema) => {
        const response = await updateRoomApprovalAction(room.id, data)
        if (response.success) {
            toast.success(response.message)
        } else {
            toast.error(response.message)
        }
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex md:flex-row flex-col items-start md:items-center justify-between w-full'>
            <h2 className='text-base md:text-lg mb-1 md:mb-0 font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('title')}</h2>
            <Switch type='submit' disabled={isSubmitting} checked={requiresApproval} onChange={(e) => { setValue('requiresApproval', e) }} label={requiresApproval ? t('onTrue') : t('onFalse')} />
        </form>

    )
}
