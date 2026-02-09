import z from "zod";

export const getRegisterOrEditRoomSchema = (t: any) => z.object({
  name: z.string(t('nameInput.textError')).min(3, t('nameInput.minLength')).max(100, t('nameInput.maxLength')).trim(),
  description: z.string(t('descriptionInput.textError')).max(300, t('descriptionInput.maxLength')).trim().optional(),
  icon: z.number(t('iconInput.invalid')).min(1, t('iconInput.invalid')).max(10, t('iconInput.invalid'))
});

export const getRoomApprovalSchema = (t: any) => z.object({
  requiresApproval: z.boolean(t('joinRuleError'))
});

export type RoomApprovalSchema = z.infer<ReturnType<typeof getRoomApprovalSchema>>;
export type RegisterOrEditRoomSchema = z.infer<ReturnType<typeof getRegisterOrEditRoomSchema>>;
