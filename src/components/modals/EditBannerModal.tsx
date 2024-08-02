'use client';

import React, { useState, useEffect } from 'react';
import { useModal } from '@/context/ModalContext';
import { Button } from '@/components/UI/Button';
import { ImageIcon, XClose } from '@/components/icons';
import ImageSelector from '@/components/UI/ImageSelector';
import Toggle from '@/components/UI/Toggle';

interface EditBannerModalProps {
    banner: {
        bannerSrc: string;
        bannerId: string;
        active: boolean;
    };
    onSave: (updatedBanner: { bannerSrc: string; bannerId: string; active: boolean }) => void;
}

const EditBannerModal: React.FC<EditBannerModalProps> = ({ banner, onSave }) => {
    const { closeModal } = useModal();
    const [bannerSrc, setBannerSrc] = useState<any>(banner.bannerSrc);
    const [isActive, setIsActive] = useState(banner.active);

    useEffect(() => {
        setBannerSrc(banner.bannerSrc);
        setIsActive(banner.active);
    }, [banner]);

    const handleSave = () => {
        onSave({ ...banner, bannerSrc, active: isActive });
        closeModal();
    };

    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='w-full'>
                <div className='flex items-start justify-between w-full'>
                    <ImageIcon />
                    <Button
                        variant='secondaryGray'
                        size='lg'
                        className='w-fit rounded-full p-0 border-none active:shadow-none'
                        onClick={closeModal}
                    >
                        <XClose />
                    </Button>
                </div>
                <div className="mt-4">
                    <h1 className='text-lg text-Gray-900 font-bold'>Edit Banner</h1>
                    <p className='text-sm text-gray-600 font-regular mt-1'>Create and customize a new banner to enhance your app's visual appeal and engage your users effectively.</p>
                </div>
            </div>
            <div className='w-full'>
                <ImageSelector isImagePreview imageSrc={bannerSrc} setImageSrc={setBannerSrc} />
            </div>
            <div className='w-full flex items-center gap-3'>
                <Toggle checked={isActive} onChange={() => setIsActive(prev => !prev)} />
                <div>
                    <p className='text-md text-Gray-700 font-medium'>Is Active</p>
                    <p className='text-md text-Gray-600 font-regular mt-[2px]'>Control whether it is active and visible to users.</p>
                </div>
            </div>
            <hr className='w-full bg-[#EAECF0]' />
            <div className='w-full flex items-center justify-end gap-3'>
                <Button
                    variant='secondaryGray'
                    size='lg'
                    className='w-fit'
                    onClick={closeModal}
                >
                    Cancel
                </Button>
                <Button
                    variant='primary'
                    size='lg'
                    className='w-fit'
                    onClick={handleSave}
                >
                    Save Changes
                </Button>
            </div>
        </div>
    );
};

export default EditBannerModal;