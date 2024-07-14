'use client'

import React, { useState } from 'react'

import AuthFormsHeader from './AuthFormsHeader';

import Input, { InputType } from '@/components/UI/Input';
import { Eye, EyeOff, Lock, Mail } from '@/components/icons';

import { useAuthContext } from '@/context/AuthContext';

import { adminDashboardLoginHandler } from '@/actions';
import { Button } from '@/components/UI/Button';
import Link from 'next/link';

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
                        inputType={InputType.email}
                        startComponent={<Mail />}
                        name='email-input'
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <Input
                        id='login_password_input'
                        label='Password'
                        placeholder='Enter Your Password'
                        inputType={showPassword ? InputType.text : InputType.password}
                        startComponent={<Lock />}
                        endComponent={
                            <div onClick={() => setShowPassword(prev => !prev)} className='cursor-pointer'>
                                {showPassword ? <EyeOff /> : <Eye />}
                            </div>
                        }
                        name='password-input'
                    />
                    <div className='flex items-center justify-between w-full mt-1'>
                        <label htmlFor="remember-me-input" className='flex items-center gap-2 text-sm font-medium text-Gray-700 select-none cursor-pointer'>
                            <input type="checkbox" name="remember-me" id="remember-me-input" className='border border-Gray-300 bg-white cursor-pointer' />
                            Remember me
                        </label>
                        <Link href='/forget-password' className='text-sm font-semibold text-Brand-700'>Forget password?</Link>
                    </div>
                </div>
                <Button
                    size={'2xl'}
                    type='submit'
                    variant={'primary'}
                    className='w-full'
                >
                    Sign in
                </Button>
            </form>
        </div>
    )
}

export default LoginForm;