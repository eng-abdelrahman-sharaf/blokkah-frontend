'use client'

import React from 'react'

import { useModal } from '@/context/ModalContext';

import { Button } from '@/components/UI/Button'

import { UserPlus, XClose } from '@/components/icons'

import Input from '@/components/UI/Input';
import Toggle from '@/components/UI/Toggle';
import RoleSelector from '@/components/RoleSelector';

const roles = ['Super Admin', 'Admin', 'Marketing', 'Customer Service', 'Quality Assurance'];

const NewMemberModal = () => {
    const { closeModal } = useModal();

    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='w-full'>
                <div className='flex items-start justify-between w-full'>
                    <UserPlus />
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
                    <h1 className='text-lg text-Gray-900 font-bold'>New Member</h1>
                    <p className='text-sm text-gray-600 font-regular mt-1'>Add a new member and give him access to your dashboard.</p>
                </div>
            </div>
            <form className='flex flex-col items-center gap-4 w-full'>
                <Input
                    inputType='text'
                    label='Full Name'
                    placeholder='e.g Ahmed Ali'
                />
                <Input
                    inputType='email'
                    label='Email'
                    placeholder='ahmed.ali@works.com'
                />
                <div className='max-w-[32.5rem] w-full'>
                    <RoleSelector selectList={roles} label='Role' />
                </div>
                <div className='w-full flex items-center gap-3'>
                    <Toggle />
                    <div>
                        <p className='text-md text-Gray-700 font-medium'>Is Active</p>
                        <p className='text-md text-Gray-600 font-regular mt-[2px]'>Control whether he is active and can access the dashboard.</p>
                    </div>
                </div>
                <hr className='w-full bg-[#EAECF0] my-1' />
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
                        Publish
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default NewMemberModal