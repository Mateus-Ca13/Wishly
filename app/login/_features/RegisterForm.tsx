'use client'
import { useForm } from 'react-hook-form';
import { registerProfileSchema, RegisterProfileSchema } from '../../../src/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import { CnButton } from '@/components/ui/button';

interface Props {
  onSubmit: (data: RegisterProfileSchema) => void
}

export default function RegisterForm({ onSubmit }: Props) {

  const { handleSubmit, formState: { errors }, register } = useForm<RegisterProfileSchema>({
    resolver: zodResolver(registerProfileSchema)
  });

  const onSubmitForm = (data: RegisterProfileSchema) => {
    onSubmit(data)
  }


  return (
    <form onSubmit={handleSubmit(onSubmitForm)} className='gap-2 grid w-full'>
      <Input {...register('full_name')} error={errors.full_name?.message} name="full_name" label="Nome completo" type="text" />
      <Input {...register('username')} error={errors.username?.message} name="username" label="Usuário" type="text" />
      <Input {...register('email')} error={errors.email?.message} name="email" label="E-mail" type="email" />
      <Input {...register('password')} error={errors.password?.message} name="password" label="Senha" type="password" />
      <CnButton
        type="submit"
        className='cursor-pointer text-lg md:text-xl mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
        Registrar
      </CnButton>
    </form>
  )
}
