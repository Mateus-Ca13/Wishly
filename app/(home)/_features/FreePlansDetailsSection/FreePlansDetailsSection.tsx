import Button from '@/components/Button/Button'
import { MotionDiv } from '@/components/Motion/Motion'
import { Gift } from 'lucide-react'
import PlanLimitsSpan from './PlanLimitsSpan'
import { Separator } from '@/components/ui/separator'
import Link from 'next/link'


export default async function FreePlansDetailsSection() {
    return (
        <div id='plans' className='w-auto bg-white mt-8 shadow-lg py-8 md:py-12 lg:py-24 md:mt-16 border border-gray-200 gap-8 flex flex-col xl:flex-row-reverse items-start justify-center px-4 md:px-10 lg:px-20'>
            <MotionDiv
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ delay: 0.4, duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full xl:w-2/5 xl:p-12 flex flex-col items-center xl:items-start justify-center text-center xl:text-start'>
                <h1 className='2xl:text-5xl md:text-3xl text-xl font-bold text-primary-700'>Faça parte disso tudo <span className='text-gradient'>agora mesmo!</span></h1>
                <p className='2xl:text-2xl md:text-xl text-base sm:w-4/5 w-full font-bold text-primary-900 mt-4 lg:mt-8'>
                    Durante o lançamento, todos os usuários que se cadastrarem terão planos gratuitos exclusivos.
                </p>

                <Link href="/login" className='bg-linear-to-tr from-primary-500 to-secondary-500 text-white font-bold rounded-full mt-8 px-8 py-4 2xl:text-2xl md:text-xl text-lg whitespace-nowrap md:hover:scale-105 hover:brightness-110 duration-300'>
                    <div className='flex items-center gap-2 w-full justify-center'>
                        Criar uma conta gratuita!
                    </div>
                </Link>

            </MotionDiv>
            <div className='w-full xl:w-3/5 h-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:gap-8 mt-8 xl:mt-0 md:mt-12 lg:mt-16'>
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.5, bounce: 0.4, type: 'spring' }}
                    className='w-full h-full md:hover:-translate-y-2 duration-300 lg:w-1/2 bg-white rounded-3xl shadow-xl border-2 border-primary-300 p-6 md:p-10 lg:p-12 flex flex-col items-start justify-start text-start relative'>

                    <div className='absolute -top-4 left-6 md:left-10 bg-gradient rounded-full px-4 py-1'>
                        <p className='text-xs md:text-sm font-bold text-white'>🎉 Lançamento</p>
                    </div>

                    <h2 className='2xl:text-4xl md:text-3xl text-xl font-bold mt-2 text-gradient'>
                        Durante o lançamento
                    </h2>
                    <p className='2xl:text-lg md:text-base text-sm text-gray-500 mt-2'>
                        Cadastre-se agora e aproveite tudo isso de graça!
                    </p>

                    <div className='flex flex-col gap-3 mt-6 md:mt-8 w-full'>
                        <PlanLimitsSpan description='Até 3 grupos' type='greater' />
                        <PlanLimitsSpan description='Até 5 pessoas por grupo' type='greater' />
                        <PlanLimitsSpan description='Até 30 itens por lista' type='greater' />

                    </div>

                    <div className='w-fit rounded-full px-4 mt-6 md:mt-8 py-2 bg-linear-to-r from-primary-50 to-secondary-50'>
                        <p className='2xl:text-lg md:text-base text-sm w-full font-bold text-gradient'>
                            100% gratuito. Sem pegadinhas.
                        </p>
                    </div>
                </MotionDiv>

                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
                    className='w-full md:hover:-translate-y-2 duration-300 lg:w-1/2 bg-white rounded-3xl shadow-md border border-gray-200 p-6 md:p-10 flex flex-col items-start justify-start text-start'>

                    <h2 className='2xl:text-3xl md:text-2xl text-lg font-bold text-gray-800'>
                        Depois do lançamento
                    </h2>
                    <p className='2xl:text-lg md:text-base text-sm text-gray-400 mt-2'>
                        Alguns limites serão aplicados no plano gratuito.
                    </p>

                    <div className='flex flex-col gap-3 mt-6 md:mt-8 w-full'>
                        <PlanLimitsSpan description='Até 2 grupos' type='simple' />
                        <PlanLimitsSpan description='Até 3 pessoas por grupo' type='simple' />
                        <PlanLimitsSpan description='Até 15 itens por lista' type='simple' />
                    </div>

                    <p className='2xl:text-base md:text-sm text-xs text-gray-400 mt-6 md:mt-8'>
                        Planos premium estarão disponíveis em breve.
                    </p>
                </MotionDiv>
            </div>
        </div>
    )
}
