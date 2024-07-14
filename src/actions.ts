'use server'

import { redirect } from "next/navigation"

export const adminDashboardLoginHandler = async (formData: FormData) => {
    'use server'
    //  TODO: implement submission logic
    const adminLoginFormData = {
        email: formData.get('email-input'),
        password: formData.get('password-input'),
        rememberMe: formData.get('remember-me')
    }

    redirect('/forget-password')
}

export const forgetPasswordRequestHandler = async (formData: FormData) => {
    'use server'
    //  TODO: implement submission logic
    const forgetPasswordFormData = {
        email: formData.get('email-input'),
        password: formData.get('password-input'),
    }

    redirect('/account-verification')
}

export const otpVerificationHandler = async (formData: FormData) => {
    // Extract OTP values from formData or from the state where otp is stored
    const otpValues = [...Array(7)].map((_, index) => formData.get(`otp-input-${index + 1}`) || '').filter(otp => {
        if (typeof otp === 'string' && otp.length > 0) return otp;
    });

    // Example of accessing the OTP values
    console.log('OTP Values:', otpValues);

    // Perform further logic like API call or redirection
    redirect('/');
}

export const backToLoginHandler = async () => {
    'use server'
    redirect('/login')
}