import { CnInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

type InputProps = {
  type?: 'email' | 'password' | 'text' | 'number' | 'tel' | 'url' | 'search'
  placeholder?: string
  label?: string
  name?: string
  variant?: 'default' | 'secondary'
  required?: boolean
  error?: string
  className?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & React.ComponentPropsWithoutRef<'input'>



export default function Input ({ type = 'text', placeholder = '', variant = 'default', label, name = 'input-id', required = false, error, onChange, className, ...props }: InputProps) {

    const variantClasses = {
    default: 'bg-white border border-gray-300 focus:border-primary-100 focus:ring-primary-100',
    secondary: 'bg-gray-100 border border-gray-200 focus:border-primary-100 focus:ring-primary-100',
  }

  return (
    <div className="w-full items-center grid gap-2">
      {label && <Label className='text-lg md:text-xl' htmlFor={name}>{label}</Label>}
      <CnInput required={required} type={type} id={name} placeholder={placeholder} onChange={onChange} className={`text-lg md:text-xl ${variantClasses[variant]} ${className}`} name={name} {...props} />
        {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
