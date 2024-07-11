'use client'

import React, { createContext, useContext, useState, FC, ReactNode } from 'react';

interface AuthContextType {
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthContextProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [email, setEmail] = useState<string>('');

    return (
        <AuthContext.Provider value={{ email, setEmail }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuthContext = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuthContext must be used within a AuthContextProvider");
    }
    return context;
};