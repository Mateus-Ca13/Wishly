'use client'
import { MotionDiv } from '@/components/Motion/Motion';
import React from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { CnButton as Button} from '@root/components/ui/button';

export default function SignFormWrapper() {
    const [signMode, setSignMode] = React.useState<'login' | 'register'>('login');


    function renderForm() {
        if (signMode === 'login') {
            return <>
                <h2>Faça login para ter acesso a sua lista de desejos!</h2>
                <LoginForm />
                <Button className='cursor-pointer gap-1' onClick={() => setSignMode('register')}>Não tem uma conta? <span className='text-primary-700'>Registre-se</span></Button>
            </>;

        } else {
            return <>
                <h2>Crie sua conta e comece a sua lista de desejos!</h2>
                <RegisterForm />
                <Button className='cursor-pointer gap-1' onClick={() => setSignMode('login')}>Já tem uma conta? <span className='text-primary-700'>Faça login</span></Button>
            </>;
        }
    }


  return (
    <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="w-full flex flex-col max-w-md p-8 bg-white rounded-lg shadow-xl space-y-6"
    >
        <h1 className="text-3xl font-bold mb-6 text-center">Bem-vindo ao <span className="bg-linear-to-bl from-secondary-500 to-primary-500 bg-clip-text text-transparent">Wishly!</span></h1>
        {renderForm()}
    </MotionDiv>
  )
}
