import React from 'react'
import { getCurrentUserAction } from '@/actions/profiles'
import AvatarBanner from './_features/AvatarBanner'
import AccountButtonsContainer from './_features/AccountButtonsContainer'
import { getSubscriptionAction } from '@/actions/subscriptions'

export default async function AccountPage() {

  const user = await getCurrentUserAction()
  const subscription = await getSubscriptionAction()

  return (
    <div className='w-full flex flex-col items-center justify-center gap-4'>
      <AvatarBanner user={user.data} subscription={subscription.data} />
      <AccountButtonsContainer />
    </div>
  )
}
