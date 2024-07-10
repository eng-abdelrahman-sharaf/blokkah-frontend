import React from 'react'
import Logo from '@/components/icons/Logo';

const authFormTypes = {
    'login': {
        title: 'Log in to your account',
        text: 'Welcome back! Please enter your details.'
    },
    'forget-password': {
        title: 'Forgot Password',
        text: 'Please enter your email registered to Blokkah Systems.'
    },
    'account-verification': {
        title: 'Account Verification',
        text: 'We have found your email and sent you a verification code to hi@ahmed.com, please enter it ro reset your password'
    }
}

const AuthFormsHeader: React.FC<{ formType?: string }> = ({ formType }) => {

    return (
        <div className='flex flex-col items-center gap-6 w-full'>
            <Logo />
            <div>
                <h1 className='text-[30px] text-center leading-[38px] font-bold text-[#002949]'>Log in to your account</h1>
                <p className='text-[#475467] text-lg leading-7'>Welcome back! Please enter your details.</p>
            </div>
        </div>
    )
}

export default AuthFormsHeader;