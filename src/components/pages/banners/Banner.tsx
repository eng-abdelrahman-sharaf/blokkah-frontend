import React from 'react';

import Image from 'next/image';

import { Trash } from '@/components/icons';

import { cn } from '@/lib/utils';

type BannerProps = {
    bannerSrc: string;
    bannerId: string;
    active: boolean;
    onEdit: () => void;
    onDelete: (bannerId: string) => void;
};

const Banner: React.FC<BannerProps> = ({ bannerSrc, bannerId, active, onEdit, onDelete }) => {
    return (
        <div
            className='max-w-[500px] w-full max-h-[200px] h-full rounded-lg p-5 bg-white border border-Gray-200 cursor-pointer'
            onClick={onEdit}
        >
            <div className='relative w-full'>
                <Image
                    src={bannerSrc}
                    alt="Selected"
                    width={460}
                    height={160}
                    className="max-w-[460px] w-full max-h-[160px] h-full object-cover"
                />
                <div className='absolute -top-2 -right-2 rounded-full bg-white p-2 flex items-center justify-center gap-2 cursor-pointer'>
                    <span className={cn(
                        'text-sm font-regular px-[0.625rem] py-[0.125rem] rounded-full',
                        { 'bg-Error-50': !active },
                        { 'text-Error-700': !active },
                        { 'bg-Success-50': active },
                        { 'text-Success-700': active }
                    )}>
                        {active ? "Active" : "In-Active"}
                    </span>
                    <span
                        onClick={(event) => {
                            event.stopPropagation();
                            onDelete(bannerId);
                        }}
                    >
                        <Trash />
                    </span>
                </div>
            </div>
        </div>
    );
};

export default React.memo(Banner);