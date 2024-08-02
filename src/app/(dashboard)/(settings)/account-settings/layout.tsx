import DashboardPagesHeader from "@/components/layout/DashboardPagesHeader";

import Tabs from "@/components/Tabs";

import { Save } from "@/components/icons";

import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Dashboard",
    description: "Main Admin Dashboard",
};

const settingsTabs = [
    {
        name: 'Account Details',
        href: '/account-settings/account-details'
    },
    {
        name: 'Change Password',
        href: '/account-settings/change-password'
    }
]

export default function SettingsLayout({
    children
}: Readonly<{
    children: React.ReactNode,
}>) {

    const handleFormSubmit = async (formdata: FormData) => {
        'use server';

        // Create an array to hold form data
        const formEntries = Array.from(formdata.entries());

        // Log each key/value pair
        formEntries.forEach(([key, value]) => {
            console.log(`Key: ${key}, Value: ${value}`);
        });

        // Alternatively, you can handle the form data as needed
        formEntries.forEach(([key, value]) => {
            // Handle each form item here
            // For example, you might want to process or store the data
        });
    };

    return (
        <form
            action={handleFormSubmit}
            className='dashboard-pages-wrapper'
        >
            <DashboardPagesHeader
                title='Account Settings'
                description='Manage your account info and security.'
                customIconComponent={<Save />}
                buttonText="Save Changes"
            />
            <Tabs tabs={settingsTabs} isLink />
            {children}
        </form>
    );
}