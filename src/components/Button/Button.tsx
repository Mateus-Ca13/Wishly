import React from 'react'

type ButtonProps = {
  variant?: 'default' | 'contained' | 'outlined' | 'blank' | 'card' | 'destructive'
  children: React.ReactNode
  onClick?: () => void

} & React.ButtonHTMLAttributes<HTMLButtonElement>



export default function Button({ children, variant = 'default', className, ...props }: ButtonProps) {

  const variantMap: Record<string, string> = {
    default: `bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded`,
    contained: `bg-linear-to-bl to-primary-500/90 dark:to-primary-700! from-secondary-500/90 dark:from-secondary-700! hover:brightness-110 text-white font-semibold py-2 px-4 rounded`,
    outlined: `border-primary-300 border-3 font-semibold py-2 px-4 rounded text-primary-500 font-semibold hover:bg-primary-100/30 dark:text-primary-100`,
    blank: `text-gray-800`,
    card: `bg-white border-gray-200 border rounded-lg shadow-md hover:bg-gray-50 transition-shadow duration-200 cursor-pointer`,
    destructive: `bg-red-500 hover:bg-red-600 dark:bg-red-800 dark:hover:bg-red-700 text-white font-semibold py-2 px-4 rounded`,
  }


  return (
    <button className={`${variantMap[variant]} transition duration-200 cursor-pointer disabled:opacity-50 ${className}`} {...props}>
      {children}
    </button>
  )
}
