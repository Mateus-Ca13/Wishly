import { Suspense } from 'react'
import WishlistDataLoader from './_features/WishlistDataLoader'
import CardsListSkeleton from '@/components/CardsListSkeleton/CardsListSkeleton'

export default function MyWishlistPage() {
  return (
    <Suspense fallback={<CardsListSkeleton />}>
      <WishlistDataLoader />
    </Suspense>
  )
}

