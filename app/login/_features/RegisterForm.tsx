'use client'
import { useForm } from 'react-hook-form';
import { getFirstStepRegisterProfileSchema, getRegisterProfileSchema, RegisterProfileSchema } from '../../../src/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import { CnButton } from '@/components/ui/button';
import { useState } from 'react';
import Select from '@/components/Select/Select';
import { Gender } from '@/types/entities';
import { useTranslations } from 'next-intl';
import { LoaderCircle } from 'lucide-react';

interface Props {
  onSubmit: (data: RegisterProfileSchema) => Promise<void>
}

export default function RegisterForm({ onSubmit }: Props) {
  const t = useTranslations('Dashboard.Profile.Form');
  const tAuth = useTranslations('Dashboard.Auth.Register');
  const tGender = useTranslations('Dashboard.Profile.Form.GenderInput');

  const gender = [
    { value: 'MALE', label: tGender('male') },
    { value: 'FEMALE', label: tGender('female') },
    { value: 'OTHER', label: tGender('other') },
    { value: 'UNKNOWN', label: tGender('preferNotToSay') },
  ]

  const [formStep, setFormStep] = useState<'profile' | 'details'>('profile')
  const { handleSubmit, formState: { errors, isSubmitting }, register, setValue, getValues, setError, clearErrors } = useForm<RegisterProfileSchema>({
    resolver: zodResolver(getRegisterProfileSchema(t))
  });

  const onSubmitForm = async (data: RegisterProfileSchema) => {
    await onSubmit(data)
  }

  const validateProfileStep = async () => {
    const currentData = getValues();
    const result = getFirstStepRegisterProfileSchema(t).safeParse(currentData);


    if (!result.success) {
      result.error.issues.forEach((issue) => {
        setError(issue.path[0] as keyof RegisterProfileSchema, {
          message: issue.message
        });
      });
      return;
    }

    clearErrors();
    setFormStep('details');
  }

  const onError = (errors: any) => {
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm, onError)} className='gap-2 grid w-full'>
      {formStep === 'profile' ? (
        <>
          <Input key="full_name" {...register('full_name')} error={errors.full_name?.message} name="full_name" label={t('NameInput.label')} type="text" />
          <Input key="email" {...register('email')} error={errors.email?.message} name="email" label={t('EmailInput.label')} type="email" />
          <Input key="password" {...register('password')} error={errors.password?.message} name="password" label={t('PasswordInput.label')} type="password" />
          <Input key="confirm_password" {...register('confirm_password')} error={errors.confirm_password?.message} name="confirm_password" label={t('ConfirmPasswordInput.label')} type="password" />
          <CnButton
            type="button"
            onClick={validateProfileStep}
            className='cursor-pointer text-lg md:text-xl mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
            {tAuth('registerButton')}
          </CnButton>
        </>
      ) : (
        <>
          <Input key="username" {...register('username')} error={errors.username?.message} name="username" label={<span>{t('UsernameInput.label')} <span className='text-gray-500 dark:text-gray-400 text-sm md:text-base'>{t('UsernameInput.labelNote')}</span></span>} type="text" />
          <Input key="birthday" {...register('birthday')} error={errors.birthday?.message} name="birthday" label={t('BirthdayInput.label')} variant='secondary' type="date" />
          <Select key="gender" onChange={(value) => setValue('gender', value as Gender)} error={errors.gender?.message} placeholder={tGender('label')} variant='secondary' values={gender} />
          <CnButton
            type="submit"
            className='cursor-pointer flex items-center justify-center text-lg md:text-xl mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
            {isSubmitting ? <LoaderCircle className='animate-spin' /> : tAuth('finishRegisterButton')}
          </CnButton>
        </>
      )}
    </form>
  )
}

