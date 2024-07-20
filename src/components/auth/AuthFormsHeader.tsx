import React, { ReactNode } from 'react'

import Logo from '@/components/icons/Logo';

const AuthFormsHeader: React.FC<{ formType: string, email?: string }> = React.memo(({ formType, email = 'hi@ahmed.com' }) => {
    const authFormTypes: { [key: string]: { title: string, parargraphElement: ReactNode } } = {
        'login': {
            title: 'Log in to your account',
            parargraphElement: <p className='text-Gray-600 text-lg'>Welcome back! Please enter your details.</p>
        },
        'forget-password': {
            title: 'Forgot Password',
            parargraphElement: <p className='text-Gray-600 text-lg'>Please enter your email registered to Blokkah Systems.</p>
        },
        'account-verification': {
            title: 'Account Verification',
            parargraphElement: <p className='text-Gray-600 text-lg'>We have found your email and sent you a verification code to <span className='font-bold'>{email}</span>, please enter it ro reset your password</p>
        }
    }

    return (
        <AuthFormsHeaderWrapper>
            <h1 className='text-[30px] text-center leading-[38px] font-bold text-[#002949]'>{authFormTypes[formType].title}</h1>
            {authFormTypes[formType].parargraphElement}
        </AuthFormsHeaderWrapper>
    )
});

export default AuthFormsHeader;

const AuthFormsHeaderWrapper: React.FC<{ children: ReactNode }> = ({ children }) => {

    return (
        <div className='flex flex-col items-center gap-6 w-full'>
            <Logo />
            <div className='text-center'>
                {children}
            </div>
        </div>
    )
}