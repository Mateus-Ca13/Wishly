import React from 'react'
import { getCurrentUserAction } from '@/actions/profiles'
import AvatarBanner from './_features/AvatarBanner'
import AccountButtonsContainer from './_features/AccountButtonsContainer'
import { getCurrentSubscriptionAction } from '@/actions/subscriptions'
import AppDetails from './_features/AppDetails'

export default async function AccountPage() {

  const user = await getCurrentUserAction()
  const subscription = await getCurrentSubscriptionAction()

  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
      <AvatarBanner user={user.data} subscription={subscription.data} />
      <AccountButtonsContainer />
      <AppDetails />
    </div>
  )
}
