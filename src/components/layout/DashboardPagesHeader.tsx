import React, { ReactNode } from 'react'

import { Button } from '@/components/UI/Button';

const DashboardPagesHeader = (
    {
        title,
        description,
        customIconComponent = undefined,
        buttonText = undefined,
        onClick = undefined
    }: { title: string, description?: string, customIconComponent?: ReactNode, buttonText?: string, onClick?: () => void }) => {

    return (
        <div className='flex items-center justify-between w-full'>
            <div>
                <h1 className='font-bold text-Gray-900 text-2xl md:text-3xl'>{title}</h1>
                <p className='text-sm md:text-md font-regular text-Gray-600'>{description}</p>
            </div>
            <Button
                size={'md'}
                type='submit'
                icon='leading'
                customIconComponent={customIconComponent}
                onClick={onClick}
                className='w-fit text-sm md:text-md px-3 py-2 md:px-4 md:py-[0.625rem]'
            >
                {buttonText}
            </Button>
        </div>
    )
}

export default DashboardPagesHeader;