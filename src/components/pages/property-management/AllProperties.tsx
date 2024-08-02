import DashboardPagesHeader from '@/components/layout/DashboardPagesHeader'
import React from 'react'

const AllProperties = () => {
    return (
        <div className='dashboard-pages-wrapper'>
            <DashboardPagesHeader
                title='All Properties'
                description='We have missed you.'
                endComponent={<div></div>}
            />
            <div className='flex-grow w-full overflow-y-auto'>
                <div className='flex items-start justify-center lg:justify-start gap-4 w-full flex-wrap'>
                    {/* {banners.map((banner, index) => (
                    <Banner
                        key={banner.bannerId + index}
                        bannerSrc={banner.bannerSrc}
                        bannerId={banner.bannerId}
                        active={banner.active}
                        onEdit={() => handleEditBanner(banner.bannerId)}
                        onDelete={() => handleDeleteBanner(banner.bannerId)}
                    />
                ))} */}
                </div>
            </div>
        </div>
    )
}

export default AllProperties