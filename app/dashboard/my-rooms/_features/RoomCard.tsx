import { MotionDiv } from '@/components/Motion/Motion'
import { Card } from '@/components/ui/card'
import { Room } from '@/types/entities'
import { Database } from '@/types/supabase'
import { ChevronRight, UsersRound } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

type RoomCardProps = {
  room: Room
  delay: number
}

export default function RoomCard({ room, delay }: RoomCardProps) {

  return (
    <MotionDiv
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.5, bounce: 0.4, type: 'spring' }}
      className='w-full'>
      <Link href={`/dashboard/my-rooms/${room.slug}`} className='w-full'>
        <Card className='w-full p-2 flex flex-row items-center justify-between gap-2 md:hover:bg-gray-100 dark:md:hover:bg-gray-900 duration-200 border-gray-300 dark:border-gray-700'>
          <div className='flex justify-center items-center gap-4 w-9/10'>
            <Image
              src={`/room_icons/icon${room.cover_theme}.webp`}
              alt="Room Avatar"
              width={70}
              height={70}
              className="rounded-lg p-2 aspect-square outline-1 outline-primary-300 bg-linear-to-tr from-secondary-100 to-primary-100 dark:to-secondary-900! dark:from-primary-900!"
            />
            <div className='min-w-0 flex-1'>
              <h2 className='text-lg md:text-xl font-semibold whitespace-nowrap text-ellipsis min-w-0 overflow-hidden dark:text-white'>{room.name}</h2>
              <div className='flex items-center gap-1 justify-start text-gray-500 dark:text-gray-400'>
                <UsersRound className='size-4' />
                <p className=''>{room.room_members[0].count} membro(s)</p>
              </div>
            </div>
          </div>
          <div>
            <ChevronRight className='size-5 dark:text-white' />
          </div>
        </Card>
      </Link>
    </MotionDiv>
  )
}
