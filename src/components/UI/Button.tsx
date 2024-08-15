import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/app/lib/utils";

//TODO - delete this line
const className = "shadow-none "

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-semibold transition-all active:shadow-activeElementBoxShadow active:scale-[.98] disabled:pointer-events-none w-full",
  {
    variants: {
      variant: {
        primary:
          "bg-Brand-600 text-white shadow-xs border-Brand-600\
            hover:bg-Brand-700\
              active:bg-Brand-600 active:shadow-[0px_0px_0px_4px_rgba(227,246,255,1),0px_1px_2px_0px_rgba(16,24,40,0.05)]\
            disabled:bg-Brand-200",

        secondaryGray:
          "bg-white  text-Gray-700 shadow-xs border-Gray-300\
            hover:bg-Gray-50  hover:text-Gray-800\
            active:bg-white active:shadow-[0px_0px_0px_4px_rgba(242,244,247,1),0px_1px_2px_0px_rgba(16,24,40,0.05)]\
            disabled:bg-white disabled:text-Gray-300 disabled:border-Gray-200",
        tertiaryGray:
          "text-Gray-600 border-0\
          hover:bg-Gray-50 text-Gray-700\
          active:text-Gray-500 shadow-none\
          disabled:text-Gray-300",
      },
      size: {
        sm: "py-2 px-[0.875rem] [&>*:first-child]:w-5",
        md: "py-[0.625rem] px-4 [&>*:first-child]:w-5",
        lg: "py-[0.625rem] px-[1.125rem] [&>*:first-child]:w-5",
        xl: "py-3 px-5 [&>*:first-child]:w-5",
        "2xl": "py-4 px-7 [&>*:first-child]:w-6",
      },
      icon: {
        leading: "",
        trailing: "flex-row-reverse",
        false: "[&>*:first-child]:hidden",
        only: "[&>*:last-child]:hidden",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "sm",
      icon: false,
    },
  }
);

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
  iconSrc?: string;
  customIconComponent?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      icon,
      size,
      iconSrc = undefined,
      customIconComponent = null,
      asChild = false,
      ...props
    },
    ref
  ) => {
    const Comp = asChild ? Slot : "button";
    const variants = { variant, size, icon, className };

    return asChild ? (
      <Comp className={cn(buttonVariants(variants))} ref={ref} {...props} />
    ) : (
      <Comp className={cn(buttonVariants(variants))} ref={ref} {...props}>
        <div>
          {customIconComponent ? customIconComponent : null}
          {iconSrc ? <img src={iconSrc} alt="icon" /> : null}
        </div>
        <span>{props.children}</span>
      </Comp>
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
