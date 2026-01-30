
import { headers } from 'next/headers'
import SubscriptionsContainer from './_features/SubscriptionsContainer'
import { getCurrentSubscriptionAction, getPlansAction } from '@/actions/subscriptions'

export default async function SubscriptionsPage() {

    const subscription = await getCurrentSubscriptionAction()
    const plans = await getPlansAction()

    const headersList = await headers();
    const country = headersList.get('x-vercel-ip-country') || 'US';

    return (
        <SubscriptionsContainer
            subscription={subscription?.data ?? null}
            plans={plans?.data || []}
            country={country}
        />
    )
}
