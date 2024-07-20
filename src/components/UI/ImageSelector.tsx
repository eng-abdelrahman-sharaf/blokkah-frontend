'use client'

import React, { useState, ChangeEvent, useRef } from 'react';

import Image from 'next/image';

import { cn } from '@/lib/utils';

import { Trash, UploadCloud } from '@/components/icons';

type ImageSelectorProps = {
    isImagePreview?: boolean,
    imageSrc?: string | null,
    setImageSrc?: React.Dispatch<React.SetStateAction<string | null>>
}

const ImageSelector: React.FC<ImageSelectorProps> = ({ isImagePreview = false, imageSrc, setImageSrc }) => {
    const [internalImagePreview, setInternalImagePreview] = useState<string | null>(null);
    const [errorMessage, setErrorMessage] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const validImageTypes = ['image/svg+xml', 'image/png', 'image/jpeg', 'image/gif'];
    const maxWidth = 800;
    const maxHeight = 400;

    const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
            if (!validImageTypes.includes(file.type)) {
                setErrorMessage('Invalid file type. Please upload an SVG, PNG, JPG, or GIF.');
                setImageSrc ? setImageSrc(null) : setInternalImagePreview(null);
                return;
            }

            const img = new window.Image();
            img.onload = () => {
                if (img.width > maxWidth || img.height > maxHeight) {
                    setErrorMessage(`Image dimensions should not exceed ${maxWidth}x${maxHeight}px.`);
                    setImageSrc ? setImageSrc(null) : setInternalImagePreview(null);
                } else {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                        setImageSrc ? setImageSrc(reader.result as string) : setInternalImagePreview(reader.result as string);
                        setErrorMessage(null);
                    };
                    reader.readAsDataURL(file);
                }
            };
            img.onerror = () => {
                setErrorMessage('Failed to load the image.');
                setImageSrc ? setImageSrc(null) : setInternalImagePreview(null);
            };
            img.src = URL.createObjectURL(file);
        } else {
            setImageSrc ? setImageSrc(null) : setInternalImagePreview(null);
            setErrorMessage(null);
        }
    };

    const handleTrash = (event: React.MouseEvent<HTMLDivElement>) => {
        event.stopPropagation();
        setImageSrc ? setImageSrc(null) : setInternalImagePreview(null);
        setErrorMessage(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const preview = setImageSrc ? imageSrc : internalImagePreview;

    return (
        <React.Fragment>
            <div className={
                cn(
                    "max-w-[32.5rem] w-full max-h-[200px] h-full flex items-center justify-center border border-Gray-200 rounded-lg overflow-hidden",
                    { 'px-6 py-4 max-w-[370px]': imageSrc },
                    { 'p-5': isImagePreview },
                    { 'px-6 py-4': !preview }
                )
            }>

                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden -z-10"
                    id="image-upload"
                    name='image-upload'
                    ref={fileInputRef}
                />
                <label htmlFor="image-upload" className="cursor-pointer w-full h-full">
                    <div>
                        {isImagePreview ? (preview ? (
                            <div className='relative'>
                                <Image
                                    src={preview}
                                    alt="Selected"
                                    width={460}
                                    height={160}
                                    className="max-w-[460px] w-full max-h-[160px] h-full object-cover"
                                />
                                <div
                                    onClick={handleTrash}
                                    className='absolute -top-2 -right-2 rounded-full bg-white p-2 flex items-center justify-center gap-2'
                                >
                                    <Trash />
                                </div>
                            </div>
                        ) : <ImageSelectorWrapper />) :
                            (
                                <ImageSelectorWrapper />
                            )}
                    </div>
                </label>
            </div>
            {errorMessage && (
                <div className='text-sm font-medium mt-[6px] text-Error-500'>
                    {errorMessage}
                </div>
            )}
        </React.Fragment>
    );
};

export default React.memo(ImageSelector);

const ImageSelectorWrapper = () => {
    return (
        <div className='flex flex-col items-center gap-3'>
            <UploadCloud />
            <div className='text-xs text-Gray-600 text-center'>
                <p>
                    <span className='text-sm text-Brand-700 font-semibold'>
                        Click to upload&nbsp;
                    </span>
                    <span className='text-sm'>
                        or drag and drop
                    </span>
                </p>
                <p className='mt-1'>
                    SVG, PNG, JPG or GIF (max. 800x400px)
                </p>
            </div>
        </div>
    );
}