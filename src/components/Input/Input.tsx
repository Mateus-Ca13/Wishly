import { CnInput } from '@root/components/ui/input'
import { Label } from '@root/components/ui/label'

type InuptProps = {
  type?: 'email' | 'password' | 'text' | 'number' | 'tel' | 'url' | 'search'
  placeholder?: string
  label?: string
  name?: string
  variant?: 'default' | 'secondary'
  required?: boolean
  error?: string
  className?: string
}


export default function Input ({ type = 'text', placeholder = '', variant = 'default', label, name = 'input-id', required = false, error, className, ...props }: InuptProps) {

    const variantClasses = {
    default: 'bg-white border border-gray-300 focus:border-primary-300 focus:ring-primary-300',
    secondary: 'bg-gray-100 border border-gray-400 focus:border-green-500 focus:ring-green-500',
  }

  return (
    <div className="w-full max-w-sm items-center grid gap-2">
      {label && <Label htmlFor={name}>{label}</Label>}
      <CnInput required={required} type={type} id={name} placeholder={placeholder} className={`${variantClasses[variant]} ${className?? ''}`} name={name} {...props} />
        {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  )
}
