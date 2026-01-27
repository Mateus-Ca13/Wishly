import { GenderOptions } from "@/types/entities";
import z from "zod";

export const registerProfileSchema = z.object({
  full_name: z.string().min(5, "O nome deve ter no mínimo 5 caracteres"),
  username: z.string().min(3, "O nome de usuário deve ter no mínimo 3 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  confirm_password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
  birthday: z.string().refine((data) => new Date(data).getTime() < new Date().getTime(), {
    message: "A data de nascimento deve ser menor que a data atual",
  }).nullable(),
  gender: z.enum(GenderOptions)
}).refine((data) => data.password === data.confirm_password, {
  message: "As senhas não coincidem",
});

export const editProfileSchema = z.object({
  full_name: z.string().min(5, "O nome deve ter no mínimo 5 caracteres"),
  username: z.string().min(3, "O nome de usuário deve ter no mínimo 3 caracteres"),
  birthday: z.string().refine((data) => new Date(data).getTime() < new Date().getTime(), {
    message: "A data de nascimento deve ser menor que a data atual",
  }).nullable(),
  gender: z.enum(GenderOptions)
});

export type RegisterProfileSchema = z.infer<typeof registerProfileSchema>;
export type EditProfileSchema = z.infer<typeof editProfileSchema>;

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginSchema = z.infer<typeof loginSchema>;