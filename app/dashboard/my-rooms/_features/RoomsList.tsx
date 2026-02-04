'use client'
import { LoaderCircle, PartyPopper, SearchX } from 'lucide-react'
import RoomCard from './RoomCard'
import Input from '@/components/Input/Input'
import { MotionDiv } from '@/components/Motion/Motion'
import { Room } from '@/types/entities'
import { useTranslations } from 'next-intl'

type RoomsListProps = {
  search: string
  setSearch: (search: string) => void
  isLoading: boolean
  rooms: { rooms: Room[], count: number }
}

export default function RoomsList({ search, setSearch, isLoading, rooms }: RoomsListProps) {
  const t = useTranslations('Dashboard.MyRooms');

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, bounce: 0.4, type: 'spring' }}
      className='w-full flex flex-col gap-2'>

      <Input
        className='w-full mb-2'
        variant='secondary'
        name='search-room'
        placeholder={t('searchPlaceholder')}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {isLoading ? (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-500 animate-pulse'>
          <LoaderCircle className='size-10 animate-spin mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>{t('ListResponses.loading')}</p>
        </div>
      ) : rooms.rooms.length > 0 ? (
        <div className='w-full flex flex-col gap-2'>
          {rooms.rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} delay={index * 0.1} />
          ))}
        </div>
      ) : rooms.count > 0 ? (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
          <SearchX className='size-10 mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>{t('ListResponses.emptyState')}</p>
          <p className='text-sm md:text-base'>{t('ListResponses.emptyStateDescription')}</p>
        </div>

      ) : (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
          <PartyPopper className='size-10 mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>Seja bem-vindo(a)!</p>
          <p className='text-sm md:text-base'>Crie um novo grupo ou aceite convites de seus amigos para começar!</p>
        </div>
      )}
    </MotionDiv>
  )
}

