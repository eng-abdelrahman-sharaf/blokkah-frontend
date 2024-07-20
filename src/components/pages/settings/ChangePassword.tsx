import React from 'react'

import Input from '@/components/UI/Input'

import { Lock } from '@/components/icons'

const ChangePassword = () => {
    return (
        <div className='settings-frames-wrapper'>
            {/* Old Password */}
            <div className='settings-single-frame-wrapper'>
                <div className='settings-single-frame-text-wrapper'>
                    <h3 className='settings-single-frame-heading'>Old Password</h3>
                    <p className='settings-single-frame-text'>We need it to make sure that it’s you.</p>
                </div>
                <div className='max-w-[32.5rem] w-full'>
                    <Input
                        inputType='password'
                        placeholder='Old Password'
                        startComponent={<Lock />}
                    />
                </div>
            </div>

            <hr />

            {/* New Password */}
            <div className='settings-single-frame-wrapper'>
                <div className='settings-single-frame-text-wrapper'>
                    <h3 className='settings-single-frame-heading'>New Password</h3>
                    <p className='settings-single-frame-text'>Enter your new password twice and choosea strong password having numbers, characters and symbols.</p>
                </div>
                <div className='max-w-[32.5rem] w-full flex flex-col items-center gap-3'>
                    <Input
                        inputType='password'
                        placeholder='New Password'
                        startComponent={<Lock />}
                    />
                    <Input
                        inputType='password'
                        placeholder='Confirm New Password'
                        startComponent={<Lock />}
                    />
                </div>
            </div>
        </div>
    )
}

export default ChangePassword;