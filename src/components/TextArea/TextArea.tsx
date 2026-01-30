import React from 'react'
import { Label } from '../ui/label'
import { Textarea as CnTextarea } from '../ui/textarea'

type TextAreaProps = {
    placeholder?: string
    label?: string
    name?: string
    variant?: 'default' | 'secondary'
    required?: boolean
    error?: string
    className?: string
    onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
} & React.ComponentPropsWithoutRef<'textarea'>

export default function TextArea({ placeholder = '', variant = 'default', label, name = 'textarea-id', required = false, error, onChange, className, ...props }: TextAreaProps) {

    const variantClasses = {
        default: 'bg-white border border-gray-300 focus:border-primary-100 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white',
        secondary: 'bg-gray-100 border border-gray-200 focus:border-primary-100 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white',
    }

    return (
        <div className="w-full items-center grid gap-2">
            {label && <Label className='text-lg md:text-xl dark:text-primary-100 font-semibold' htmlFor={name}>{label}</Label>}
            <CnTextarea required={required} id={name} placeholder={placeholder} onChange={onChange} className={`text-lg md:text-xl ${variantClasses[variant]} ${className}`} name={name} {...props} />
            {error && <span className="text-sm md:text-base text-red-500 text-start mb-1">{error}</span>}
        </div>
    )
}
