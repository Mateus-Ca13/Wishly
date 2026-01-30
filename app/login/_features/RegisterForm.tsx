'use client'
import { useForm } from 'react-hook-form';
import { firstStepRegisterProfileSchema, registerProfileSchema, RegisterProfileSchema } from '../../../src/schemas/auth';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import { CnButton } from '@/components/ui/button';
import { useState } from 'react';
import Select from '@/components/Select/Select';
import { Gender } from '@/types/entities';

interface Props {
  onSubmit: (data: RegisterProfileSchema) => void
}

export default function RegisterForm({ onSubmit }: Props) {

  const gender = [
    { value: 'MALE', label: 'Masculino' },
    { value: 'FEMALE', label: 'Feminino' },
    { value: 'OTHER', label: 'Outro' },
    { value: 'UNKNOWN', label: 'Prefiro não informar' },
  ]

  const [formStep, setFormStep] = useState<'profile' | 'details'>('profile')
  const { handleSubmit, formState: { errors }, register, setValue, getValues, setError, clearErrors } = useForm<RegisterProfileSchema>({
    resolver: zodResolver(registerProfileSchema)
  });

  const onSubmitForm = (data: RegisterProfileSchema) => {
    onSubmit(data)
  }

  const validateProfileStep = async () => {
    const currentData = getValues();
    const result = firstStepRegisterProfileSchema.safeParse(currentData);

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
    console.log(errors)
  }

  return (
    <form onSubmit={handleSubmit(onSubmitForm, onError)} className='gap-2 grid w-full'>
      {formStep === 'profile' ? (
        <>
          <Input {...register('full_name')} error={errors.full_name?.message} name="full_name" label="Nome completo" type="text" />
          <Input {...register('email')} error={errors.email?.message} name="email" label="E-mail" type="email" />
          <Input {...register('password')} error={errors.password?.message} name="password" label="Senha" type="password" />
          <Input {...register('confirm_password')} error={errors.confirm_password?.message} name="confirm_password" label="Confirmar senha" type="password" />
          <CnButton
            type="button"
            onClick={validateProfileStep}
            className='cursor-pointer text-lg md:text-xl mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
            Cadastrar
          </CnButton>
        </>
      ) : (
        <>
          <Input {...register('username')} error={errors.username?.message} name="username" label={<span>Usuário <span className='text-gray-500 text-sm md:text-base'>(como será exibido no perfil)</span></span>} type="text" />
          <Input {...register('birthday')} error={errors.birthday?.message} name="birthday" label="Data de nascimento" variant='secondary' type="date" />
          <Select onChange={(value) => setValue('gender', value as Gender)} error={errors.gender?.message} placeholder="Gênero" variant='secondary' values={gender} />
          <CnButton
            type="submit"
            className='cursor-pointer text-lg md:text-xl mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
            Concluir
          </CnButton>
        </>
      )}
    </form>
  )
}
