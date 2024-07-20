'use client'

import React from 'react';

import { useModal } from '@/context/ModalContext';

import { Button } from '@/components/UI/Button';

import { PasscodeLock, XClose } from '@/components/icons';

import MemberCredentials from '@/components/MemberCredentials';

const MemberCredentialsModal = ({ memberName = 'Mohamed Samahi', memberEmail }: { memberName: string, memberEmail: string }) => {
    const { closeModal } = useModal();

    return (
        <div className='flex flex-col items-center gap-8'>
            <div className='w-full'>
                <div className='flex items-start justify-between w-full'>
                    <div className='flex justify-center w-full'>
                        <div className='rounded-full border-8 border-Brand-50 bg-Brand-100 p-3'>
                            <PasscodeLock stroke='#002949' width={24} height={24} />
                        </div>
                    </div>
                    <Button
                        variant='secondaryGray'
                        size='lg'
                        className='w-fit rounded-full p-0 border-none active:shadow-none'
                        onClick={closeModal}
                    >
                        <XClose />
                    </Button>
                </div>
                <div className="mt-4 text-center">
                    <h1 className='text-lg text-Gray-900 font-bold'>“{memberName}” Membership Credentials</h1>
                    <p className='text-sm text-gray-600 font-regular mt-1'>The member created and we have sent to his email the password to sign in.</p>
                </div>
            </div>
            <MemberCredentials memberEmail={memberEmail} />
        </div>
    )
}

export default React.memo(MemberCredentialsModal);