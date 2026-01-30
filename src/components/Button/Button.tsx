import React from 'react'

type ButtonProps = {
  variant?: 'default' | 'contained' | 'outlined' | 'blank' | 'card'
  children: React.ReactNode
  onClick?: () => void

} & React.ButtonHTMLAttributes<HTMLButtonElement>



export default function Button({ children, variant = 'default', className, ...props }: ButtonProps) {

  const variantMap: Record<string, string> = {
    default: `bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded`,
    contained: `bg-linear-to-bl to-primary-500/90 from-secondary-500/90 hover:brightness-110 text-white font-semibold py-2 px-4 rounded`,
    outlined: `border-primary-300 border-3 font-semibold py-2 px-4 rounded text-primary-500 font-semibold hover:bg-primary-100/30 dark:text-primary-100`,
    blank: `text-gray-800`,
    card: `bg-white border-gray-200 border rounded-lg shadow-md hover:bg-gray-50 transition-shadow duration-200 cursor-pointer`,
  }


  return (
    <button className={`${variantMap[variant]} transition duration-200 cursor-pointer ${className}`} {...props}>
      {children}
    </button>
  )
}
