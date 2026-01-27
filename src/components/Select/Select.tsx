import {
    Select as CnSelect, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select"
import { Label } from "../ui/label"

interface SelectProps {
    values: { label: React.ReactNode, value: string }[]
    placeholder?: string
    defaultValue?: { label: React.ReactNode, value: string }
    variant?: 'default' | 'secondary'
    error?: string
    onChange: (value: string) => void
}

export default function Select({ values, defaultValue, onChange, placeholder, variant = 'default', error }: SelectProps) {

    const variantClasses = {
        default: 'bg-white border border-gray-300 focus:border-primary-100 focus:ring-primary-100',
        secondary: 'bg-gray-100 border border-gray-200 focus:border-primary-100 focus:ring-primary-100',
    }

    return (
        <div className="w-full">
            {placeholder && <Label className='text-lg md:text-xl' htmlFor="select">{placeholder}</Label>}
            <CnSelect defaultValue={defaultValue?.value} onValueChange={(value) => onChange(value)}>
                <SelectTrigger className={`w-full bg-white mt-2 text-lg md:text-xl ${variantClasses[variant]}`}>
                    <SelectValue placeholder={defaultValue?.label} />
                </SelectTrigger>
                <SelectContent className="w-full bg-white text-lg md:text-xl">
                    {values.map((value) => (
                        <SelectItem key={value.value} value={value.value}>
                            {value.label}
                        </SelectItem>
                    ))}
                </SelectContent>
            </CnSelect>
            {error && <span className="text-sm md:text-base text-red-500 text-start mb-1">{error}</span>}
        </div>
    )
}
