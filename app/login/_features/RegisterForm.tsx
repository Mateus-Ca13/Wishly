'use client'
import { useForm } from 'react-hook-form';
import { registerSchema, RegisterSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import { CnButton } from '@/components/ui/button';

export default function RegisterForm() {

    const {control, handleSubmit, formState: { errors }, register} = useForm<RegisterSchema>({
      resolver: zodResolver(registerSchema)
    });

    const onSubmit = (data: RegisterSchema) => {
        console.log(data)
    }

  
    return (
          <form onSubmit={handleSubmit(onSubmit)} className='gap-2 grid w-full'>
            <Input {...register('name')} error={errors.name?.message} name="name" label="Nome completo" type="text" />
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
