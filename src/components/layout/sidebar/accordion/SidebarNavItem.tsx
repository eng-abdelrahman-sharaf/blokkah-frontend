'use client'

import React, { useEffect, useMemo } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { useExpand } from '@/context/SidebarContext';

import { Chevron } from '@/components/icons';

import { cn } from '@/lib/utils';

interface SidebarNavItemProps {
    href: string;
    linkItemName: string;
    startIcon?: string;
    isAccordion?: boolean;
    isAccordionChild?: boolean;
    isExpanded?: boolean;
}

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({
    href,
    linkItemName,
    startIcon = undefined,
    isAccordion = undefined,
    isAccordionChild = undefined,
    isExpanded = false,
}) => {
    const { toggleExpand } = useExpand();

    const pathName = usePathname();

    const IconComponent = useMemo(() => {
        if (!startIcon) return null;

        try {
            return require(`@/components/icons/${startIcon}`).default;
        } catch (error) {
            console.error(`Icon component '${startIcon}' not found.`);
            return null;
        }
    }, [startIcon]);

    const handleClick = () => {
        if (isAccordion) {
            toggleExpand(href);
        }
    };

    const content = (
        <div
            className={cn(
                'sidebar-link-item',
                'text-Brand-300 bg-transparent flex items-cente justify-start w-fit lg:w-full',
                { 'text-white bg-Brand-600': pathName.includes(href) },
                { '!px-3 !pl-12 !py-2': isAccordionChild }
            )}
            onClick={handleClick}
        >
            {IconComponent && <IconComponent stroke={pathName.includes(href) ? 'white' : undefined} />}

            <p className={cn(
                'flex-grow hidden lg:block',
            )}>
                {linkItemName}
            </p>

            {isAccordion && (
                <div className={`${isExpanded ? 'rotate-180' : ''} transition-transform`}>
                    <Chevron />
                </div>
            )}
        </div>
    );

    return isAccordion ? content :
        <Link href={href} className='w-fit lg:w-full'>
            {content}
        </Link>;
};

export default React.memo(SidebarNavItem);