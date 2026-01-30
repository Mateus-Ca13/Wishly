'use client'
import Button from '@/components/Button/Button'
import Input from '@/components/Input/Input'
import Select from '@/components/Select/Select'
import TextArea from '@/components/TextArea/TextArea'
import { getRegisterOrEditItemSchema, RegisterOrEditItemSchema } from '@/schemas/items'
import { ItemWithoutReservation } from '@/types/entities'
import { formatPrice } from '@/utils/format'
import { zodResolver } from '@hookform/resolvers/zod'
import { ChevronDown, Heart, ThumbsUp } from 'lucide-react'
import { useForm } from 'react-hook-form'
import { useTranslations } from 'next-intl'

type EditItemFormProps = {
    item: ItemWithoutReservation | null
    onConfirm: { edit: (itemId: number | null | undefined, item: RegisterOrEditItemSchema) => void, create: (item: RegisterOrEditItemSchema) => void }
    mode: 'edit' | 'create'
}

export default function EditItemForm({ item, onConfirm, mode }: EditItemFormProps) {
    const t = useTranslations('Dashboard.MyWishlist.Drawer')
    const tUtils = useTranslations('Dashboard.Utils')

    const priorities = [
        { label: <div className='flex items-center gap-2 text-gray-800 dark:text-gray-300'><ChevronDown className="size-4" />{t('priorityInput.1')}</div>, value: '1' },
        { label: <div className='flex items-center gap-2 text-green-800 dark:text-green-500'><ThumbsUp className="size-4" />{t('priorityInput.2')}</div>, value: '2' },
        { label: <div className='flex items-center gap-2 text-green-600 dark:text-green-300'><Heart className="size-4" />{t('priorityInput.3')}</div>, value: '3' }
    ]


    const defaultValue = priorities.find((priority) => priority.value === item?.priority?.toString()) || priorities[0]

    const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<RegisterOrEditItemSchema>({
        resolver: zodResolver(getRegisterOrEditItemSchema(t)),
        defaultValues: {
            name: item?.name || '',
            price: item?.price || 0,
            priority: item?.priority || 1,
            notes: item?.notes || '',
            link: item?.link || ''
        }
    })

    const price = watch('price')

    const onSubmit = (data: RegisterOrEditItemSchema) => {
        if (mode === 'edit') {
            onConfirm.edit(item?.id, data)
        } else {
            onConfirm.create(data)
        }
    }

    const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
        let digits = e.target.value.replace(/\D/g, "");
        digits = digits.padStart(3, "0");
        const value = digits.replace(/(\d+)(\d{2})$/, "$1.$2");
        setValue('price', Number(value))
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-2 w-full'>
            <Input
                {...register('name')}
                name="name"
                label={t('nameInput.label')}
                variant='secondary'
                placeholder={t('nameInput.placeholder')}
                error={errors.name?.message}
                required
            />
            <div className='w-full flex flex-col gap-2 relative'>
                <Input
                    {...register('link')}
                    name="link"
                    label={t('linkInput.label')}
                    variant='secondary'
                    placeholder={t('linkInput.placeholder')}
                    error={errors.link?.message}

                />
            </div>
            <Input
                startIcon={<span className="text-lg md:text-xl text-gray-500">{tUtils('currency')}</span>}
                onChange={onChangePrice}
                value={formatPrice(price)}
                name="price"
                label={t('priceInput.label')}
                variant='secondary'
                placeholder={t('priceInput.placeholder')}
                error={errors.price?.message}
                required
            />
            <TextArea
                {...register('notes')}
                name="notes"
                className='resize-none h-26'
                label={t('notesInput.label')}
                variant='secondary'
                placeholder={t('notesInput.placeholder')}
                error={errors.notes?.message}
            />
            <Select
                values={priorities}
                defaultValue={defaultValue}
                onChange={(value) => setValue('priority', Number(value))}
                placeholder={t('priorityInput.label')}
                variant='secondary'
                error={errors.priority?.message}
            />
            <Button type="submit" variant='contained' className='w-full rounded-full py-4 mb-4 mt-8'>{t('submitButton')}</Button>
        </form>
    )
}

