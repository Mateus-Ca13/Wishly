'use client'
import { MotionDiv } from '@/components/Motion/Motion'
import { Card } from '@/components/ui/card'
import { Bookmark, X } from 'lucide-react'

type ReservationButtonProps = {
  isActive: boolean
  onClick: () => void
}

export default function ReservationButton({ isActive, onClick }: ReservationButtonProps) {

    
  return (
    <div className={`fixed flex bottom-20 right-4 ${isActive ? 'left-4': ''} md:right-12 md:bottom-30 xl:right-1/2 xl:translate-x-1/2 gap-2 `}>  
        {isActive && <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
        className=" p-2 xl:px-12 shadow-md
        cursor-pointer bg-primary-100 rounded-full w-full"
        >
            <div className=" text-primary-700 text-sm flex justify-center items-center h-full  font-bold text-center animate-pulse">
                <span className='hidden md:block mr-1'>Modo de reserva ativo:</span> Selecione os itens para reservar
            </div>
        </MotionDiv>
        } 
        <MotionDiv
        key={isActive? 'on': 'off'}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5, bounce: 0.4, type: 'spring' }}
        >
            <Card 
            onClick={onClick} 
            className={`rounded-full cursor-pointer hover:brightness-110 duration-200  
            p-2 xl:px-12 border-0 right-0 shadow-2xl h-full
            ${isActive ? 'bg-linear-to-bl to-red-500 from-red-300 ' : 'bg-linear-to-bl to-primary-500 from-secondary-500'}`}
            >
                {isActive ? (
                    <div className="flex items-center text-white gap-2 py-2">
                        <X className='size-6'/>
                        <span className="font-bold pr-2">Cancelar</span>
                    </div>
                ) : (
                    <div className="flex items-center text-white gap-2 py-2">
                        <Bookmark className='size-6'/>
                        <span className="font-bold pr-2">Reservar Itens</span>
                    </div>
                )}
            </Card>
        </MotionDiv>    
    </div>
  )
}