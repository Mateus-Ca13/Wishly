"use client"
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Gender, Profile } from '@/types/entities'
import { getEditProfileSchema, EditProfileSchema } from '@/schemas/auth'
import Input from '@/components/Input/Input'
import { DatePicker } from '@/components/DatePicker/DatePicker'
import Select from '@/components/Select/Select'
import Button from '@/components/Button/Button'
import { MotionDiv } from '@/components/Motion/Motion'
import { Separator } from '@radix-ui/react-separator'
import { useProfile } from '@/hooks/useProfile'
import { useTranslations } from 'next-intl'


type ProfileFormProps = {
    user: Profile
}

export default function ProfileForm({ user }: ProfileFormProps) {
    const t = useTranslations('Dashboard.Profile.Form')
    const tGender = useTranslations('Dashboard.Profile.Form.GenderInput')
    const tProfile = useTranslations('Dashboard.Profile')

    const { handleUpdateProfile } = useProfile(user.id)

    const gender = [
        { value: 'MALE', label: tGender('male') },
        { value: 'FEMALE', label: tGender('female') },
        { value: 'OTHER', label: tGender('other') },
        { value: 'UNKNOWN', label: tGender('preferNotToSay') },
    ]

    const genderValue = gender.find((g) => g.value === user.gender)

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<EditProfileSchema>({
        resolver: zodResolver(getEditProfileSchema(t)),
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
    }

    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='flex flex-col gap-4 p-4 rounded-xl border border-gray-200 dark:border-gray-800 dark:bg-gray-900'>

            <div className='flex flex-col '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{t('title')}</h2>
                <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{t('description')}</p>
            </div>
            <Separator className='w-full h-px bg-gray-200 dark:bg-gray-800' />


            <form onSubmit={handleSubmit(onSubmit, onError)} className='flex flex-col gap-4 '>

                <div className='flex flex-col md:flex-row gap-4'>
                    <Input {...register('full_name')} error={errors.full_name?.message} name="full_name" label={t('NameInput.label')} variant='secondary' type="text" />
                    <Input {...register('username')} error={errors.username?.message} name="username" label={t('UsernameInput.label')} variant='secondary' type="text" />
                </div>
                <div className='flex flex-col md:flex-row gap-4'>
                    <Input {...register('birthday')} error={errors.birthday?.message} name="birthday" label={t('BirthdayInput.label')} variant='secondary' type="date" />
                    <Select onChange={(value) => setValue('gender', value as Gender)} error={errors.gender?.message} placeholder={tGender('label')} variant='secondary' values={gender} defaultValue={genderValue} />
                </div>
                <Button type='submit' variant='contained' className="w-full md:w-1/3 self-center py-3 text-lg md:text-xl mt-4">{tProfile('saveButton')}</Button>
            </form>
        </MotionDiv>
    )
}

