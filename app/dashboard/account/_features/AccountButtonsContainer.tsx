'use client'
import Button from '@/components/Button/Button'
import { MotionDiv } from '@/components/Motion/Motion'
import { Separator } from '@/components/ui/separator'
import useAuth from '@/hooks/useAuth'
import { ChevronRight, CircleQuestionMark, CircleStar, LogOut, Settings, Shield, User } from 'lucide-react'
import Link from 'next/link'
import { toast } from 'sonner'

export default function AccountButtonsContainer() {


    const { handleLogout } = useAuth()

    const handleUnavailableButton = () => {
        toast.info('Funcionalidade indisponível no momento')
    }

    return (
        <div className='w-full flex flex-col items-center justify-center gap-4'>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full flex flex-col items-start justify-start gap-2 md:gap-4 shadow p-4 rounded-lg border border-gray-200 '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden mb-2'>Minha Conta</h2>
                <Link href='/dashboard/account/profile' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <User className='size-10 bg-primary-100 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold'>Editar Perfil</p>
                        <p className='text-sm md:text-base text-gray-500'>Gerencie suas informações pessoais</p>
                    </div>
                    <ChevronRight className='ms-auto size-5' />
                </Link>
                <Separator className='w-full bg-gray-200' />
                <Link href='/dashboard/account/subscriptions' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <CircleStar className='size-10 bg-primary-100 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold'>Gerenciar assinaturas</p>
                        <p className='text-sm md:text-base text-gray-500'>Gerencie planos e assinaturas</p>
                    </div>
                    <ChevronRight className='ms-auto size-5' />
                </Link>
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full flex flex-col items-start justify-start gap-2 md:gap-4 shadow p-4 rounded-lg border border-gray-200 '>
                <h2 className='text-lg md:text-2xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden mb-2'>Configurações</h2>
                <Link href='/dashboard/account/privacy' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <Shield className='size-10 bg-primary-100 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold'>Privacidade e Segurança</p>
                    </div>
                    <ChevronRight className='ms-auto size-5' />
                </Link>
                <Separator className='w-full bg-gray-200' />
                <Link href='/dashboard/account/preferences' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <Settings className='size-10 bg-primary-100 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold'>Preferências</p>
                    </div>
                    <ChevronRight className='ms-auto size-5' />
                </Link>
                <Separator className='w-full bg-gray-200' />
                <Link href='/dashboard/account/help' className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
                    <CircleQuestionMark className='size-10 bg-primary-100 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold'>Ajuda e Suporte</p>
                    </div>
                    <ChevronRight className='ms-auto size-5' />
                </Link>
            </MotionDiv>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full flex flex-col items-start justify-start gap-2 md:gap-4 shadow p-4 rounded-lg border border-gray-200 '>
                <Button onClick={handleLogout} className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-secondary-100/30' variant='blank' >
                    <LogOut className='size-10 bg-secondary-100 p-2 rounded-lg' />
                    <div className='flex flex-col items-start justify-start text-start'>
                        <p className='text-base md:text-xl font-semibold'>Sair</p>
                    </div>
                    <ChevronRight className='ms-auto size-5' />
                </Button>
            </MotionDiv>



        </div>
    )
}
