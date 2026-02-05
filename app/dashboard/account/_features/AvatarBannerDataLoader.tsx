import { getCurrentUserAction } from '@/actions/profiles'
import { getCurrentSubscriptionAction } from '@/actions/subscriptions'
import AvatarBanner from './AvatarBanner'

export default async function AvatarBannerDataLoader() {
    const user = await getCurrentUserAction()
    const subscription = await getCurrentSubscriptionAction()

    return <AvatarBanner user={user.data} subscription={subscription.data} />
}
