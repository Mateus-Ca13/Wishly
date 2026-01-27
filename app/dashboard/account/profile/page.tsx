import { getCurrentUserAction } from "@/actions/profiles";
import ProfileForm from "./_features/ProfileForm";

export default async function ProfilePage() {
    const user = await getCurrentUserAction()
    return (
        <div>
            <ProfileForm user={user.data} />
        </div>
    )
}
