import { authChangePasswordAction, authDeleteAccountAction, authLoginAction, authLogoutAction, authRegisterAction } from "@/actions/auth"
import { ChangePasswordSchema, LoginSchema, RegisterProfileSchema } from "@/schemas/auth"
import { useState } from "react"
import { toast } from "sonner"

interface UseAuthProps {
    nextUrl?: string
}

function useAuth({ nextUrl = '/dashboard/my-rooms' }: UseAuthProps) {

    const [isDeleteAccountDialogOpen, setIsDeleteAccountDialogOpen] = useState(false)
    const [isDeletingAccount, setIsDeletingAccount] = useState(false)
    const [isChangePasswordDialogOpen, setIsChangePasswordDialogOpen] = useState(false)
    const [isChangingPassword, setIsChangingPassword] = useState(false)

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

    async function handleDeleteAccount(confirmUsername: string) {
        setIsDeletingAccount(true)
        try {
            const response = await authDeleteAccountAction(confirmUsername)

            if (!response.success) {
                toast.error(response.message)
            }
        } catch {
            // redirect throws, so we catch it here
        } finally {
            setIsDeletingAccount(false)
        }
    }

    async function handleChangePassword(data: ChangePasswordSchema) {
        setIsChangingPassword(true)
        try {
            const response = await authChangePasswordAction(data)

            if (response.success) {
                toast.success(response.message)
                closeChangePasswordDialog()
            } else {
                toast.error(response.message)
            }
        } finally {
            setIsChangingPassword(false)
        }
    }

    function openDeleteAccountDialog() {
        setIsDeleteAccountDialogOpen(true)
    }

    function closeDeleteAccountDialog() {
        setIsDeleteAccountDialogOpen(false)
    }

    function openChangePasswordDialog() {
        setIsChangePasswordDialogOpen(true)
    }

    function closeChangePasswordDialog() {
        setIsChangePasswordDialogOpen(false)
    }

    return {
        handleLogout,
        handleLogin,
        handleRegister,
        handleDeleteAccount,
        handleChangePassword,
        isDeleteAccountDialogOpen,
        isDeletingAccount,
        isChangePasswordDialogOpen,
        isChangingPassword,
        openDeleteAccountDialog,
        closeDeleteAccountDialog,
        openChangePasswordDialog,
        closeChangePasswordDialog,
    }

}

export default useAuth