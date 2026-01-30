"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Gender, Profile } from '@/types/entities'
import { editProfileSchema, EditProfileSchema } from '@/schemas/auth'
import Input from '@/components/Input/Input'
import { DatePicker } from '@/components/DatePicker/DatePicker'
import Select from '@/components/Select/Select'
import Button from '@/components/Button/Button'
import { MotionDiv } from '@/components/Motion/Motion'
import { Separator } from '@radix-ui/react-separator'
import { useProfile } from '@/hooks/useProfile'


type ProfileFormProps = {
    user: Profile
}

export default function ProfileForm({ user }: ProfileFormProps) {

    const { handleUpdateProfile } = useProfile(user.id)

    const gender = [
        { value: 'MALE', label: 'Masculino' },
        { value: 'FEMALE', label: 'Feminino' },
        { value: 'OTHER', label: 'Outro' },
        { value: 'UNKNOWN', label: 'Prefiro não informar' },
    ]

    const genderValue = gender.find((g) => g.value === user.gender)

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<EditProfileSchema>({
        resolver: zodResolver(editProfileSchema),
        defaultValues: {
            full_name: user.full_name,
            username: user.username,
            gender: user.gender,
            birthday: user.birthday ?? null,
        }
    })

    const onSubmit = (data: EditProfileSchema) => {
        handleUpdateProfile(data)
    }

    const onError = (errors: any) => {
        console.log(errors)
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='flex flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>

            <div className='flex flex-col '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>Editar Perfil</h2>
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>Gerencie suas informações pessoais</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />


            <form onSubmit={handleSubmit(onSubmit, onError)} className='flex flex-col gap-4 '>

                <div className='flex flex-col md:flex-row gap-4'>
                    <Input {...register('full_name')} error={errors.full_name?.message} name="full_name" label="Nome completo" variant='secondary' type="text" />
                    <Input {...register('username')} error={errors.username?.message} name="username" label="Usuário" variant='secondary' type="text" />
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <Input {...register('birthday')} error={errors.birthday?.message} name="birthday" label="Data de nascimento" variant='secondary' type="date" />
                    <Select onChange={(value) => setValue('gender', value as Gender)} error={errors.gender?.message} placeholder="Gênero" variant='secondary' values={gender} defaultValue={genderValue} />
                </div>
                <Button type='submit' variant='contained' className="w-full md:w-1/3 self-center py-3 text-lg md:text-xl mt-4">Salvar</Button>
            </form>
        </MotionDiv>
    )
}
