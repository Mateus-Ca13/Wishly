import { MotionDiv } from '@/components/Motion/Motion'
import Image from 'next/image'
import Link from 'next/link'

export default function CreateAccountCallSection() {
    return (
        <MotionDiv
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, bounce: 0.4, type: 'spring' }}
            className='w-auto shadow-lg lg:rounded-[64px] md:rounded-4xl rounded-2xl bg-linear-to-tr from-primary-100 px-4 to-secondary-100 py-10 md:py-12 lg:py-12 pb-0! mb-8 md:mb-16 lg:mb-32 mt-4 md:mt-8 lg:mt-16 flex flex-col items-center justify-center text-center mx-4 md:mx-10 lg:mx-20'>
            <div className='w-full h-full flex flex-col lg:flex-row items-stretch justify-center gap-0 lg:gap-16 xl:gap-32 px-4 sm:px-12 lg:px-16 2xl:px-32'>
                <div className='w-full lg:w-1/2 flex flex-col items-center justify-center text-center py-8 lg:py-0 gap-6 lg:gap-4'>
                    <h1 className='2xl:text-5xl md:text-3xl text-xl font-leckerli brightness-75 text-gradient p-4'>Pronto pra simplificar sua forma de dar presentes?</h1>
                    <p className='2xl:text-2xl md:text-xl text-base font-semibold text-primary-700/60 mb-4 xl:mb-8'>
                        Esqueça as planilhas chatas e as mensagens de grupo confusas. Com o Wishly,  presentear vira uma experiência eficiente para todos os envolvidos.
                    </p>
                    <Link href="/login" className='bg-linear-to-tr from-primary-500 to-secondary-500 text-white font-bold rounded-full px-8 py-4 2xl:text-2xl md:text-xl text-base whitespace-nowrap md:hover:scale-105 hover:brightness-110 duration-300'>
                        <div className='flex items-center gap-2 w-full justify-center'>
                            Começar minha lista de desejos!
                        </div>
                    </Link>
                </div>
                <div className='w-full sm:w-1/2 lg:w-1/3 h-full flex flex-col self-center lg:self-end items-center justify-end relative min-h-[400px]'>
                    <Image src={"/landing/cellphone_logo.webp"} width={1600} height={1600} alt={"Wishly Logo"} className="h-full lg:self-end w-auto object-contain max-h-full" />
                </div>
            </div>
        </MotionDiv>
    )
}
