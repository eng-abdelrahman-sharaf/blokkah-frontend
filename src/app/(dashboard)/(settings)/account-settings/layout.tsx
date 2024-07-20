import DashboardPagesHeader from "@/components/layout/DashboardPagesHeader";

import SettingsTabs from "@/components/SettingsTabs";

import { Save } from "@/components/icons";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Main Admin Dashboard",
};

export default function SettingsLayout({
    children
}: Readonly<{
    children: React.ReactNode,
}>) {

    return (
        <div className='dashboard-pages-wrapper'>
            <DashboardPagesHeader
                title='Account Settings'
                description='Manage your account info and security.'
                customIconComponent={<Save />}
                buttonText="Save Changes"
            />
            <SettingsTabs />
            {children}
        </div>
    );
}