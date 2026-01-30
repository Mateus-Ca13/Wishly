import { CnInput } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Eye, EyeOffIcon } from 'lucide-react'
import { useState } from 'react'

type InputProps = {
  type?: 'email' | 'password' | 'text' | 'number' | 'tel' | 'url' | 'search' | 'date'
  placeholder?: string
  label?: React.ReactNode
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

  const [showPassword, setShowPassword] = useState(false)

  const variantClasses = {
    default: 'bg-white border border-gray-300 focus:border-primary-100 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white',
    secondary: 'bg-gray-100 border border-gray-200 focus:border-primary-100 focus:ring-primary-100 dark:bg-gray-800 dark:border-gray-700 dark:text-white',
  }

  const iconsPadding = startIcon || endIcon ? 'pl-10 pr-10' : ''

  return (
    <div className="w-full items-center grid gap-2 relative">

      {label && <Label className='text-lg md:text-xl text-primary-700 font-semibold dark:text-primary-100' htmlFor={name}>{label}</Label>}

      <div className='w-full flex flex-col gap-2 relative'>
        {startIcon && <div className="absolute left-3 -bottom-2.75 text-lg md:text-xl -translate-y-1/2">{startIcon}</div>}
        <CnInput
          required={required}
          type={type === 'password' ? (showPassword ? 'text' : 'password') : type} id={name}
          placeholder={placeholder}
          onChange={onChange}
          className={`text-lg md:text-xl ${iconsPadding} ${variantClasses[variant]} ${className}`} name={name}
          {...props} />

        {endIcon ?
          <div
            className="absolute right-3 -bottom-2.75 -translate-y-1/2">
            {endIcon}
          </div> :
          type === 'password' ?
            <div
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 -bottom-0.75 -translate-y-1/2 cursor-pointer">
              {showPassword ? <EyeOffIcon className="text-gray-500 dark:text-gray-400 size-5" /> : <Eye className="text-gray-500 dark:text-gray-400 size-5" />}
            </div> : null}
      </div>

      {error && <span className="text-sm md:text-base text-red-500 dark:text-red-400 text-start mb-1">{error}</span>}
    </div>
  )
}
