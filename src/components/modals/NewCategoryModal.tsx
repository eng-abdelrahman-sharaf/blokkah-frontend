'use client'

import React from 'react'

import { useModal } from '@/context/ModalContext';

import { Button } from '@/components/UI/Button';

import { ImageIcon, XClose } from '@/components/icons';
import ImageSelector from '@/components/UI/ImageSelector';
import Toggle from '@/components/UI/Toggle';
import Input from '../UI/Input';

const NewCategoryModal = () => {
    const { closeModal } = useModal();

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
                    <h1 className='text-lg text-Gray-900 font-bold'>New Category</h1>
                    <p className='text-sm text-gray-600 font-regular mt-1'>Create and customize a new banner to enhance your app's visual appeal and engage your users effectively.</p>
                </div>
            </div>
            <div className='flex flex-col items-center w-full gap-4'>
                <Input
                    label='Category Name'
                    placeholder='Enter category name'
                />
                <div className='w-full'>
                    <ImageSelector />
                </div>
                <div className='w-full flex items-center gap-3'>
                    <Toggle />
                    <div>
                        <p className='text-md text-Gray-700 font-medium'>Is Active</p>
                        <p className='text-md text-Gray-600 font-regular mt-[2px]'>Control whether it is active and visible to users.</p>
                    </div>
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
                >
                    Create
                </Button>
            </div>
        </div>)
}

export default NewCategoryModal