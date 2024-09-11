import { AuthContextProvider } from "@/context/AuthContext";
import type { Metadata } from "next";

import './authentication.css';
import CopyRightBadge from "@/components/CopyRightBadge";

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
        <div className="w-full h-full flex flex-col items-center justify-center gap-10 bg-[url('/assets/DashAuthPagesBg.svg')] px-4">
            <div className="flex items-center justify-center lg:block max-w-[488px] w-full flex-grow">
                <AuthContextProvider>
                    <div className="mt-16 lg:mt-32 xl:mt-40 2xl:mt-52 w-full">
                        {children}
                    </div>
                </AuthContextProvider>
            </div>
            <div className="flex items-center justify-center pb-12">
                <CopyRightBadge />
            </div>
        </div>
    );
}
