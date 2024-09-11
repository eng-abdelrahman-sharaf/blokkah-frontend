import React from 'react'
import Banners from '@/components/pages/content-management/banners/Banners'

export type BannerType = {
    bannerSrc: string;
    bannerId: string;
    active: boolean;
    type?: string;
};

const banners: BannerType[] = [
    {
        bannerSrc: '/assets/banner-placeholder.png',
        bannerId: 'asdfqwer1234',
        active: false,
        type: 'blokkah'
    },
    {
        bannerSrc: '/assets/banner-placeholder.png',
        bannerId: 'asdfqwer441234',
        active: true,
        type: 'requests'
    },
    {
        bannerSrc: '/assets/banner-placeholder.png',
        bannerId: 'asdfqwer5twet12fasdf34',
        active: false,
        type: 'blokkah'
    },
    {
        bannerSrc: '/assets/banner-placeholder.png',
        bannerId: 'asdfqwer5tweasfrfgt1234',
        active: true,
        type: 'blokkah'
    },
];

const page = () => {
    return (
        <Banners initialBanners={banners} />
    )
}

export default page