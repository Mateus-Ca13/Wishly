'use client'
import { getRegisterOrEditRoomSchema, RegisterOrEditRoomSchema } from '@/schemas/rooms'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Room } from '@/types/entities'
import { useTranslations } from 'next-intl'
import Input from '@/components/Input/Input'
import { Label } from '@radix-ui/react-label'
import { RoomIconSelect, RoomIconSelectProps } from '@/components/RoomIconSelect/RoomIconSelect'
import Button from '@/components/Button/Button'
import { Separator } from '@radix-ui/react-separator'
import { MotionDiv } from '@/components/Motion/Motion'
import TextArea from '@/components/TextArea/TextArea'
import { LoaderCircle } from 'lucide-react'

interface EditRoomFormProps {
    room: Room
    onSubmit: (data: RegisterOrEditRoomSchema) => Promise<void>
}

export default function EditRoomForm({ room, onSubmit }: EditRoomFormProps) {
    const tSettings = useTranslations('Dashboard.RoomSettings')
    const t = useTranslations('Dashboard.MyRooms.Drawer')

    const roomIcons: RoomIconSelectProps['images'] = [
        { src: '/room_icons/icon1.webp' },
        { src: '/room_icons/icon2.webp' },
        { src: '/room_icons/icon3.webp' },
        { src: '/room_icons/icon4.webp' },
        { src: '/room_icons/icon5.webp' },
        { src: '/room_icons/icon6.webp' },
        { src: '/room_icons/icon7.webp' },
        { src: '/room_icons/icon8.webp' },
        { src: '/room_icons/icon9.webp' },
        { src: '/room_icons/icon10.webp' }
    ]

    const { control, register, setValue, handleSubmit, formState: { errors, isSubmitting } } = useForm<RegisterOrEditRoomSchema>({
        resolver: zodResolver(getRegisterOrEditRoomSchema(t)),
        defaultValues: {
            name: room.name,
            description: room.description,
            icon: room.cover_theme
        }
    })

    const onSubmitHandler = async (data: RegisterOrEditRoomSchema) => {
        await onSubmit(data)
    }

    const onError = (errors: any) => {
        console.log(errors)
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-full'>

            <form
                className='w-full flex flex-col justify-start items-center gap-4 shadow-lg rounded-lg p-4 border-gray-200 dark:border-gray-800 border bg-white dark:bg-gray-900'
                onSubmit={handleSubmit(onSubmitHandler, onError)}>

                <div className='flex flex-col text-start w-full '>
                    <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{tSettings('formTitle')}</h2>
                    <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{tSettings('formDescription')}</p>
                </div>
                <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />
                <div className='flex flex-col gap-4 justify-center w-full items-center '>
                    <Input
                        {...register('name')}
                        variant='secondary'
                        name="name"
                        label={t('nameInput.label')}
                        type="text"
                        required
                        placeholder={t('nameInput.placeholder')}
                        className='w-full'
                        error={errors.name?.message} />
                    <TextArea
                        {...register('description')}
                        variant='secondary'
                        name="description"
                        label={t('descriptionInput.label')}
                        placeholder={t('descriptionInput.placeholder')}
                        className='resize-none h-26 w-full'
                        error={errors.description?.message} />

                </div>
                <div className='w-full md:w-2/3 flex flex-col justify-center items-center gap-2 mt-4'>
                    <Label className='text-lg md:text-xl text-center w-full font-semibold dark:text-white text-primary-700'>{t('themeInput.label')}</Label>
                    <RoomIconSelect images={roomIcons} valueSetter={setValue} initialValue={room.cover_theme} />
                </div>

                <Button disabled={isSubmitting} variant='contained' className='mt-4 py-4 w-full text-lg flex items-center justify-center' type='submit'>{isSubmitting ? <LoaderCircle className='animate-spin' /> : t('submitButtonUpdate')}</Button>
            </form>
        </MotionDiv >
    )
}
