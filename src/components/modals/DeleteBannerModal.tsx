'use client'

import React from 'react'

import { useModal } from '@/context/ModalContext';

import { Button } from '@/components/UI/Button'

import { AlertCircle, XClose } from '@/components/icons'

const DeleteBannerModal = () => {
    const { closeModal } = useModal();

    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='w-full'>
                <div className='flex items-start justify-between w-full'>
                    <div className='flex justify-center w-full'>
                        <div className='rounded-full border-8 border-Error-50 bg-Error-100 p-3'>
                            <AlertCircle width={24} height={24} />
                        </div>
                    </div>
                    <Button
                        variant='secondaryGray'
                        size='lg'
                        className='w-fit rounded-full p-0 border-none active:shadow-none m-0'
                        onClick={closeModal}
                    >
                        <XClose />
                    </Button>
                </div>
                <div className="mt-4 text-center">
                    <h1 className='text-lg text-Gray-900 font-bold'>Delete Banner</h1>
                    <p className='text-sm text-gray-600 font-regular mt-1'>Are you sure you want to delete this post? This action cannot be undone.</p>
                </div>
            </div>
            <div className='w-full flex items-center justify-end gap-3'>
                <Button
                    variant='secondaryGray'
                    size='lg'
                    onClick={closeModal}
                >
                    Cancel
                </Button>
                <Button
                    variant={'error'}
                    size='lg'
                >
                    Delete
                </Button>
            </div>
        </div>
    )
}

export default DeleteBannerModal