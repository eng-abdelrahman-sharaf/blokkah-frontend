import DashboardPagesHeader from "@/components/layout/DashboardPagesHeader";
import SettingsTabs from "@/components/SettingsTabs";

import { Button } from "@/components/UI/Button";
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
        <form className='w-full h-full flex flex-col items-start gap-8'>
            <DashboardPagesHeader
                title='Account Settings'
                description='Manage your account info and security.'
                CTA={
                    <Button
                        size={'md'}
                        type='submit'
                        icon='leading'
                        customIconComponent={<Save />}
                        className='w-fit'
                    >
                        Save Changes
                    </Button>
                }
            />
            <SettingsTabs />
            {children}
        </form>
    );
}