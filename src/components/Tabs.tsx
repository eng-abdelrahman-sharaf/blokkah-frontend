'use client';

import React, { useState } from 'react';

import Link from 'next/link';

import { usePathname } from 'next/navigation';

import { cn } from '@/lib/utils';

interface Tab {
    name: string;
    type?: string;
    href?: string;
}

interface TabsProps {
    tabs: Tab[];
    onTabChange?: (key: string) => void;
    isLink?: boolean;
}

const Tabs: React.FC<TabsProps> = ({ tabs, onTabChange, isLink }) => {
    const [activeTab, setActiveTab] = useState(tabs[0].type);
    const pathName = usePathname();

    const handleTabClick = (type: string) => {
        setActiveTab(type);
        if (onTabChange) {
            onTabChange(type);
        }
    };

    const Tab = isLink ? Link : 'button'

    return (
        <div className="border-b border-transparent border-b-Gray-200 w-full flex items-center justify-start gap-2">
            {tabs.map((tab) => (
                <Tab
                    key={tab.type}
                    href={tab.href || '#'}
                    onClick={isLink ? undefined : () => handleTabClick(tab.type as string)}
                    className={
                        cn(
                            'text-md md:text-lg font-bold text-Gray-500 px-1 pb-3 border-b-2 border-transparent transition-colors',
                            { 'text-Secondary-600 border-b-Secondary-600': isLink ? pathName === tab.href : activeTab === tab.type }
                        )}
                >
                    {tab.name}
                </Tab>
            ))}
        </div>
    );
};

export default Tabs;