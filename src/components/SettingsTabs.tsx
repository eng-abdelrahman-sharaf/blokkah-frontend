'use client'

import React from 'react'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

const tabs = [
    {
        name: 'Account Settings',
        href: '/account-settings/account-details'
    },
    {
        name: 'Change Password',
        href: '/account-settings/change-password'
    }
]

const SettingsTabs = () => {
    const pathName = usePathname();

    return (
        <div className="border-b border-transparent border-b-Gray-200 w-full flex items-center justify-start gap-2">
            {tabs.map((tab, index) => (
                <Link
                    key={tab.href + index}
                    href={tab.href}
                    className={
                        cn(
                            'text-md md:text-lg font-bold text-Gray-500 px-1 pb-3 border-b-2 border-transparent transition-colors',
                            { 'text-Brand-700 border-b-Brand-700': pathName === tab.href }
                        )}
                >
                    {tab.name}
                </Link>
            ))}
        </div>
    )
}

export default SettingsTabs