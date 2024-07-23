import React from 'react'

import SidebarNav from './accordion/SidebarNav'

import SidebarNavItem from './accordion/SidebarNavItem'

import ProfileTab from './ProfileTab'

import { Logo } from '@/components/icons'

const SidebarNavButtons: { [key: string]: any } = {
    'dashboard': {
        name: 'Dashboard',
        href: '/dashboard',
        icon: 'Home'
    },
    'property-management': {
        name: 'Property Management',
        href: '/property-management',
        icon: 'ThreeLayers'
    },
    'user-management': {
        name: 'User Management',
        href: '/user-management',
        icon: 'Users',
        isAccordion: true,
        accordionItems: {
            'agents-requests': {
                name: 'Agents Requests',
                href: '/user-management/agents-request',
                isAccordionChild: true
            },
            'all-users': {
                name: 'All Users',
                href: '/user-management/all-users',
                isAccordionChild: true
            },
        }
    },
    'content-management': {
        name: 'Content Management',
        href: '/content-management',
        icon: 'CheckSquare',
        isAccordion: true,
        accordionItems: {
            'banners': {
                name: 'Banners',
                href: '/content-management/banners',
                isAccordionChild: true
            },
            'about-blokkah': {
                name: 'About Blokkah',
                href: '/content-management/about-blokkah',
                isAccordionChild: true
            },
        }
    },
    'reports-and-complaints': {
        name: 'Reports & Complaints',
        href: '/reports-and-complaints',
        icon: 'Flag'
    },
    'analytics': {
        name: 'Analytics',
        href: '/analytics',
        icon: 'Analytics'
    }
}

const Sidebar = () => {
    return (
        <div className='flex flex-col items-center justify-between px-6 py-8 h-full'>
            <div className='w-full'>
                <div className='px-4 mb-10 overflow-hidden w-fit'>
                    <Logo fill='white' width={84} height={32} />
                </div>
                <SidebarNav SidebarNavButtons={SidebarNavButtons} />
            </div>
            <div className='flex flex-col items-center gap-6 w-full'>
                <div className='flex flex-col items-center gap-2 w-full'>
                    <SidebarNavItem
                        href='/team-members'
                        linkItemName='Team Members'
                        startIcon='Users'
                    />
                    <SidebarNavItem
                        href='/account-settings/account-details'
                        linkItemName='Account Settings'
                        startIcon='Settings'
                    />
                </div>
                <hr className='bg-Gray-700 w-full' />
                <ProfileTab name='Ahmed Ali' email='ahmedali@works.com' />
            </div>
        </div>
    )
}

export default Sidebar