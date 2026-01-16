'use client'
import { useForm } from 'react-hook-form';
import { loginSchema, LoginSchema } from './schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import { CnButton } from '@root/components/ui/button';
import { loginAction } from '../actions';
import { LoaderCircle } from 'lucide-react';
import { useState } from 'react';

export default function LoginForm() {

    const [serverError, setServerError] = useState<string>('')

    const {control, handleSubmit, formState: { errors, isLoading }, register} = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  });

  const onSubmit = async (data: LoginSchema) => {
    console.log(data)
    const response = await loginAction(data)

    if(!response.success) {
        setServerError(response.message)
        console.log(response);
        
    } 
    console.log(response)
  }

  const onError = (errors: any) => {
        console.log("ERRO NO SUBMIT:", errors)
    }
  

  return (
        <form onSubmit={handleSubmit(onSubmit, onError)} className='gap-2 grid'>
            <Input {...register('email')} error={errors.email?.message} name="email" label="E-mail" type="email" />
            <Input {...register('password')} error={errors.password?.message} name="password" label="Senha" type="password" />
            {serverError && <p className='text-red-500 text-sm text-center'>{serverError}</p>}
            <CnButton 
            type="submit" 
            className='cursor-pointer mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
            {isLoading? <LoaderCircle className='spin-in'/> : 'Entrar'}
            </CnButton>
        </form>
  )
}
