import Breadcrumb from "@/components/layout/Breadcrumb";
import Sidebar from "@/components/layout/sidebar/Sidebar";
import ModalWrapper from "@/components/modals/ModalWrapper";
import { ModalProvider } from "@/context/ModalContext";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Main Admin Dashboard",
};

export default function DashboardLayout({
    children
}: Readonly<{
    children: React.ReactNode,
}>) {

    return (
        <div className="flex w-full h-full bg-Brand-700">
            <div>
                <Sidebar />
            </div>
            <div className="flex flex-col items-start gap-10 bg-white rounded-tl-[2.5rem] flex-grow">
                <div className="p-8 pb-0">
                    <Breadcrumb />
                </div>
                <div className="w-full flex-grow overflow-y-auto p-8 pt-0">
                    <ModalProvider>
                        {children}
                        <ModalWrapper />
                    </ModalProvider>
                </div>
            </div>
        </div>
    );
}
