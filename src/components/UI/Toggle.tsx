import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/app/lib/utils";

const toggleVariants = cva(
    `bg-Gray-100 
    hover:bg-Gray-200 
    has-[input:checked] 
    has-[input:checked]:bg-Brand-600 
    active:shadow-activeElementBoxShadow 
    has-[input:disabled]:shadow-none 
    has-[input:disabled]:cursor-not-allowed 
    [&:has(input:checked)>span]:translate-x-full
    p-[2px] 
    h-fit 
    inline-flex 
    items-center 
    rounded-full 
    cursor-pointer 
    transition-all
    `,
    {
        variants: {
            size: {
                sm: "w-9",
                md: "w-11",
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);

const circleVariants = cva(
    "bg-white rounded-full transform transition-transform translate-x-0",
    {
        variants: {
            size: {
                sm: "w-4 h-4",
                md: "w-5 h-5",
            },
        },
        defaultVariants: {
            size: 'md',
        },
    }
);

interface IToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'checked'>, VariantProps<typeof toggleVariants> {
    size?: 'sm' | 'md';
    checked?: boolean;
    disabled?: boolean;
}

const Toggle = forwardRef<HTMLInputElement, IToggleProps>(({
    size,
    ...props
}, ref) => {
    return (
        <label className={cn(toggleVariants({ size }))}>
            <input
                ref={ref}
                type="checkbox"
                className="sr-only"
                {...props}
            />
            <span
                style={{
                    filter: 'drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06)) drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.10))'
                }}
                className={cn(circleVariants({ size }))}
            />
        </label>
    );
});

Toggle.displayName = 'Toggle';

export default React.memo(Toggle);