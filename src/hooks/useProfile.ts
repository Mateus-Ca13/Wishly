import { updateProfileAction } from "@/actions/profiles"
import { EditProfileSchema } from "@/schemas/auth"
import { toast } from "sonner"

export function useProfile() {


    async function handleUpdateProfile(profile: EditProfileSchema) {
        const response = await updateProfileAction(profile)

        if (!response.success) {
            toast.error(response.message)
        } else {
            toast.success(response.message)
        }
    }

    return { handleUpdateProfile }
}