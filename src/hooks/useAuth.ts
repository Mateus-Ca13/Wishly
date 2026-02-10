import { authLoginAction, authLogoutAction, authRegisterAction } from "@/actions/auth"
import { LoginSchema, RegisterProfileSchema } from "@/schemas/auth"
import { toast } from "sonner"

interface UseAuthProps {
    nextUrl?: string
}

function useAuth({ nextUrl = '/dashboard/my-rooms' }: UseAuthProps) {


    async function handleLogout() {
        await authLogoutAction()
    }

    async function handleLogin(userData: LoginSchema) {
        const response = await authLoginAction(userData, nextUrl)

        if (!response.success) {
            toast.error(response.message)
        }
    }

    async function handleRegister(userData: RegisterProfileSchema) {
        const response = await authRegisterAction(userData, nextUrl)

        if (!response.success) {
            toast.error(response.message)
        }

    }

    return {
        handleLogout,
        handleLogin,
        handleRegister
    }

}

export default useAuth