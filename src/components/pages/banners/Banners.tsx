'use client'

import React from 'react';

import Image from 'next/image';

import { useModal } from '@/context/ModalContext';

import { Trash, Plus } from '@/components/icons';

import DashboardPagesHeader from '@/components/layout/DashboardPagesHeader';

import NewBannerModal from '@/components/modals/NewBannerModal';
import EditBannerModal from '@/components/modals/EditBannerModal';
import DeleteBannerModal from '@/components/modals/DeleteBannerModal';

import { cn } from '@/lib/utils';

type banners = {
    bannerSrc: string;
    bannerId: string;
    active: boolean
}

const Banners = ({ banners }: { banners?: banners[] }) => {
    const { openModal } = useModal();

    const handleAddNewBanner = () => {
        openModal(
            <NewBannerModal />
        );
    };

    const handleEditBanner = () => {
        openModal(
            <EditBannerModal />
        );
    };

    const handleDeleteBanner = (bannerId: string) => {
        openModal(
            <DeleteBannerModal />
        );
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
            <div className='flex items-center gap-6 w-full flex-wrap'>
                {banners?.map((banner, index) => (
                    <div
                        key={banner.bannerId + index}
                        className='max-w-[500px] w-full max-h-[200px] h-full rounded-lg p-5 bg-white border border-Gray-200'
                        onClick={handleEditBanner}
                    >
                        <div className='relative w-full'>
                            <Image
                                src={banner.bannerSrc}
                                alt="Selected"
                                width={460}
                                height={160}
                                className="max-w-[460px] w-full max-h-[160px] h-full object-cover"
                            />
                            <div
                                onClick={(event) => {
                                    event.stopPropagation();
                                    handleDeleteBanner(banner.bannerId)
                                }}
                                className='absolute -top-2 -right-2 rounded-full bg-white p-2 flex items-center justify-center gap-2 cursor-pointer'
                            >
                                <span className={
                                    cn(
                                        'text-sm font-regular px-[0.625rem] py-[0.125rem] rounded-full',
                                        { 'bg-Error-50': banner.active === false },
                                        { 'text-Error-700': banner.active === false },
                                        { 'bg-Success-50': banner.active === true },
                                        { 'text-Success-700': banner.active === true }
                                    )
                                }>
                                    {banner.active ? "Active" : "In-Active"}
                                </span>
                                <Trash />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Banners