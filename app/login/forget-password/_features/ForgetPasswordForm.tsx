'use client'
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import Input from '@/components/Input/Input';
import { CnButton } from '@/components/ui/button';
import { LoaderCircle, ArrowLeft } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { ForgetPasswordSchema, getForgetPasswordSchema } from '@/schemas/auth';
import { authForgetPasswordAction } from '@/actions/auth';
import { toast } from 'sonner';

interface Props {
    setFormStep: (step: 'forgetPassword' | 'finished') => void;
}

export default function ForgetPasswordForm({ setFormStep }: Props) {
    const t = useTranslations('Dashboard.Profile.Form');
    const tAuth = useTranslations('Dashboard.ForgetPassword');

    const { handleSubmit, formState: { errors, isSubmitting }, register } = useForm<ForgetPasswordSchema>({
        resolver: zodResolver(getForgetPasswordSchema(t))
    });

    const onSubmitForm = async (data: ForgetPasswordSchema) => {
        const response = await authForgetPasswordAction(data);
        if (response.success) {
            setFormStep('finished');
        } else {
            toast.error(response.message);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmitForm)} className='gap-4 grid w-full'>
            <Input
                {...register('email')}
                error={errors.email?.message}
                name="email"
                label={tAuth('EmailInput.label')}
                type="email"
            />

            <CnButton
                type="submit"
                className='cursor-pointer flex items-center justify-center text-lg md:text-xl mt-4 w-full bg-linear-to-tr to-secondary-300 from-primary-300 text-black-custom hover:saturate-150 duration-200'>
                {isSubmitting ? <LoaderCircle className='animate-spin' /> : tAuth('submitButton')}
            </CnButton>

            <Link
                href="/login"
                className='flex items-center justify-center gap-2 text-center mt-2 text-primary-700 dark:text-primary-300 hover:underline'>
                <ArrowLeft className='size-4' />
                {tAuth('backToLogin')}
            </Link>
        </form>
    )
}
