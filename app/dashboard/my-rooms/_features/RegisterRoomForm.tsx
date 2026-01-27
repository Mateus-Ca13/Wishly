'use client'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import { useForm } from 'react-hook-form'
import { registerOrEditRoomSchema, RegisterOrEditRoomSchema } from '../../../../src/schemas/rooms'
import { zodResolver } from '@hookform/resolvers/zod'
import { Label } from '@radix-ui/react-label'
import { RoomIconSelect, RoomIconSelectProps } from './RoomIconSelect'
import { registerRoomAction } from '../../../../src/actions/rooms'
import { toast } from 'sonner'

type RegisterRoomFormProps = {
  onCreateConfirm: (roomData: RegisterOrEditRoomSchema) => void
}

export default function RegisterRoomForm({ onCreateConfirm }: RegisterRoomFormProps) {

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

  const { handleSubmit, register, setValue } = useForm<RegisterOrEditRoomSchema>({
    resolver: zodResolver(registerOrEditRoomSchema)
  })

  const onSubmit = async (data: RegisterOrEditRoomSchema) => {
    onCreateConfirm(data)
  }

  return (
    <div className='w-full flex flex-col justify-center items-center'>
      <form onSubmit={handleSubmit(onSubmit)} className='w-full max-w-xl flex flex-col justify-center items-center gap-4'>

        <Input
          {...register('name')}
          variant='secondary'
          name="name"
          label="Nome do grupo"
          type="text"
          required
          placeholder='Ex: Wishilist da família'
          className='w-full' />
        <Input
          {...register('description')}
          variant='secondary'
          name="description"
          label="Descrição (opcional)"
          type="text"
          placeholder='Ex: Para o amigo secreto do natal!'
          className='w-full' />
        <div>
          <Label className='text-lg md:text-xl text-start w-full'>Tema do grupo</Label>
          <RoomIconSelect images={roomIcons} valueSetter={setValue} />
        </div>

        <Button variant='contained' className='mt-4 py-4 w-full text-lg' type='submit'>Criar Grupo</Button>

      </form>
    </div>
  )
}
