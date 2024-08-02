'use client'

import React, { ReactNode, useState } from 'react'

import { useModal } from '@/context/ModalContext';

import DashboardPagesHeader from '@/components/layout/DashboardPagesHeader';

import { Plus, Trash } from '@/components/icons';
import { Button } from '@/components/UI/Button';

import NewCategoryModal from '@/components/modals/NewCategoryModal';
import DeleteModal from '@/components/modals/DeleteModal';

import { Apartment, Architecture, CommercialLand, Floor, Market, Office, Penthouse, ResidentialLand, StandAlone, Villa } from '@/components/icons/property-types';

import { cn } from '@/lib/utils';

const propertyTypes: { type: string, typeId: string, icon: React.ReactNode, active: boolean }[] = [
    {
        type: 'Residential Land',
        typeId: 'ResidentialLand-1',
        icon: <ResidentialLand />,
        active: true
    },
    {
        type: 'Commercial Land',
        typeId: 'CommercialLand-2',
        icon: <CommercialLand />,
        active: false
    },
    {
        type: 'Apartment',
        typeId: 'Apartment-3',
        icon: <Apartment />,
        active: true
    },
    {
        type: 'Floor',
        typeId: 'Floor-4',
        icon: <Floor />,
        active: true
    },
    {
        type: 'Architecture',
        typeId: 'Architecture-5',
        icon: <Architecture />,
        active: true
    },
    {
        type: 'Villa',
        typeId: 'Villa-6',
        icon: <Villa />,
        active: false
    },
    {
        type: 'Market',
        typeId: 'Market-7',
        icon: <Market />,
        active: true
    },
    {
        type: 'Office',
        typeId: 'Office-8',
        icon: <Office />,
        active: true
    },
    {
        type: 'Penthouse',
        typeId: 'Penthouse-9',
        icon: <Penthouse />,
        active: true
    },
    {
        type: 'StandAlone',
        typeId: 'StandAlone-10',
        icon: <StandAlone />,
        active: true
    },
]

const PropertyTypes = () => {
    const { openModal } = useModal();
    const [types, setTypes] = useState(propertyTypes);

    const handleAddNewCategory = () => {
        openModal(<NewCategoryModal />);
    };

    const handleDeleteBanner = (typeId: string, type: string) => {
        const deleteBanner = (id: string) => {
            setTypes((prevTypes) => prevTypes.filter(type => type.typeId !== typeId));
        };
        openModal(<DeleteModal
            itemId={typeId}
            deleteModalMessage={`Are you sure that you need to delete "${type}"?`}
            deleteModalConfirmation='By deleting this Type, it will be lost and cannot be undone.'
            onDelete={deleteBanner}
        />);
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
                    {types.map((propertyType, index) => (
                        <PropertyTypeItem
                            key={propertyType.type + '-' + index}
                            property={propertyType}
                            onDelete={handleDeleteBanner}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PropertyTypes;


const PropertyTypeItem = ({ property, onDelete }: { property: { [key: string]: string | ReactNode }, onDelete: (typeId: string, typeName: string) => void; }) => {

    return (
        <div className='flex flex-col items-center gap-1 md:gap-2 max-w-24 md:max-w-[156px] w-full'>
            <Button
                variant={'secondaryGray'}
                className='p-2 md:p-5'
            >
                <div className='relative bg-Brand-50 rounded-lg p-2 md:p-4 flex items-center justify-center w-fit'>
                    <div className='absolute -top-2 -right-2 rounded-full bg-white p-1 md:p-2 flex items-center justify-center gap-1 md:gap-2 cursor-pointer'>
                        <span className={cn(
                            'text-xs md:text-sm font-medium px-[0.625rem] py-[0.125rem] rounded-full',
                            { 'bg-Error-50': !property.active },
                            { 'text-Error-700': !property.active },
                            { 'bg-Success-50': property.active },
                            { 'text-Success-700': property.active }
                        )}>
                            {property.active ? "Active" : "In-Active"}
                        </span>
                        <span
                            onClick={(event) => {
                                event.stopPropagation();
                                onDelete(property.typeId as string, property.type as string);
                            }}
                        >
                            <Trash />
                        </span>
                    </div>
                    <div className='max-w-[5.25rem] max-h-[5.25rem] w-full h-full overflow-hidden'>
                        {property.icon}
                    </div>
                </div>
            </Button>

            <p className='text-Gray-600 text-sm md:text-lg font-semibold text-center'>{property.type}</p>
        </div>
    )
}