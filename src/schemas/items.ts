import z from "zod";

export const getRegisterOrEditItemSchema = (t: any) => z.object({
    name: z.string().min(3, t('nameInput.minLength')).max(100, t('nameInput.maxLength')),
    price: z.number().min(0, t('priceInput.lowerThan')).max(999999, t('priceInput.greaterThan')),
    priority: z.number().min(1, t('priorityInput.error')).max(3, t('priorityInput.error')),
    notes: z.string().max(500, t('notesInput.maxLength')),
    link: z.string().url(t('linkInput.invalid')).max(1000, t('linkInput.maxLength')),
})

export type RegisterOrEditItemSchema = z.infer<ReturnType<typeof getRegisterOrEditItemSchema>>

