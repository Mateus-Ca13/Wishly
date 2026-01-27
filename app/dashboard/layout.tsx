import React from 'react'
import NavigationMenu from './_features/NavigationMenu';
import PathTitle from './_features/PathTitle';
export default function DashboardLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <div className='flex justify-center items-center flex-col w-full'>
      <PathTitle />
      <div className='max-w-7xl w-full px-2 md:px-6'>
        {children}
      </div>
      <NavigationMenu />
    </div>
  )
}
