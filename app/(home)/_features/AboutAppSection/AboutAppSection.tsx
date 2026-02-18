import React from 'react'
import AboutCard from './AboutCard'
import { Gift, UsersRound, Heart } from 'lucide-react'
import { MotionDiv } from '@/components/Motion/Motion'

export default function AboutAppSection() {
    return (
        <div className='w-full bg-white xl:mb-16 md:mb-12 mb-8 py-6 md:py-12 lg:py-24 flex flex-col items-center justify-center text-center px-4 border border-gray-200'>
            <MotionDiv
                id="aboutapp"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 1 }}
                transition={{ duration: 0.5, bounce: 0.4, type: 'spring' }}
                className='w-full flex flex-col items-center justify-center text-center'
            >
                <h1 className='2xl:text-5xl md:text-3xl text-xl font-bold text-primary-900'>Como o <span className='text-gradient font-leckerli'>Wishly </span> funciona?</h1>
                <p className='2xl:text-xl md:text-lg text-base sm:w-2/3 w-full text-gray-500 md:mt-8 mt-4'>
                    Diga adeus à confusão nos grupos de mensagens e aos presentes repetidos. Veja como o Wishly tranforma a experiencia de dar presentes.
                </p>
            </MotionDiv>
            <div className='w-full h-full flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-12 mt-12 lg:mt-24 md:px-8 lg:px-32'>
                <AboutCard
                    title="1. Crie seu grupo"
                    description="Crie um espaço compartilhado para sua família, amigos do trabalho ou turma da faculdade. Convide todos com um simples link e comece a festa."
                    icon={Gift}
                    delay={0.1}
                />
                <AboutCard
                    title="2. Compartilhe desejos"
                    description="Adicione links de lojas, preços, observações e a prioridade dos itens que você gostaria de ganhar. Todos no grupo podem ver a lista de desejos dos demais membros de forma fácil e organizada."
                    icon={UsersRound}
                    delay={0.2}
                />
                <AboutCard
                    title="3. Reserve e surpreenda"
                    description='Marque o presente que você escolheu comprar. O item fica "reservado" para outros membros, mas continua sendo uma surpresa para quem vai receber!'
                    icon={Heart}
                    delay={0.3}
                />
            </div>
        </div>
    )
}
