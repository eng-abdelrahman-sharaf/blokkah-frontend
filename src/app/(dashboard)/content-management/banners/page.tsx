import React from 'react'

import Banners from '@/components/pages/banners/Banners';

// mock data to be removed
const banners = [
    {
        bannerSrc: '/assets/banner-placeholder.png',
        bannerId: 'asdfqwer1234',
        active: true
    },
    {
        bannerSrc: '/assets/banner-placeholder.png',
        bannerId: 'asdfqwer441234',
        active: false
    },
    {
        bannerSrc: '/assets/banner-placeholder.png',
        bannerId: 'asdfqwer5twet1234',
        active: true
    },
];

const page = () => {
    return (
        <div className='w-full h-full'>
            <Banners initialBanners={banners} />
        </div>
    )
}

export default page;