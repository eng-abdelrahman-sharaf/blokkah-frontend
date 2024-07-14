import Breadcrumb from "@/components/layout/Breadcrumb";
import Sidebar from "@/components/layout/sidebar/Sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Main Admin Dashboard",
};

export default function DashboardLayout({
    children, params
}: Readonly<{
    children: React.ReactNode,
    params: any
}>) {

    return (
        <div className="flex w-full h-full bg-Brand-700">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col items-start gap-10 bg-white rounded-tl-[2.5rem] flex-grow p-8">
                <Breadcrumb />
                {children}
            </div>
        </div>
    );
}
