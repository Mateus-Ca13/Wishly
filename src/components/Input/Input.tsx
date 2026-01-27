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
  startIcon?: React.ReactNode
  endIcon?: React.ReactNode
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
} & React.ComponentPropsWithoutRef<'input'>



export default function Input({ type = 'text', placeholder = '', variant = 'default', label, name = 'input-id', required = false, error, onChange, className, startIcon, endIcon, ...props }: InputProps) {

  const variantClasses = {
    default: 'bg-white border border-gray-300 focus:border-primary-100 focus:ring-primary-100',
    secondary: 'bg-gray-100 border border-gray-200 focus:border-primary-100 focus:ring-primary-100',
  }

  const iconsPadding = startIcon || endIcon ? 'pl-10 pr-10' : ''

  return (
    <div className="w-full items-center grid gap-2 relative">

      {label && <Label className='text-lg md:text-xl' htmlFor={name}>{label}</Label>}

      <div className='w-full flex flex-col gap-2 relative'>
        {startIcon && <div className="absolute left-3 -bottom-2.75 text-lg md:text-xl -translate-y-1/2">{startIcon}</div>}
        <CnInput
          required={required}
          type={type} id={name}
          placeholder={placeholder}
          onChange={onChange}
          className={`text-lg md:text-xl ${iconsPadding} ${variantClasses[variant]} ${className}`} name={name}
          {...props} />
        {endIcon && <div className="absolute right-3 -bottom-2.75 -translate-y-1/2">{endIcon}</div>}
      </div>

      {error && <span className="text-sm md:text-base text-red-500 text-start mb-1">{error}</span>}
    </div>
  )
}
