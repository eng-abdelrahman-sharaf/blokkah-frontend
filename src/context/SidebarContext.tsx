'use client'

import React, { createContext, useCallback, useContext, useMemo, useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { SidebarNavButtons } from '@/components/layout/sidebar/Sidebar';

interface SidebarContextProps {
    expanded: Record<string, boolean>;
    toggleExpand: (name: string) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});
    const pathname = usePathname();

    const toggleExpand = useCallback((name: string) => {
        setExpanded(prevExpanded => {
            const newExpanded = {
                [name]: true
            };

            if (prevExpanded[name] === newExpanded[name]) return {}

            localStorage.setItem('expanded', JSON.stringify(newExpanded));
            return newExpanded;
        });
    }, []);

    useEffect(() => {
        const matchedItem = Object.keys(SidebarNavButtons).find(navItem => pathname.includes(SidebarNavButtons[navItem].href))
        const storedExpanded = localStorage.getItem('expanded');
        let initialExpanded = matchedItem ? { [`/${matchedItem}`]: true } : JSON.parse(storedExpanded || '');

        setExpanded(initialExpanded);
    }, [pathname]);

    const value = useMemo(() => {
        return {
            expanded,
            toggleExpand
        };
    }, [expanded, toggleExpand]);

    return (
        <SidebarContext.Provider value={value}>
            {children}
        </SidebarContext.Provider>
    );
};

export const useExpand = (): SidebarContextProps => {
    const context = useContext(SidebarContext);
    if (!context) {
        throw new Error('useExpand must be used within an ExpandProvider');
    }
    return context;
};