'use client'

import React from 'react'

import { useAuthContext } from '@/context/AuthContext';

import { backToLoginHandler, forgetPasswordRequestHandler } from '@/actions';

import AuthFormsHeader from './AuthFormsHeader'

import Input, { InputType } from '@/components/UI/Input'
import { Button } from '@/components/UI/Button';

import { Arrow, Mail } from '@/components/icons';

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
                        >
                            Find My Account
                        </Button>
                        <Button
                            variant={'secondaryGray'}
                            size={'2xl'}
                            type='submit'
                            icon={'leading'}
                            customIconComponent={<Arrow />}
                            formAction={backToLoginHandler}
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