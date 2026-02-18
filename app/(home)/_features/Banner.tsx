import Button from '@/components/Button/Button'
import { MotionDiv } from '@/components/Motion/Motion'
import { Card } from '@/components/ui/card'
import { Separator } from '@radix-ui/react-separator'
import { ArrowRight, Baby, BadgeDollarSign, ChevronRight, Gift, Heart, ShieldCheck, UsersRound } from 'lucide-react'
import Image from 'next/image'

export default function Banner() {
    return (
        <div className='py-16 md:py-24 bg-linear-to-tr from-primary-50 to-secondary-50 md:min-h-screen sm:px-6 lg:px-20'>
            <div className='w-full h-full pt-12 flex items-center justify-center gap-12 lg:gap-6 xl:gap-12 flex-col lg:flex-row'>
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
                    className='text-center px-8 lg:px-0 lg:text-start w-full lg:w-1/2 h-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='2xl:text-8xl md:text-6xl text-4xl font-bold text-primary-900'><span className='text-gradient'>Presentear</span> nunca foi tão fácil.</h1>
                    <p className='2xl:text-2xl md:text-xl text-lg sm:w-2/3 w-full font-bold text-primary-500 mt-8'>Crie grupos, compartilhe sua lista de desejos e descubra o que seus amigos e familiares querem.</p>
                    <div className='flex gap-4 mt-8 flex-col xl:flex-row'>
                        <Button variant="contained" className='rounded-full px-8 py-4 2xl:text-2xl md:text-xl text-lg whitespace-nowrap md:hover:scale-105'>
                            <div className='flex items-center gap-2 w-full justify-center'>
                                <Gift className='size-5' />
                                Criar minha lista de desejos
                            </div>
                        </Button>
                        <Button variant="outlined" className='rounded-full px-8 py-4 2xl:text-2xl md:text-xl text-lg whitespace-nowrap md:hover:scale-105'>
                            <div className='flex items-center gap-2 w-full justify-center'>
                                Ver como funciona
                                <ArrowRight className='size-5' />
                            </div>
                        </Button>
                    </div>
                    <div className='flex flex-wrap justify-center gap-2 md:gap-4 m-6'>
                        <div className='flex  items-center gap-2'>
                            <ShieldCheck className='size-5 text-primary-500' />
                            <p className='text-primary-500/70 md:text-lg text-sm font-semibold'>100% Seguro</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <BadgeDollarSign className='size-5 text-primary-500' />
                            <p className='text-primary-500/70 md:text-lg text-sm font-semibold'>Gratuito</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <Baby className='size-5 text-primary-500' />
                            <p className='text-primary-500/70 md:text-lg text-sm font-semibold'>Para a Família</p>
                        </div>
                    </div>
                </MotionDiv>
                <MotionDiv
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5, bounce: 0.4, type: 'spring' }}
                    className='hidden  sm:flex text-center px-4 lg:px-0 w-full lg:w-1/2 h-full flex-col justify-center items-center'>
                    <div className='relative'>
                        <div className='absolute bottom-4 -left-16 bg-white rounded-xl'>
                            <Card className="w-full px-4 flex flex-row items-center  justify-start py-3 gap-2 duration-200 border-gray-300">
                                <div className="flex ps-2 justify-start text-start items-center gap-4 flex-1 min-w-0">
                                    <div className="min-w-0 flex-1 text-start">
                                        <h2 className="2xl:text-lg font-semibold truncate max-w-xs md:max-w-3xl">
                                            Controle Playstation 5
                                        </h2>
                                        <div className="flex gap-2 items-center text-gray-500 text-sm md:text-base">
                                            <span
                                                className={`text-green-500 flex items-center h-full gap-1 -ms-0.5 py-1`}
                                            >
                                                <Heart className="size-3.5" />
                                                <p className="truncate text-sm 2xl:text-base">Deseja muito!</p>
                                            </span>
                                            <Separator orientation="vertical" className="h-4 bg-gray-200 w-px" />
                                            <span className=" truncate text-sm 2xl:text-base">R$ 349,90</span>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                        <div className='absolute top-4 -right-16 bg-white rounded-xl'>
                            <Card className='w-full p-2 flex flex-row items-center justify-between gap-12 duration-200 border-gray-300'>
                                <div className='flex justify-center items-center gap-4 w-9/10'>
                                    <Image
                                        src='/room_icons/icon3.webp'
                                        alt="Room Avatar"
                                        width={70}
                                        height={70}
                                        className="rounded-lg p-2 aspect-square border-2 border-primary-300 bg-linear-to-tr from-secondary-100 to-primary-100"
                                    />
                                    <div className='min-w-0 flex-1'>
                                        <h2 className='2xl:text-xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden'>Família Silva</h2>
                                        <div className='flex items-center gap-1 justify-start text-gray-500'>
                                            <UsersRound className='size-4' />
                                            <p className='text-sm 2xl:text-base'>5 membros</p>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <ChevronRight className='size-5' />
                                </div>
                            </Card>
                        </div>
                        <Image src="/landing/banner.webp" alt="Banner" className='rounded-xl shadow-lg border-2 border-primary-500/50 w-[350px] h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px]' width={900} height={900} />
                    </div>
                </MotionDiv>
            </div>
        </div>
    )
}
