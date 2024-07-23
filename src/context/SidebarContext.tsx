'use client'

import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface SidebarContextProps {
    expanded: Record<string, boolean>;
    toggleExpand: (name: string) => void;
}

const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);

export const SidebarProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [expanded, setExpanded] = useState<Record<string, boolean>>({});

    const toggleExpand = useCallback((name: string) => {
        setExpanded(prevExpanded => ({
            ...prevExpanded,
            [name]: !prevExpanded[name]
        }));
    }, []);

    const value = useMemo(() => {
        return {
            expanded,
            toggleExpand
        }
    }
        , [expanded, toggleExpand])

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