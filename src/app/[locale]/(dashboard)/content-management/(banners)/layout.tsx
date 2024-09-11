'use client'

import { useModal } from "@/context/ModalContext";

import DashboardPagesHeader from "@/components/layout/DashboardPagesHeader";

import { Plus } from "@/components/icons";

import NewBannerModal from "@/components/modals/NewBannerModal";

export default function BannersLayout({
    children
}: Readonly<{
    children: React.ReactNode,
}>) {

    const { openModal } = useModal();

    const handleAddNewBanner = () => {
        openModal(<NewBannerModal />);
    };

    return (
        <div className='dashboard-pages-wrapper'>
            <DashboardPagesHeader
                title='Banners'
                description='We have missed you.'
                customIconComponent={<Plus />}
                buttonText="Add Banners"
                onClick={handleAddNewBanner}
            />
            {children}
        </div>
    );
}