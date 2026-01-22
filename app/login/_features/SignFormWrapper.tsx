'use client'
import { MotionDiv } from '@/components/Motion/Motion';
import React from 'react'
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
import { CnButton as Button} from '@/components/ui/button';
import Image from 'next/image';

export default function SignFormWrapper() {
    const [signMode, setSignMode] = React.useState<'login' | 'register'>('login');

  return (
    <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center justify-center m-3 mb-8"
    >   
        <Image
            src="/icon_faded.png"
            alt="Wishly Logo"
            width={200}
            height={100}
            className='mb-4'
        />
        <div
        className='w-full max-w-md p-8 bg-white rounded-2xl shadow-xl space-y-6 flex flex-col items-center justify-center'>

        
            <h1 className="text-3xl font-bold mb-6 text-center">Bem-vindo ao <span className="bg-linear-to-bl font-le from-secondary-500 to-primary-500 bg-clip-text text-transparent">Wishly!</span></h1>
            {signMode === 'login'? (
                <>
                <h2 className='text-lg md:text-xl text-center'>Faça login para ter acesso a sua lista de desejos!</h2>
                <LoginForm />
                <Button className='cursor-pointer gap-1 text-lg' onClick={() => setSignMode('register')}>Não tem uma conta? <span className='text-primary-700'>Registre-se</span></Button>
            </>
            ) : (
                <>
                <h2 className='text-lg md:text-xl text-center'>Crie sua conta e comece a sua lista de desejos!</h2>
                <RegisterForm />
                <Button className='cursor-pointer gap-1 text-lg ' onClick={() => setSignMode('login')}>Já tem uma conta? <span className='text-primary-700'>Faça login</span></Button>
                </>
            )}
        </div>
    </MotionDiv>
  )
}
