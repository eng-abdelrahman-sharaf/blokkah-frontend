'use client';

import React, { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import EditBannerModal from '@/components/modals/EditBannerModal';
import DeleteModal from '@/components/modals/DeleteModal';
import Banner from './Banner';
import Tabs from '@/components/Tabs';
import { BannerType } from '@/app/[locale]/(dashboard)/content-management/(banners)/banners/page';

const bannersTabs = [
    {
        name: 'Blokkah Banners',
        type: 'blokkah'
    },
    {
        name: 'Banners Requests',
        type: 'requests'
    }
];

const Banners = ({ initialBanners }: { initialBanners?: BannerType[] }) => {
    const { openModal } = useModal();
    const [banners, setBanners] = useState(initialBanners || []);
    const [filteredBanners, setFilteredBanners] = useState<BannerType[]>([]);
    const [activeTab, setActiveTab] = useState('blokkah');

    useEffect(() => {
        filterBanners(activeTab);
    }, [banners, activeTab]);

    const handleEditBanner = (banner: BannerType) => {
        openModal(<EditBannerModal banner={banner} onSave={handleSaveBanner} />);
    };

    const handleDeleteBanner = (bannerId: string) => {
        const deleteBanner = (id: string) => {
            setBanners((prevBanners) => prevBanners.filter(banner => banner.bannerId !== id));
        };
        openModal(
            <DeleteModal
                itemId={bannerId}
                deleteModalMessage='Delete Banner'
                deleteModalConfirmation='Are you sure you want to delete this post? This action cannot be undone.'
                onDelete={deleteBanner}
            />
        );
    };

    const handleSaveBanner = (updatedBanner: BannerType) => {
        setBanners((prevBanners) =>
            prevBanners.map((banner) =>
                banner.bannerId === updatedBanner.bannerId ? updatedBanner : banner
            )
        );
    };

    const filterBanners = (type: string) => {
        setFilteredBanners(banners.filter(banner => banner.type === type));
    };

    const handleTabChange = (type: string) => {
        setActiveTab(type);
        filterBanners(type);
    };

    return (
        <>
            <Tabs tabs={bannersTabs} onTabChange={handleTabChange} />
            <div className='flex-grow w-full overflow-y-auto'>
                <div className='flex items-start justify-center lg:justify-start gap-4 w-full flex-wrap'>
                    {filteredBanners.map((banner) => (
                        <Banner
                            key={banner.bannerId}
                            bannerSrc={banner.bannerSrc}
                            bannerId={banner.bannerId}
                            active={banner.active}
                            onEdit={() => handleEditBanner(banner)}
                            onDelete={() => handleDeleteBanner(banner.bannerId)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default React.memo(Banners);