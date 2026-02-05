import { Suspense } from 'react'
import ProfileDataLoader from './_features/ProfileDataLoader'
import Loading from './loading'

export default function ProfilePage() {
    return (
        <Suspense fallback={<Loading />}>
            <ProfileDataLoader />
        </Suspense>
    )
}

