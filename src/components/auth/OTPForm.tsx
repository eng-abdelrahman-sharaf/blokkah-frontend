'use client'

import React from 'react';

import { useAuthContext } from '@/context/AuthContext';

import { backToLoginHandler, otpVerificationHandler } from '@/actions';

import useOTP from '@/hooks/useOTP';

import AuthFormsHeader from './AuthFormsHeader';

import Input, { InputType } from '@/components/UI/Input';
import { Button } from '@/components/UI/Button';

import Arrow from '@/components/icons/Arrow';

const OTPForm: React.FC = () => {
    const { email } = useAuthContext();
    const { otp, inputRefs, handleOnChange, handleOnKeyDown } = useOTP(7);

    return (
        <div className='main-form-box-wrapper'>
            <AuthFormsHeader
                formType='account-verification'
                email={email}
            />
            <form
                action={otpVerificationHandler}
                className='form-content-wrapper'
            >
                <div className='w-full'>
                    <div className="otp-inputs-wrapper flex space-x-2">
                        {[...Array(7)].map((_, index) => (
                            <Input
                                key={index}
                                ref={(el) => inputRefs.current[index] = el as any}
                                id={`id-otp_input-${index + 1}`}
                                placeholder={index === 3 ? '-' : '0'}
                                inputType={InputType.otp}
                                name={`otp-input-${index + 1}`}
                                value={otp[index]}
                                onChange={(event) => handleOnChange(event, index)}
                                onKeyDown={(e) => handleOnKeyDown(e, index)}
                                disabled={index === 3}
                                readOnly={index === 3}
                                minLength={1}
                                maxLength={1}
                                aria-label={`OTP input ${index + 1}`}
                                aria-labelledby={`otp-input-${index + 1}-label`}
                            />
                        ))}
                    </div>
                    <p className='mt-[6px] text-left text-sm text-Gray-600'>Didn’t receive your code? <button className='font-bold text-Brand-600'>Resend it.</button></p>
                </div>
                <div className="buttons-wrapper">
                    <Button
                        variant={'primary'}
                        size={'2xl'}
                        type='submit'
                        className='w-full'
                    >
                        Verify
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
    );
}

export default OTPForm;