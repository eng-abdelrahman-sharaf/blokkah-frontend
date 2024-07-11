'use server'

import { redirect } from "next/navigation"

export const adminDashboardLoginHandler = async () => {
    'use server'
    //  TODO: implement submission logic
    redirect('/forget-password')
}

export const forgetPasswordRequestHandler = async () => {
    'use server'
    //  TODO: implement submission logic
    redirect('/account-verification')
}

export const otpVerificationHandler = async () => {
    'use server'
    //  TODO: implement submission logic
    redirect('/')
}