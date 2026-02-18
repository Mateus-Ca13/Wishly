import React from 'react'
import { MotionDiv } from '@/components/Motion/Motion'
import { Accordion } from '@/components/ui/accordion'
import QuestionCard from './QuestionCard'
import Link from 'next/link'

export default function FAQSection() {

    const questions = [
        {
            question: 'O Wishly é realmente gratuito?',
            answer: 'Sim! Durante o período de lançamento, você tem acesso a todos os recursos sem pagar nada — zero, nada, necas. No futuro, teremos planos premium com funcionalidades extras, mas o plano gratuito continuará existindo com tudo que você precisa pra começar a presentear melhor.',
        },
        {
            question: 'Posso mudar de plano depois?',
            answer: 'Com certeza! Quando os planos premium estiverem disponíveis, você poderá fazer o upgrade a qualquer momento, sem perder nenhum dado. E se quiser voltar pro plano gratuito, sem problemas — sem letras miúdas.',
        },
        {
            question: 'Meus dados estão seguros?',
            answer: 'Segurança é nossa prioridade número um. Usamos protocolos avançados de criptografia e proteção de acesso rigorosa para garantir que suas informações fiquem blindadas. Seus dados são seus e de mais ninguém.',
        },
        {
            question: 'As pessoas vão saber o que eu vou ganhar de presente?',
            answer: 'Isso mesmo! Esse é o ponto alto do Wishly. Quando alguém reserva um item da sua lista, essa informação fica invisível pra você. Só quem reservou (e os outros membros do grupo) conseguem ver, garantindo que a surpresa fique intacta até a hora de abrir o presente.',
        },
        {
            question: 'Posso compartilhar minha lista de desejos?',
            answer: 'Pode sim! Você gera um link de compartilhamento direto pelo app e manda pra quem quiser. E pra sua segurança, os links têm expiração automática após um período, então ninguém fica com acesso eterno à sua lista.',
        },
        {
            question: 'Posso convidar meus amigos e familiares?',
            answer: 'Essa é a ideia! Você cria um grupo (família, amigos do trabalho, turma da faculdade…) e convida todo mundo com um link simples. Cada pessoa entra, monta sua lista e já pode começar a espiar — digo, a reservar — os presentes dos outros.',
        },
        {
            question: 'Funciona no celular?',
            answer: 'Funciona em tudo! O Wishly é uma aplicação web responsiva que roda perfeitamente no celular, tablet e computador. E o melhor: você pode instalá-lo como um app no seu celular (é um PWA!), sem precisar baixar nada na loja de aplicativos.',
        },
        {
            question: 'E se eu quiser apagar minha conta?',
            answer: 'Sem drama. Você pode excluir sua conta a qualquer momento nas configurações, e todos os seus dados serão removidos permanentemente. Respeitamos sua privacidade do começo ao fim.',
        },
    ]

    return (
        <MotionDiv
            id="faq"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ delay: 0.4, duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-auto mx-4 xl:p-12 mt-12 md:mt-16 flex flex-col items-center justify-center text-center'>
            <h1 className='2xl:text-5xl md:text-3xl text-xl font-bold text-primary-700'>Perguntas frequentes</h1>
            <p className='2xl:text-2xl md:text-xl text-base sm:w-4/5 w-full text-gray-700 mt-4 lg:mt-8'>
                Aqui estão as perguntas mais comuns que recebemos dos nossos usuários.
            </p>
            <Accordion type="single" collapsible className='mt-4 md:mt-8 lg:mt-12 w-full max-w-4xl'>
                {questions.map((question, index) => (
                    <QuestionCard key={index} question={question.question} answer={question.answer} value={`item-${index + 1}`} />
                ))}
            </Accordion>
            <div className='bg-primary-100 w-full p-8 rounded-2xl mt-8 md:mt-12 lg:mt-16 max-w-4xl'>
                <h2 className='2xl:text-3xl md:text-2xl text-lg font-bold text-primary-700'>Ainda tem dúvidas?</h2>
                <p className='2xl:text-lg md:text-base text-sm mt-2 mb-8'>Nossa equipe está pronta para ajudar! Envie um email para <span className='text-primary-700'>suportewishly@gmail.com</span>.</p>
                <Link href='mailto:suportewishly@gmail.com' className='2xl:text-xl md:text-lg text-base text-white hover:brightness-110 cursor-pointer bg-primary-500 px-4 py-2 rounded-lg duration-200'>
                    Fale conosco
                </Link>
            </div>
        </MotionDiv>
    )
}
