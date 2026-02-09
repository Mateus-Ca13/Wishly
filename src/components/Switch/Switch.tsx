import React from 'react'
import { Switch as CnSwitch } from '../ui/switch'
import { Label } from '../ui/label'
import { MotionDiv } from '../Motion/Motion'

type SwitchProps = {
    checked: boolean
    onChange: (checked: boolean) => void
    label: React.ReactNode
} & Omit<React.ComponentProps<typeof CnSwitch>, 'onChange' | 'onCheckedChange'>

export default function Switch({ checked, onChange, label, ...props }: SwitchProps) {

    return (
        <div className='flex items-center md:flex-row-reverse gap-2'>
            <div className='relative align-center flex'>
                <CnSwitch
                    className={`cursor-pointer w-10 h-5 ${checked ? 'bg-primary-100 dark:bg-primary-700' : 'bg-gray-200 dark:bg-gray-600'}`}
                    checked={checked}
                    onCheckedChange={onChange}
                    id='theme'
                    {...props}
                />
                <MotionDiv
                    initial={{ x: 0 }}
                    animate={{ x: checked ? 16 : 0, }}
                    transition={{ duration: 0.1 }}
                    className={`w-4 h-4 rounded-full absolute 
                    bottom-1/2 translate-y-1/2 pointer-events-none ${checked ? 'bg-primary-500 dark:bg-primary-300' : 'bg-gray-500 dark:bg-gray-300'}`}></MotionDiv>
            </div>
            <Label htmlFor='theme' className='text-sm md:text-base text-black me-2 dark:text-white whitespace-nowrap'>{label}</Label>
        </div>
    )
}
