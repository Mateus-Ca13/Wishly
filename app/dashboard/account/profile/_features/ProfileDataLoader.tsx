import { getCurrentUserAction } from '@/actions/profiles'
import ProfileForm from './ProfileForm'

export default async function ProfileDataLoader() {
    const user = await getCurrentUserAction()

    return <ProfileForm user={user.data} />
}
