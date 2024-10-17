import React, { ReactNode, forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/lib/utils";

import { AlertCircleIcon } from 'lucide-react';

export enum InputType {
    default = 'default',
    text = 'text',
    email = 'email',
    password = 'password',
    number = 'number',
    otp = 'otp',
    selector = 'selector',
    date = 'date'
}

interface IInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'>, VariantProps<typeof inputVariants> {
    label?: string;
    disabled?: boolean;
    startComponent?: ReactNode;
    endComponent?: ReactNode;
    hintMessage?: string;
    error?: boolean;
    errorMessage?: string;
    inputType?: 'text' | 'email' | 'password' | 'number' | 'otp' | 'selector' | 'date';
}


const inputVariants = cva(
    "flex items-center gap-2 shadow-xs border border-Gray-300 px-3.5 py-2.5 w-full text-Gray-900 placeholder:text-Gray-500 rounded-lg bg-white focus-within:shadow-activeElementBoxShadow focus-within:border-Brand-300",
    {
        variants: {
            error: {
                true: "border-Error-300 [&:has(input[aria-invalid=true])]:border-Error-300",
                false: ""
            },
            disabled: {
                true: "bg-Gray-50",
                false: ""
            },
            inputType: {
                text: "",
                email: "",
                password: "",
                number: "",
                otp: "max-w-[48px] max-h-[48px] px-1 sm:max-w-[64px] sm:max-h-[64px] w-full h-full sm:px-2 py-[2px]",
                selector: "",
                date: ""
            }
        },
        defaultVariants: {
            disabled: false,
            error: false,
            inputType: 'text'
        },
    }
);

const inputFieldVariants = cva(
    "flex-grow border-none outline-none focus:outline-none text-Gray-900 placeholder:text-Gray-500  text-md font-regular",
    {
        variants: {
            inputType: {
                otp: "w-full h-full text-3xl sm:text-5xl font-medium text-center",
                text: "",
                email: "",
                password: "",
                number: "",
                default: "",
                selector: "",
                date: ""
            }
        },
        defaultVariants: {
            inputType: 'default'
        },
    }
);

const Input = forwardRef<HTMLInputElement, IInputProps>(({
    id,
    label,
    startComponent,
    endComponent,
    disabled,
    error,
    hintMessage,
    errorMessage,
    inputType = 'text',
    ...props
}, ref) => {

    return (
        <div className="flex flex-col items-start w-full relative">
            {label ? (
                <label
                    htmlFor={id}
                    className="text-Gray-700 text-sm font-medium mb-[6px] select-none"
                >
                    {label}
                </label>
            ) : null}

            <div className={cn(inputVariants({ error, disabled , inputType }), "relative w-full input-container transition-[box-shadow,_color,_background-color,_border-color,_text-decoration-color,_fill,_stroke]")}>
                {startComponent ? (startComponent) : null}

                <input
                    ref={ref}
                    aria-invalid={error}
                    className={cn(inputFieldVariants({ inputType }))}
                    type={inputType}
                    {...props}
                />

                {(error || endComponent) ? (
                    error ? (
                        <AlertCircleIcon className='text-Error-500 w-4 h-4' />
                    ) : (endComponent ? endComponent : null)
                ) : null}
            </div>

            {(errorMessage || hintMessage) ? (
                <div className={cn('text-sm font-regular mt-[6px]', { 'text-Error-500': errorMessage }, { 'text-Gray-600': hintMessage })}>
                    {(error && errorMessage) ? errorMessage : null}
                    {hintMessage ? hintMessage : null}
                </div>
            ) : null}
        </div>
    );
});

Input.displayName = 'Input';

export default React.memo(Input);