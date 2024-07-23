'use client'

import React, { useState } from 'react';

import { useModal } from '@/context/ModalContext';

import { Plus } from '@/components/icons';

import DashboardPagesHeader from '@/components/layout/DashboardPagesHeader';

import NewBannerModal from '@/components/modals/NewBannerModal';
import EditBannerModal from '@/components/modals/EditBannerModal';
import DeleteBannerModal from '@/components/modals/DeleteBannerModal';

import Banner from './Banner';

type banners = {
    bannerSrc: string;
    bannerId: string;
    active: boolean;
}

const Banners = ({ initialBanners }: { initialBanners?: banners[] }) => {
    const { openModal } = useModal();
    const [banners, setBanners] = useState(initialBanners || []);

    const handleAddNewBanner = () => {
        openModal(<NewBannerModal />);
    };

    const handleEditBanner = (bannerId: string) => {
        openModal(<EditBannerModal />);
    };

    const handleDeleteBanner = (bannerId: string) => {
        const deleteBanner = (id: string) => {
            setBanners((prevBanners) => prevBanners.filter(banner => banner.bannerId !== id));
        };
        openModal(<DeleteBannerModal bannerId={bannerId} onDelete={deleteBanner} />);
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
            <div className='flex items-center gap-6 w-full flex-wrap 2xl:flex-nowrap'>
                {banners.map((banner, index) => (
                    <Banner
                        key={banner.bannerId + index}
                        bannerSrc={banner.bannerSrc}
                        bannerId={banner.bannerId}
                        active={banner.active}
                        onEdit={() => handleEditBanner(banner.bannerId)}
                        onDelete={() => handleDeleteBanner(banner.bannerId)}
                    />
                ))}
            </div>
        </div>
    );
}

export default React.memo(Banners);