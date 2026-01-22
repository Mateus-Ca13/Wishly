'use client'
import { LoaderCircle, SearchX } from 'lucide-react'
import React, { useEffect } from 'react'
import RoomCard from './RoomCard'
import Input from '@/components/Input/Input'
import { getRoomsAction } from '../../../../src/actions/rooms'
import { MotionDiv } from '@/components/Motion/Motion'

export default function RoomsList() {

    const [rooms, setRooms] = React.useState<any[]>([])
    const [search, setSearch] = React.useState('')
    const [isLoading, setIsLoading] = React.useState(true)

    useEffect(()=>{
        const fetchRoomsData = async () => {
        setIsLoading(true)
        const response = await getRoomsAction(search)
        
        if (response.success) {
            setRooms(response.data || [])
        } else {
            setRooms([])
        }
        setIsLoading(false)
    }

    const delayDebounceFn = setTimeout(() => {
      fetchRoomsData()
    }, 500)

    return () => clearTimeout(delayDebounceFn)
  }, [search])

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5, duration: 0.5, bounce: 0.4, type: 'spring' }}
      className='w-full flex flex-col gap-2'>

    <Input className='w-full mb-2' variant='secondary' name='search-room' placeholder='Buscar grupos...' onChange={(e)=>setSearch(e.target.value)} />
      
      {isLoading ? (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-500 animate-pulse'>
          <LoaderCircle className='size-10 animate-spin mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>Carregando seus grupos...</p>
        </div>
      ) : rooms.length > 0 ? (
        <div className='w-full flex flex-col gap-2'>
          {rooms.map((room, index) => (
            <RoomCard key={room.id} room={room} delay={index * 0.1} />
          ))}
        </div>
      ) : (
        <div className='flex flex-col mx-8 text-center items-center justify-center py-12 text-gray-400'>
          <SearchX className='size-10 mb-2 text-primary-500' />
          <p className='text-xl font-semibold'>Nenhum grupo encontrado</p>
          <p className='text-sm'>Tente buscar por outro nome ou crie um novo grupo.</p>
        </div>
        
      )}
    </MotionDiv>
  )
}
