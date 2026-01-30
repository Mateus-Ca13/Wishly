import React from 'react'
import { Switch as CnSwitch } from '../ui/switch'
import { Label } from '../ui/label'
import { MotionDiv } from '../Motion/Motion'

type SwitchProps = {
    checked: boolean
    onChange: (checked: boolean) => void
    label: React.ReactNode
}

export default function Switch({ checked, onChange, label }: SwitchProps) {

    return (
        <div className='flex items-center gap-2'>
            <Label htmlFor='theme' className='text-lg md:text-xl text-black me-2 dark:text-white whitespace-nowrap'>{label}</Label>
            <div className='relative align-center flex'>
                <CnSwitch
                    className='w-10 h-5 bg-gray-200 dark:bg-gray-600'
                    checked={checked}
                    onCheckedChange={onChange}
                    id='theme'
                />
                <MotionDiv
                    initial={{ x: 0 }}
                    animate={{ x: checked ? 16 : 0 }}
                    transition={{ duration: 0.1 }}
                    className={`w-4 h-4 rounded-full bg-gray-500 dark:bg-white absolute bottom-1/2 translate-y-1/2 pointer-events-none`}></MotionDiv>
            </div>
        </div>
    )
}
