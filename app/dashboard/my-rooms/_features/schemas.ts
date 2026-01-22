import z from "zod";

export const registerRoomSchema = z.object({
  name: z.string("O nome da sala deve ser um texto").min(3, "O nome da sala deve ter no mínimo 3 caracteres"),
  description: z.string("A descrição deve ser um texto").optional(),
  icon: z.number("Valor de ícone inválido")
});

export type RegisterRoomSchema = z.infer<typeof registerRoomSchema>;