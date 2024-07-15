import React from 'react'

import SidebarNav from './SidebarNav'
import ProfileTab from './ProfileTab'

import { Logo, Settings } from '@/components/icons'

import { Button } from '@/components/UI/Button'
import { Users } from '@/components/icons'

const Sidebar = () => {
    return (
        <div className='flex flex-col items-center justify-between px-6 py-8 h-full'>
            <div className='w-full'>
                <div className='px-4 mb-10 overflow-hidden w-fit'>
                    <Logo fill='white' width={84} height={32} />
                </div>
                <SidebarNav />
            </div>
            <div className='flex flex-col items-center gap-6 w-full'>
                <div className='flex flex-col items-center gap-2 w-full'>
                    <Button
                        icon={'leading'}
                        customIconComponent={<Users />}
                        className='bg-transparent border-transparent hover:bg-Brand-600 transition-colors justify-start gap-3'
                    >
                        Team Members
                    </Button>
                    <Button
                        icon={'leading'}
                        customIconComponent={<Settings />}
                        className='bg-transparent border-transparent hover:bg-Brand-600 transition-colors justify-start gap-3'
                    >
                        Account Settings
                    </Button>
                </div>
                <hr className='bg-Gray-700 w-full' />
                <ProfileTab name='Ahmed Ali' email='ahmedali@works.com' />
            </div>
        </div>
    )
}

export default Sidebar