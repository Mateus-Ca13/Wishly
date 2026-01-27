import z from "zod";

export const registerOrEditRoomSchema = z.object({
  name: z.string("O nome da sala deve ser um texto").min(3, "O nome da sala deve ter no mínimo 3 caracteres").max(100, "O nome da sala deve ter no máximo 100 caracteres"),
  description: z.string("A descrição deve ser um texto").max(300, "A descrição deve ter no máximo 300 caracteres").optional(),
  icon: z.number("Valor de ícone inválido").min(1, "Valor de ícone inválido").max(10, "Valor de ícone inválido")
});

export type RegisterOrEditRoomSchema = z.infer<typeof registerOrEditRoomSchema>;