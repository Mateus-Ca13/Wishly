
import SubscriptionsContainer from './_features/SubscriptionsContainer'
import { getCurrentSubscriptionAction, getPlansAction } from '@/actions/subscriptions'

export default async function SubscriptionsPage() {

    const subscription = await getCurrentSubscriptionAction()
    const plans = await getPlansAction()

    return (
        <SubscriptionsContainer
            subscription={subscription?.data ?? null}
            plans={plans?.data || []}
        />
    )
}
