import { authLoginAction, authLogoutAction, authRegisterAction } from "@/actions/auth"
import { LoginSchema, RegisterProfileSchema } from "@/schemas/auth"
import { toast } from "sonner"

function useAuth() {


    async function handleLogout() {
        await authLogoutAction()
    }

    async function handleLogin(userData: LoginSchema) {
        const response = await authLoginAction(userData)

        if (!response.success) {
            toast.error(response.message)
        }
    }

    async function handleRegister(userData: RegisterProfileSchema) {
        const response = await authRegisterAction(userData)

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