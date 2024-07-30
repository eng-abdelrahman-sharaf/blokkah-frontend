'use client'

import React from 'react'

import { useModal } from '@/context/ModalContext';

import DashboardPagesHeader from '@/components/layout/DashboardPagesHeader';
import { Plus } from '@/components/icons';
import { Apartment, Architecture, CommercialLand, Floor, Market, Office, Penthouse, ResidentialLand, StandAlone, Villa } from '@/components/icons/property-types';
import NewCategoryModal from '@/components/modals/NewCategoryModal';

const propertyTypes: { type: string, icon: React.ReactNode }[] = [
    {
        type: 'Residential Land',
        icon: <ResidentialLand />
    },
    {
        type: 'Commercial Land',
        icon: <CommercialLand />
    },
    {
        type: 'Apartment',
        icon: <Apartment />
    },
    {
        type: 'Floor',
        icon: <Floor />
    },
    {
        type: 'Architecture',
        icon: <Architecture />
    },
    {
        type: 'Villa',
        icon: <Villa />
    },
    {
        type: 'Market',
        icon: <Market />
    },
    {
        type: 'Office',
        icon: <Office />
    },
    {
        type: 'Penthouse',
        icon: <Penthouse />
    },
    {
        type: 'StandAlone',
        icon: <StandAlone />
    },
]

const PropertyTypes = () => {
    const { openModal } = useModal();

    const handleAddNewCategory = () => {
        openModal(<NewCategoryModal />);
    };

    return (
        <div className='dashboard-pages-wrapper'>
            <DashboardPagesHeader
                title='Property Types'
                description='We have missed you.'
                customIconComponent={<Plus />}
                buttonText="New Category"
                onClick={handleAddNewCategory}
            />
            <div className='flex-grow w-full overflow-y-auto'>
                <div className='flex items-start justify-center lg:justify-start gap-4 w-full flex-wrap'>
                    {propertyTypes.map((propertyType, index) => (
                        <PropertyTypeItem
                            key={propertyType.type + '-' + index}
                            propertyType={propertyType.type}
                            icon={propertyType.icon}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PropertyTypes;


const PropertyTypeItem = ({ propertyType, icon }: { propertyType: string, icon: React.ReactNode }) => {
    return (
        <div className='flex flex-col items-center gap-1 md:gap-2 max-w-24 md:max-w-[140px] w-full'>
            <div className='bg-Brand-50 rounded-lg p-3 md:p-6 flex items-center justify-center w-full'>
                <div className='max-w-16 max-h-16 overflow-hidden'>
                    {icon}
                </div>
            </div>

            <p className='text-Gray-600 text-sm md:text-lg font-semibold text-center'>{propertyType}</p>
        </div>
    )
}