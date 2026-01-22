import { MotionDiv } from '@/components/Motion/Motion'
import { Card } from '@/components/ui/card'
import { Database } from '@/types/supabase'
import { formatPrice, formatPriority } from '@/utils/format'
import { ChevronRight } from 'lucide-react'
import { prioritiesMap } from './utils'
import { Separator } from '@radix-ui/react-separator'
// Imports de tipos...

type ItemCardWithReservationProps = {
  item: Database['public']['Tables']['items']['Row'] & {
    reservations: Database['public']['Tables']['reservations']['Row'][] | null
  }
  delay: number
  isReservationMode: boolean
  onItemClick: (item: any) => void
}

export default function ItemCardWithReservation({ item, delay, isReservationMode, onItemClick }: ItemCardWithReservationProps) {
  
  const PriorityIcon = prioritiesMap[item.priority].el;
  const isAlreadyReserved = item.reservations === null ? false : true;

  return (
      <MotionDiv
         initial={{ opacity: 0, y: 20 }}
         animate={{ opacity: 1, y: 0 }}
         transition={{ delay, duration: 0.5 }}
         className='w-full'
      >
        <div onClick={()=>onItemClick(item)} className="cursor-pointer">
           <Card className={`w-full p-2 flex flex-row items-center justify-between py-3 gap-2 hover:bg-gray-100 duration-200 border-gray-300
               ${isReservationMode ? 'hover:border-primary-500 hover:bg-green-50' : 'hover:bg-gray-100'}
           `}>
                <div className='flex ps-2 justify-start items-center gap-4 flex-1 min-w-0'>
                    <div className='min-w-0 flex-1'>
                        <h2 className='text-lg font-semibold truncate max-w-xs md:max-w-3xl'>{item.name}</h2>
                        <div className='flex gap-2 items-center text-gray-500 text-sm md:text-base'>
                          <span className={`${prioritiesMap[item.priority].color} flex items-center h-full gap-1 -ms-1 py-1`}>
                            {<PriorityIcon className='size-3.5'/>}
                            <p className='truncate'>{formatPriority(item.priority)}</p>
                          </span>
                          <Separator orientation="vertical" className="h-4 bg-gray-200 w-px"  />
                          <span className=' truncate'>{formatPrice(item.price)}</span>
                        </div>
                    </div>
                </div>
                {isAlreadyReserved && <div className='border-green-700 bg-green-200 text-center text-green-700 py-1 px-4 rounded-lg text-sm md:text-base'>
                  Reservado  
                </div>}
                <div>
                    {!isReservationMode? <ChevronRight className='size-5' />:  <></> }
                </div>
           </Card>
        </div>
    </MotionDiv>
  )
}