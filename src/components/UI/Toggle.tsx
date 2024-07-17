import React, { forwardRef } from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from "@/app/lib/utils";

const toggleVariants = cva(
    "bg-Gray-100 p-[2px] h-fit inline-flex items-center rounded-full cursor-pointer transition-all",
    {
        variants: {
            size: {
                sm: "w-9",
                md: "w-11",
            },
            disabled: {
                true: "cursor-not-allowed",
                false: "hover:bg-Gray-200 active:shadow-activeElementBoxShadow"
            },
            checked: {
                true: "bg-Brand-600",
                false: ""
            },
        },
        defaultVariants: {
            size: 'md',
            disabled: false,
            checked: false
        },
    }
);

const circleVariants = cva(
    "bg-white rounded-full transition-transform",
    {
        variants: {
            size: {
                sm: "w-4 h-4",
                md: "w-5 h-5",
            },
            checked: {
                true: "transform translate-x-full",
                false: "transform translate-x-0"
            },
        },
        defaultVariants: {
            size: 'md',
            checked: false
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
    disabled,
    checked,
    ...props
}, ref) => {
    return (
        <label className={cn(toggleVariants({ size, disabled, checked }))}>
            <input
                ref={ref}
                type="checkbox"
                className="sr-only"
                disabled={disabled}
                checked={checked}
                {...props}
            />
            <span
                style={{
                    filter: 'drop-shadow(0px 1px 2px rgba(16, 24, 40, 0.06)) drop-shadow(0px 1px 3px rgba(16, 24, 40, 0.10))'
                }}
                className={cn(circleVariants({ size, checked }))}
            />
        </label>
    );
});

Toggle.displayName = 'Toggle';

export default React.memo(Toggle);