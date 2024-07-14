import React, { ReactNode } from 'react'

const DashboardPagesHeader = (
    {
        title,
        description,
        CTA
    }: { title: string, description?: string, CTA?: ReactNode }) => {

    return (
        <div className='flex items-center justify-between w-full'>
            <div>
                <h1 className='font-bold text-12xl text-Gray-900'>{title}</h1>
                <p className='text-3xl font-regular text-Gray-600'>{description}</p>
            </div>
            {CTA}
        </div>
    )
}

export default DashboardPagesHeader;