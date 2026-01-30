'use client'
import { useForm } from 'react-hook-form';
import { getLoginSchema, LoginSchema } from '../../../src/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import { CnButton } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

interface Props {
  onSubmit: (data: LoginSchema) => void
}

export default function LoginForm({ onSubmit }: Props) {
  const t = useTranslations('Dashboard.Profile.Form');
  const tAuth = useTranslations('Dashboard.Auth.Login');

  const { control, handleSubmit, formState: { errors, isLoading }, register } = useForm<LoginSchema>({
    resolver: zodResolver(getLoginSchema(t))
  });


  const onSubmitForm = async (data: LoginSchema) => {
    onSubmit(data)
  }



  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className='gap-2 grid w-full'>
      <Input {...register('email')} error={errors.email?.message} name="email" label={t('EmailInput.label')} type="email" />
      <Input {...register('password')} error={errors.password?.message} name="password" label={t('PasswordInput.label')} type="password" />
      <CnButton
        type="submit"
        className='cursor-pointer text-lg md:text-xl mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
        {isLoading ? <LoaderCircle className='spin-in' /> : tAuth('submitButton')}
      </CnButton>
    </form>
  )
}

