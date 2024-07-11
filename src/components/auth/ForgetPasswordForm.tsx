'use client'

import React from 'react'

import AuthFormsHeader from './AuthFormsHeader'

import Input, { InputType } from '@/components/UI/Input'
import { Mail } from '@/components/icons';

import { useAuthContext } from '@/context/AuthContext';

import { forgetPasswordRequestHandler } from '@/actions';

const ForgetPasswordForm = () => {
    const { email, setEmail } = useAuthContext();

    return (
        <div className='main-form-box-wrapper'>
            <AuthFormsHeader formType='forget-password' />
            <div className='form-content-wrapper'>
                <form
                    action={forgetPasswordRequestHandler}
                    className='form-content-wrapper'
                >
                    <div className="inputs-wrapper">
                        <Input
                            id='login_email_input'
                            label='Email'
                            placeholder='admin@blokka.io'
                            type={InputType.email}
                            startIcon={<Mail />}
                            name='email-input'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="buttons-wrapper">
                        {/* dummy buttons until the UI button component is ready */}
                        <button type='submit' className='w-full h-[48px] rounded-lg bg-Brand-600 text-Gray-25'>Find My Account</button>
                        <button className='w-full h-[48px] rounded-lg text-Gray-700 border border-Gray-300'>Back To Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPasswordForm