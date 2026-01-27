import z from "zod";

export const registerOrEditItemSchema = z.object({
    name: z.string().min(3, 'Nome deve ter pelo menos 3 caracteres').max(100, 'Nome deve ter no máximo 100 caracteres'),
    price: z.number().min(0, 'Preço deve ser maior ou igual a 0').max(999999, 'Preço deve ser menor ou igual a 999.999'),
    priority: z.number().min(1, 'Prioridade deve ser maior ou igual a 1').max(3, 'Prioridade deve ser menor ou igual a 3'),
    notes: z.string().max(500, 'Observações deve ter no máximo 500 caracteres'),
    link: z.string().url('URL inválida').max(1000, 'URL deve ter no máximo 1000 caracteres'),
})

export type RegisterOrEditItemSchema = z.infer<typeof registerOrEditItemSchema>
