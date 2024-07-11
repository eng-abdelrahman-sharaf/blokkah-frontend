'use client'

import React, { useState } from 'react'

import AuthFormsHeader from './AuthFormsHeader';

import Input, { InputType } from '@/components/UI/Input';
import { Eye, EyeOff, Lock, Mail } from '@/components/icons';

import { useAuthContext } from '@/context/AuthContext';

import { adminDashboardLoginHandler } from '@/actions';

const LoginForm = () => {
    const { email, setEmail } = useAuthContext();
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className='main-form-box-wrapper'>
            <AuthFormsHeader formType='login' />
            <form
                action={adminDashboardLoginHandler}
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
                    <Input
                        id='login_password_input'
                        label='Password'
                        placeholder='Enter Your Password'
                        type={showPassword ? InputType.text : InputType.password}
                        startIcon={<Lock />}
                        endIcon={showPassword ? <EyeOff /> : <Eye />}
                        name='password-input'
                        onEndIconClick={() => setShowPassword(!showPassword)}
                    />
                </div>
                <button type='submit' className='w-full h-[48px] rounded-lg bg-Gray-800 text-Gray-25'>Submit</button>
            </form>
        </div>
    )
}

export default LoginForm