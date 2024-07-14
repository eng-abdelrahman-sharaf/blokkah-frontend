'use client'

import React from 'react'

import AuthFormsHeader from './AuthFormsHeader'

import Input, { InputType } from '@/components/UI/Input'
import { Mail } from '@/components/icons';

import { useAuthContext } from '@/context/AuthContext';

import { backToLoginHandler, forgetPasswordRequestHandler } from '@/actions';
import { Button } from '../UI/Button';
import Arrow from '../icons/Arrow';

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
                            inputType={InputType.email}
                            startComponent={<Mail />}
                            name='email-input'
                            value={email}
                            onChange={(event) => setEmail(event.target.value)}
                        />
                    </div>
                    <div className="buttons-wrapper">
                        <Button
                            size={'2xl'}
                            type='submit'
                            variant={'primary'}
                            className='w-full'
                        >
                            Find My Account
                        </Button>
                        <Button
                            variant={'secondaryGray'}
                            size={'2xl'}
                            type='submit'
                            icon={'leading'}
                            formAction={backToLoginHandler}
                            className='w-full'
                        >
                            Back To Login
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ForgetPasswordForm