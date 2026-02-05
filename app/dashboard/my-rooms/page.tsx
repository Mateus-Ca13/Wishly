import { Suspense } from 'react'
import RoomsDataLoader from './_features/RoomsDataLoader'
import CardsListSkeleton from '@/components/CardsListSkeleton/CardsListSkeleton'

export default function RoomsPage() {
  return (
    <div>
      <Suspense fallback={<CardsListSkeleton />}>
        <RoomsDataLoader />
      </Suspense>
    </div>
  )
}
