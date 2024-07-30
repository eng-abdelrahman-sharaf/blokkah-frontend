'use client'

import React, { useMemo } from 'react';

import { useExpand } from '@/context/SidebarContext';

import SidebarNavItem from './SidebarNavItem';

import { cn } from '@/lib/utils';

interface SidebarNavButton {
    name: string;
    href: string;
    icon: string;
    isAccordion?: boolean;
    isAccordionChild?: boolean;
    accordionItems?: { [key: string]: SidebarNavButton };
}

interface SidebarNavProps {
    SidebarNavButtons: { [key: string]: SidebarNavButton };
    accordionChildren?: boolean;
}

const SidebarNav: React.FC<SidebarNavProps> = ({ SidebarNavButtons, accordionChildren = false }) => {
    const { expanded } = useExpand();
    const memoizedSidebarNavItems = useMemo(() => SidebarNavButtons, [SidebarNavButtons]);

    const renderNavItem = (item: SidebarNavButton, key: string) => {
        const isExpanded = !!expanded[item.href];

        return (
            <React.Fragment key={`sidebar-item-${item.name}`}>
                <SidebarNavItem
                    href={item.href}
                    linkItemName={item.name}
                    startIcon={item.icon}
                    isAccordion={item.isAccordion}
                    isAccordionChild={item.isAccordionChild}
                    isExpanded={isExpanded}
                />
                {item.isAccordion && item.accordionItems && (
                    <SidebarNav
                        SidebarNavButtons={item.accordionItems}
                        accordionChildren={true}
                    />
                )}
            </React.Fragment>
        );
    };

    return (
        <div className={cn(
            "flex flex-col items-start lg:items-center gap-2 w-fit lg:w-full",
            { 'gap-1': accordionChildren }
        )}>
            {Object.keys(memoizedSidebarNavItems).map((key) => {
                if (memoizedSidebarNavItems[key].isAccordion && memoizedSidebarNavItems[key].accordionItems) {
                    return (
                        <div
                            key={`sidebar-item-${memoizedSidebarNavItems[key].name}`}
                            className={cn(
                                'overflow-hidden transition-all flex flex-col items-center gap-2 w-full max-h-12',
                                { 'max-h-36': !!expanded[memoizedSidebarNavItems[key].href] },
                            )}
                        >
                            {renderNavItem(memoizedSidebarNavItems[key], key)}
                        </div>
                    );
                }

                return renderNavItem(memoizedSidebarNavItems[key], key);
            })}
        </div>
    );
};

export default React.memo(SidebarNav);