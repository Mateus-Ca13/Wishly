'use client'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { useForm } from 'react-hook-form'
import { getRegisterOrEditRoomSchema, RegisterOrEditRoomSchema } from '@/schemas/rooms'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { RoomIconSelect, RoomIconSelectProps } from '@/components/RoomIconSelect/RoomIconSelect'
import { useTranslations } from 'next-intl'
import { LoaderCircle } from 'lucide-react'

type RegisterRoomFormProps = {
  onCreateConfirm: (roomData: RegisterOrEditRoomSchema) => Promise<void>
}

export default function RegisterRoomForm({ onCreateConfirm }: RegisterRoomFormProps) {
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

  const { handleSubmit, register, setValue, formState: { isSubmitting } } = useForm<RegisterOrEditRoomSchema>({
    resolver: zodResolver(getRegisterOrEditRoomSchema(t)),
    defaultValues: {
      name: '',
      description: '',
      icon: 1
    }
  })


  const onSubmit = async (data: RegisterOrEditRoomSchema) => {
    await onCreateConfirm(data)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-xl flex flex-col justify-center items-center gap-4'>

        <Input
          {...register('name')}
          variant='secondary'
          name="name"
          label={t('nameInput.label')}
          type="text"
          required
          placeholder={t('nameInput.placeholder')}
          className='w-full' />
        <Input
          {...register('description')}
          variant='secondary'
          name="description"
          label={t('descriptionInput.label')}
          type="text"
          placeholder={t('descriptionInput.placeholder')}
          className='w-full' />
        <div className='w-full'>
          <Label className='text-lg md:text-xl text-start w-full'>{t('themeInput.label')}</Label>
          <RoomIconSelect images={roomIcons} valueSetter={setValue} />
        </div>

        <Button disabled={isSubmitting} variant='contained' className='rounded-full mt-4 py-4 w-full text-lg flex items-center justify-center' type='submit'>{isSubmitting ? <LoaderCircle className='animate-spin' /> : t('submitButton')}</Button>

      </form>
    </div>
  )
}

