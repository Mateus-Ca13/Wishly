'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import { CnButton } from '@/components/ui/button';
import { LoaderCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { ResetPasswordSchema, getResetPasswordSchema } from '@/schemas/auth';
import { authUpdatePasswordAction } from '@/actions/auth';
import { toast } from 'sonner';

export default function UpdatePasswordForm() {
    const tAuth = useTranslations('Dashboard.UpdatePassword');
    const t = useTranslations('Dashboard.Profile.Form');

    const { handleSubmit, formState: { errors, isSubmitting }, register } = useForm<ResetPasswordSchema>({
        resolver: zodResolver(getResetPasswordSchema(t))
    });

    const onSubmitForm = async (data: ResetPasswordSchema) => {
        const response = await authUpdatePasswordAction(data);
        if (!response.success) {
            toast.error(response.message);
            return;
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className='gap-4 grid w-full'>
            <Input
                {...register('password')}
                error={errors.password?.message}
                name="password"
                label={t('PasswordInput.label')}
                type="password"
            />

            <Input
                {...register('confirm_password')}
                error={errors.confirm_password?.message}
                name="confirm_password"
                label={t('ConfirmPasswordInput.label')}
                type="password"
            />

            <CnButton
                type="submit"
                className='cursor-pointer flex items-center justify-center text-lg md:text-xl mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
                {isSubmitting ? <LoaderCircle className='animate-spin' /> : tAuth('submitButton')}
            </CnButton>

        </form>
    )
}
