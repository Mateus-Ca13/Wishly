import { GenderOptions } from "@/types/entities";
import z from "zod";

export const getFirstStepRegisterProfileSchema = (t: any) => z.object({
  full_name: z.string().min(5, t('NameInput.minLength')).max(200, t('NameInput.maxLength')).trim(),
  email: z.string().email(t('EmailInput.invalidEmailError')).trim(),
  password: z.string().min(6, t('PasswordInput.minLength')).max(50, t('PasswordInput.maxLength')),
  confirm_password: z.string().min(6, t('ConfirmPasswordInput.minLength')).max(50, t('ConfirmPasswordInput.maxLength')),
}).refine((data) => data.password === data.confirm_password, {
  message: t('ConfirmPasswordInput.matchError'),
  path: ['confirm_password']
});

export const getSecondStepRegisterProfileSchema = (t: any) => z.object({
  username: z.string().min(3, t('UsernameInput.minLength')).max(200, t('UsernameInput.maxLength')).trim(),
  birthday: z.string(t('BirthdayInput.invalidDateError')).refine((data) => new Date(data).getTime() < new Date().getTime(), {
    message: t('BirthdayInput.futureDateError'),
  }).nullable(),
  gender: z.enum(GenderOptions, { message: t('GenderInput.error') })
})

export const getRegisterProfileSchema = (t: any) => getFirstStepRegisterProfileSchema(t).and(getSecondStepRegisterProfileSchema(t));

export const getEditProfileSchema = (t: any) => z.object({
  full_name: z.string().min(5, t('NameInput.minLength')).max(200, t('NameInput.maxLength')).trim(),
  username: z.string().min(3, t('UsernameInput.minLength')).max(200, t('UsernameInput.maxLength')).trim(),
  birthday: z.string(t('BirthdayInput.invalidDateError')).refine((data) => new Date(data).getTime() < new Date().getTime(), {
    message: t('BirthdayInput.futureDateError'),
  }).nullable(),
  gender: z.enum(GenderOptions, { message: t('GenderInput.error') })
});


export type RegisterProfileSchema = z.infer<ReturnType<typeof getRegisterProfileSchema>>;
export type EditProfileSchema = z.infer<ReturnType<typeof getEditProfileSchema>>;

export const getLoginSchema = (t: any) => z.object({
  email: z.string().email(t('EmailInput.invalidEmailError')).trim(),
  password: z.string().min(6, t('PasswordInput.minLength')),
});

export type LoginSchema = z.infer<ReturnType<typeof getLoginSchema>>;

export const getForgetPasswordSchema = (t: any) => z.object({
  email: z.string().email(t('EmailInput.invalidEmailError')).trim(),
});

export const getResetPasswordSchema = (t: any) => z.object({
  password: z.string().min(6, t('PasswordInput.minLength')),
  confirm_password: z.string().min(6, t('ConfirmPasswordInput.minLength')),
}).refine((data) => data.password === data.confirm_password, {
  message: t('ConfirmPasswordInput.matchError'),
  path: ['confirm_password']
});

export type ResetPasswordSchema = z.infer<ReturnType<typeof getResetPasswordSchema>>;
export type ForgetPasswordSchema = z.infer<ReturnType<typeof getForgetPasswordSchema>>;

