'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

import ImageSelector from '@/components/UI/ImageSelector'
import Input from '@/components/UI/Input'

import RoleSelector from '@/components/RoleSelector'

const roles = ['Super Admin', 'Admin', 'Marketing', 'Customer Service', 'Quality Assurance'];

const AccountDetails = () => {
    const [imageSrc, setImageSrc] = useState<string | null>(null);

    return (
        <div className='settings-frames-wrapper'>
            {/* avatar */}
            <div className='settings-single-frame-wrapper'>
                <div className='settings-single-frame-text-wrapper'>
                    <h3 className='settings-single-frame-heading'>Avatar</h3>
                    <p className='settings-single-frame-text'>Update your dashboard logo.</p>
                </div>
                <div className='flex items-center gap-6 w-full'>
                    {imageSrc &&
                        <Image
                            src={imageSrc}
                            alt='Avatar'
                            width={126}
                            height={126}
                            className='rounded-xl max-w-[126px] max-h-[126px] w-full h-full'
                        />
                    }
                    <ImageSelector imageSrc={imageSrc} setImageSrc={setImageSrc} />
                </div>
            </div>

            <hr />

            {/* name */}
            <div className='settings-single-frame-wrapper'>
                <div className='settings-single-frame-text-wrapper'>
                    <h3 className='settings-single-frame-heading'>Full Name</h3>
                    <p className='settings-single-frame-text'>Enter your full name.</p>
                </div>
                <div className='max-w-[32.5rem] w-full'>
                    <Input
                        inputType='text'
                        placeholder='Your Name'
                    />
                </div>
            </div>

            <hr />

            {/* Email Address */}
            <div className='settings-single-frame-wrapper'>
                <div className='settings-single-frame-text-wrapper'>
                    <h3 className='settings-single-frame-heading'>Email Address</h3>
                    <p className='settings-single-frame-text'>Your email reasonable for login.</p>
                </div>
                <div className='max-w-[32.5rem] w-full'>
                    <Input
                        inputType='email'
                        placeholder='admin@blokka.io'
                    />
                </div>
            </div>

            <hr />

            {/* Role */}
            <div className='settings-single-frame-wrapper'>
                <div className='settings-single-frame-text-wrapper'>
                    <h3 className='settings-single-frame-heading'>Role</h3>
                    <p className='settings-single-frame-text'>Your role define your access to this dashboard.</p>
                </div>
                <div className='max-w-[32.5rem] w-full'>
                    <RoleSelector selectList={roles} />
                </div>
            </div>
        </div>
    )
}

export default AccountDetails