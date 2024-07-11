import { AuthContextProvider } from "@/context/AuthContext";
import type { Metadata } from "next";

import './authentication.css';

export const metadata: Metadata = {
    title: "Authentication",
    description: "Get User Credentials",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="w-full min-h-screen flex items-center justify-center bg-[url('/assets/DashAuthPagesBg.svg')]">
            <div className="max-w-[488px] w-full">
                <AuthContextProvider>
                    {children}
                </AuthContextProvider>
            </div>
        </div>
    );
}
