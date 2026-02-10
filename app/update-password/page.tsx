import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import UpdatePasswordWrapper from "./_features/UpdatePasswordWrapper";

export default async function UpdatePasswordPage() {
    const cookieStore = await cookies()

    const hasPermission = cookieStore.get('can_reset_password')

    // Se token expirou ou não existe, redireciona para o dashboard
    if (!hasPermission) {
        redirect('/dashboard')
    }
    return (
        <section className="min-h-screen w-full flex flex-col items-center justify-center bg-linear-to-tr from-primary-500 to-secondary-500">
            <UpdatePasswordWrapper />
        </section>
    )
}
