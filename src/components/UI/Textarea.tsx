import React, { forwardRef } from 'react';

import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

interface ITextareaProps extends Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'type'>, VariantProps<typeof textAreaVariants> {
    label?: string;
    hintMessage?: string;
    error?: boolean;
    errorMessage?: string;
    disabled?: boolean;
    containerClassNames?: string
}

const textAreaVariants = cva(
    "flex items-center gap-2 shadow-sm border px-4 py-3 text-Gray-900 placeholder:text-Gray-500 rounded-lg bg-white focus:shadow-activeElementBoxShadow outline-none focus:outline-none font-regular text-md transition-colors transition-shadow",
    {
        variants: {
            error: {
                true: "border-Error-300 focus:border-Error-300",
                false: "border-Gray-300 focus:border-Brand-300"
            },
            disabled: {
                true: "bg-Gray-50",
                false: ""
            },
        },
        defaultVariants: {
            error: false,
            disabled: false,
        },
    }
);

const Textarea = forwardRef<HTMLTextAreaElement, ITextareaProps>(({
    id,
    label,
    error,
    hintMessage,
    errorMessage,
    disabled,
    className,
    containerClassNames,
    ...props
}, ref) => {
    return (
        <div className={cn("flex flex-col items-start w-full bg-white", containerClassNames)}>
            {/* input label */}
            {label ? (
                <label
                    htmlFor={id}
                    className="text-Gray-700 text-sm font-medium mb-[6px]"
                >
                    {label}
                </label>
            ) : null}

            {/* input container */}
            <textarea
                ref={ref}
                aria-invalid={error}
                className={cn(textAreaVariants({ error, disabled, className }))}
                {...props}
            />

            {(errorMessage || hintMessage) ?
                (
                    <div className={cn('text-sm font-medium mt-[6px]', { 'text-Error-500': error }, { 'text-Gray-600': hintMessage })}>
                        {errorMessage ? errorMessage : null}
                        {hintMessage ? hintMessage : null}
                    </div>
                )
                : null
            }
        </div>
    );
});

Textarea.displayName = 'Textarea';

export default Textarea;