import Link from 'next/link'
import { ChevronRight } from 'lucide-react'

interface LinkCardProps {
    icon: any
    title: string
    description?: string
    href: string
}

export default function LinkCard({ icon, title, description, href }: LinkCardProps) {

    const Icon = icon

    return (
        <Link href={href} className='w-full p-2 rounded-xl flex items-center justify-start gap-3 hover:bg-primary-100/30' >
            <Icon className='size-12 bg-primary-100 dark:bg-primary-700 p-2 rounded-lg' />
            <div className='flex flex-col items-start justify-start text-start'>
                <p className='text-base md:text-xl font-semibold dark:text-white'>{title}</p>
                {description && <p className='text-sm md:text-base text-gray-500 dark:text-gray-300'>{description}</p>}
            </div>
            <ChevronRight className='ms-auto size-5 dark:text-white' />
        </Link>

    )
}
