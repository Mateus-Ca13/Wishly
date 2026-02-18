import { Smartphone, Sparkles, Laugh } from 'lucide-react'
import ReasonSpan from './ReasonSpan'
import Image from 'next/image'
import { MotionDiv } from '@/components/Motion/Motion'

export default function WhyUseSection() {

    const reasons = [
        {
            title: 'Fim dos presentes repetidos',
            description: 'Chega de grupos secretos e cochichos pra combinar presentes! O Wishly avisa o que já tá garantido, salvando todo mundo de dar (e receber) o mesmo par de meias.',
            icon: Laugh,
        },
        {
            title: 'Sua central de desejos',
            description: 'Gerencie grupos da família, amigos e do trabalho sem perder o juízo. Organize listas, adicione links e preços, e encontre o presente perfeito em segundos. É tipo mágica, só que tech.',
            icon: Sparkles,
        },
        {
            title: 'Sempre com você',
            description: 'No celular, no tablet ou naquela aba escondida no trabalho. O Wishly funciona em qualquer tela e vira um App no seu celular num clique. Seus desejos no bolso, sem pesar nadinha.',
            icon: Smartphone,
        },
    ]


    return (
        <MotionDiv
            id="whyuse"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-auto shadow-lg lg:rounded-[64px] md:rounded-4xl rounded-2xl bg-gray-900 py-10 md:py-12 lg:py-24 flex flex-col items-center justify-center text-center mx-4 md:mx-10 lg:mx-20'>
            <div className='w-full h-full flex flex-col lg:flex-row items-stretch justify-center gap-12 lg:gap-12 px-4 sm:px-12 lg:px-16 2xl:px-32'>
                <div className='w-full lg:w-1/2 h-full flex flex-col items-center justify-center'>
                    <h1 className='2xl:text-5xl md:text-3xl text-xl font-bold text-white xl:mb-16 md:mb-12 mb-8'>Por que usar o <span className='text-gradient font-leckerli'>Wishly</span>?</h1>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-4 lg:gap-8'>
                        {reasons.map((reason, index) => (
                            <ReasonSpan
                                key={index}
                                title={reason.title}
                                description={reason.description}
                                icon={reason.icon}
                            />
                        ))}
                    </div>
                </div>
                <div className='w-full bg-radial via-transparent  from-primary-300 via-50% md:via-40% xl:via-60% to-transparent rounded-xl lg:w-1/2 relative min-h-[300px]'>
                    <Image
                        className='object-contain p-4'
                        src="/landing/wishlyInterface2.webp"
                        alt="Wishly Interface"
                        fill
                    />

                </div>
            </div>
        </MotionDiv>
    )
}
