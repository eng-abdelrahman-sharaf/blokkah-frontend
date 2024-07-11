'use client'

import React, { ChangeEventHandler, ReactNode, forwardRef, KeyboardEventHandler } from 'react';
import AlertCircle from '@/components/icons/AlertCircle';

export enum InputType {
    text = 'text',
    email = 'email',
    password = 'password',
    number = 'number',
    otp = 'otp'
}

interface InputInterface {
    id: string;
    label?: string;
    type: InputType;
    placeholder?: string;
    disabled?: boolean;
    error?: boolean;
    startIcon?: ReactNode;
    endIcon?: ReactNode;
    hint?: boolean;
    name: string;
    value?: string;
    onChange?: ChangeEventHandler<HTMLInputElement>;
    onKeyDown?: KeyboardEventHandler<HTMLInputElement>;
    onEndIconClick?: () => void;
}

const Input = forwardRef<HTMLInputElement, InputInterface>(({
    id,
    label,
    type,
    placeholder,
    disabled = false,
    error,
    startIcon,
    endIcon,
    hint,
    name,
    value,
    onChange,
    onKeyDown,
    onEndIconClick,
}, ref) => {

    return (
        <div className="flex flex-col items-start w-full">
            {label && (
                <label
                    htmlFor={id}
                    className="text-Gray-700 text-sm font-medium mb-[6px]"
                >
                    {label}
                </label>
            )}
            <div className="relative w-full bg-white">
                {type !== InputType.otp && startIcon && (
                    <div className="absolute left-[14px] top-1/2 -translate-y-1/2 text-gray-400 z-10 max-w-[20px] max-h-[20px]">
                        {startIcon}
                    </div>
                )}
                <input
                    ref={ref}
                    aria-invalid={error}
                    type={type === InputType.otp ? 'text' : type}
                    id={id}
                    name={name}
                    className={`
                        ${type === InputType.otp ? '' : startIcon ? 'pl-[42px]' : 'pl-[14px]'}
                        ${type === InputType.otp ? 'pl-2' : endIcon ? 'pr-[42px]' : 'pr-[14px]'}
                        ${type === InputType.otp ? 'text-center max-h-[64px] max-w-[64px] text-[48px] p-2' : 'py-3'}
                        w-full
                        ${type === InputType.otp && disabled ? null : 'border'}
                        ${error ? 'border-Error-300' : 'border-Gray-300 focus:border-Brand-300'}
                        text-Gray-500
                        rounded-lg
                        focus:outline-none
                        ${type === InputType.otp && disabled ? null : 'shadow-inputBoxShadow'}
                        focus:shadow-inputFocusedBoxShadow
                        transition-shadow
                        transition-colors
                        bg-white
                    `}
                    placeholder={placeholder}
                    disabled={disabled}
                    value={type === InputType.otp ? (isNaN(parseInt(value as string)) ? '' : parseInt(value as string)) : value}
                    onChange={onChange}
                    onKeyDown={onKeyDown}
                    maxLength={type === InputType.otp ? 1 : undefined}
                    minLength={type === InputType.otp ? 1 : undefined}
                />

                {type !== InputType.otp && (error ? (
                    <div className="absolute right-[14px] top-1/2 -translate-y-1/2 text-gray-400 z-10 max-w-[20px] max-h-[20px]">
                        <div title='error message'>
                            <AlertCircle />
                        </div>
                    </div>
                ) : endIcon && (
                    <div
                        onClick={onEndIconClick}
                        className="absolute right-[14px] top-1/2 -translate-y-1/2 text-gray-400 z-10 max-w-[20px] max-h-[20px] cursor-pointer"
                    >
                        {endIcon}
                    </div>
                ))}
            </div>
            {error && (
                <div className="text-Brand-100 text-sm font-medium mt-[6px]">
                    Error message
                </div>
            )}
            {hint && (
                <div className="text-Gray-500 text-sm font-medium mt-[6px]">
                    Hint message
                </div>
            )}
        </div>
    );
});

Input.displayName = 'Input';

export default Input;