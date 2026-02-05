import { Suspense } from 'react'
import AvatarBannerDataLoader from './_features/AvatarBannerDataLoader'
import AvatarBannerSkeleton from './_features/AvatarBannerSkeleton'
import AccountButtonsContainer from './_features/AccountButtonsContainer'
import AppDetails from './_features/AppDetails'

export default function AccountPage() {
  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
      <Suspense fallback={<AvatarBannerSkeleton />}>
        <AvatarBannerDataLoader />
      </Suspense>
      <AccountButtonsContainer />
      <AppDetails />
    </div>
  )
}

