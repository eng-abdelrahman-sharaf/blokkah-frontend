'use client'

import React from 'react'

import { useModal } from '@/context/ModalContext';

import toast from 'react-hot-toast';

import Input from './UI/Input'
import { Button } from './UI/Button'

import { Lock, Mail } from './icons';

const MemberCredentials = ({ memberEmail }: { memberEmail: string }) => {
    const { closeModal } = useModal();

    const password = 'password coming from backend';

    const handleCopyToClipboard = () => {
        const textToCopy = `${memberEmail}\n ${password}`;
        navigator.clipboard.writeText(textToCopy)
            .then(() => {
                toast.success('Credentials copied to clipboard!');
            })
            .catch(() => {
                toast.error('Failed to copy credentials.');
            });
    };
    return (
        <React.Fragment>
            <div className='flex flex-col items-center gap-2 w-full'>
                <Input
                    inputType='text'
                    label='Account Info'
                    readOnly
                    value={memberEmail}
                    startComponent={<Mail />}
                />
                <Input
                    inputType='text'
                    readOnly
                    value={password}
                    startComponent={<Lock />}
                />
            </div>
            <div className='w-full flex items-center gap-3'>
                <Button
                    variant='secondaryGray'
                    size='lg'
                    onClick={closeModal}
                >
                    Okay
                </Button>
                <Button
                    variant={'success'}
                    size='lg'
                    onClick={handleCopyToClipboard}
                >
                    Copy Mail and Password
                </Button>
            </div>
        </React.Fragment>
    )
}

export default MemberCredentials