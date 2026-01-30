'use client'
import { MotionDiv } from '@/components/Motion/Motion'
import { Card } from '@/components/ui/card'
import { formatPrice } from '@/utils/format'
import { ChevronRight } from 'lucide-react'
import { prioritiesMap } from './utils'
import { Separator } from '@radix-ui/react-separator'
import { Item } from '@/types/entities'
import { useTranslations } from 'next-intl'

type GuestItemCardProps = {
  item: Item
  delay: number
  isReservationMode: boolean
  onItemClick: (item: Item) => void
}

export default function GuestItemCard({ item, delay, isReservationMode, onItemClick }: GuestItemCardProps) {
  const t = useTranslations('Dashboard.MemberWishlist')
  const tUtils = useTranslations('Dashboard.Utils')

  const PriorityIcon = prioritiesMap[item.priority].el;
  const isAlreadyReserved = item.reservations === null ? false : true;

  const priorityLabels: { [key: number]: string } = {
    1: tUtils('priorities.1'),
    2: tUtils('priorities.2'),
    3: tUtils('priorities.3'),
  }

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5 }}
      className='w-full'
    >
      <div onClick={() => onItemClick(item)} className="cursor-pointer">
        <Card className={`w-full p-2 flex flex-row items-center justify-between py-3 gap-2 hover:bg-gray-100 duration-200 border-gray-300 dark:border-gray-700 dark:md:hover:bg-gray-900
               ${isReservationMode ? 'hover:border-primary-500 hover:bg-green-50' : 'hover:bg-gray-100'}
           `}>
          <div className='flex ps-2 justify-start items-center gap-4 flex-1 min-w-0'>
            <div className='min-w-0 flex-1'>
              <h2 className='text-lg font-semibold truncate max-w-xs md:max-w-3xl dark:text-white'>{item.name}</h2>
              <div className='flex gap-2 items-center text-gray-500 text-sm md:text-base'>
                <span className={`${prioritiesMap[item.priority].color} flex items-center h-full gap-1 -ms-1 py-1`}>
                  {<PriorityIcon className='size-3.5' />}
                  <p className='truncate'>{priorityLabels[item.priority]}</p>
                </span>
                <Separator orientation="vertical" className="h-4 bg-gray-200 w-px" />
                <span className=' truncate dark:text-white'>{tUtils('currency')} {formatPrice(item.price)}</span>
              </div>
            </div>
          </div>
          {isAlreadyReserved && <div className='border-green-700 bg-green-200 text-center text-green-700 py-1 px-4 rounded-lg text-sm md:text-base dark:bg-green-800 dark:text-green-200'>
            {t('reservedBadge')}
          </div>}
          <div>
            {!isReservationMode ? <ChevronRight className='size-5 dark:text-white' /> : <></>}
          </div>
        </Card>
      </div>
    </MotionDiv>
  )
}
