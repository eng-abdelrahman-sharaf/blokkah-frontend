import type { Metadata } from "next";
import Image from "next/image";

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
            <div className="max-w-[488px]">
                {children}
            </div>
        </div>
    );
}
