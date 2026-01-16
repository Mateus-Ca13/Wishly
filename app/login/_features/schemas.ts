import z from "zod";

export const registerSchema = z.object({
  name: z.string().min(5, "O nome deve ter no mínimo 5 caracteres"),
  username: z.string().min(3, "O nome de usuário deve ter no mínimo 3 caracteres"),
  email: z.string("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type RegisterSchema = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "A senha deve ter no mínimo 6 caracteres"),
});

export type LoginSchema = z.infer<typeof loginSchema>;