import { GenderOptions } from "@/types/entities";
import z from "zod";

export const firstStepRegisterProfileSchema = z.object({
  full_name: z.string().min(5, "O nome deve ter no mínimo 5 caracteres").max(200, "O nome deve ter no máximo 200 caracteres"),
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").max(50, "A senha deve ter no máximo 200 caracteres"),
  confirm_password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres").max(50, "A senha deve ter no máximo 200 caracteres"),
}).refine((data) => data.password === data.confirm_password, {
  message: "As senhas não coincidem",
  path: ['confirm_password']
});

export const secondStepRegisterProfileSchema = z.object({
  username: z.string().min(3, "O nome de usuário deve ter no mínimo 3 caracteres").max(200, "O nome de usuário deve ter no máximo 200 caracteres"),
  birthday: z.string("Data de nascimento inválida").refine((data) => new Date(data).getTime() < new Date().getTime(), {
    message: "A data de nascimento deve ser menor que a data atual",
  }).nullable(),
  gender: z.enum(GenderOptions, { message: "O gênero deve ser selecionado" })
})

export const registerProfileSchema = firstStepRegisterProfileSchema.merge(secondStepRegisterProfileSchema);

export const editProfileSchema = z.object({
  full_name: z.string().min(5, "O nome deve ter no mínimo 5 caracteres").max(200, "O nome deve ter no máximo 200 caracteres"),
  username: z.string().min(3, "O nome de usuário deve ter no mínimo 3 caracteres").max(200, "O nome de usuário deve ter no máximo 200 caracteres"),
  birthday: z.string("Data de nascimento inválida").refine((data) => new Date(data).getTime() < new Date().getTime(), {
    message: "A data de nascimento deve ser menor que a data atual",
  }).nullable(),
  gender: z.enum(GenderOptions, { message: "O gênero deve ser selecionado" })
});

export type RegisterProfileSchema = z.infer<typeof registerProfileSchema>;
export type EditProfileSchema = z.infer<typeof editProfileSchema>;

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginSchema = z.infer<typeof loginSchema>;