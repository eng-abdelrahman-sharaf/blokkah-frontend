import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

//TODO - delete this line
const className = "shadow-none transition-all scale-100 text-Brand-700 bg-Brand-50 "

/** default classes to put into consideration if they don't fit in the button variant
 * border
 * transition-all 
 * active:shadow-activeElementBoxShadow
 * active:scale-[.98]
 * w-full
 */
/** ! Important :
 * the svg is [&>*:first-child>*]:
 * the div containing the svg is [&>*:first-child]:
 *  */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg border font-semibold transition-all outline-none [&>*:first-child>*]:h-auto active:shadow-activeElementBoxShadow active:scale-[.98] disabled:pointer-events-none w-full disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-Brand-600 text-white shadow-xs border-Brand-600\
            hover:bg-Brand-700\
              active:bg-Brand-600 active:shadow-[0px_0px_0px_4px_rgba(227,246,255,1),0px_1px_2px_0px_rgba(16,24,40,0.05)]\
            disabled:bg-Brand-200 disabled:border-Brand-200",
        secondaryGray:
          "bg-white  text-Gray-700 shadow-xs border-Gray-300\
            hover:bg-Gray-50  hover:text-Gray-800\
            active:bg-white active:shadow-[0px_0px_0px_4px_rgba(242,244,247,1),0px_1px_2px_0px_rgba(16,24,40,0.05)]\
            disabled:bg-white disabled:text-Gray-300 disabled:border-Gray-200",
        error:
          "bg-Error-600 shadow-xs border-Error-600 text-white\
            hover:bg-Error-700\
            active:bg-Error-700\
            disabled:bg-Error-200 disabled:text-Gray-300 disabled:border-Error-200",
        success:
          "bg-Success-600 shadow-xs border-Success-600 text-white\
            hover:bg-Success-700\
            active:bg-Success-700\
            disabled:bg-Success-200 disabled:text-Gray-300 disabled:border-Success-200",
        tertiaryColor:
          "text-Brand-700\
          hover:bg-Brand-50\
          disabled:text-Gray-300",

        tertiaryGray:
          "text-Gray-600\
          hover:bg-Gray-50 hover:text-Gray-700\
          active:text-Gray-500\
          disabled:text-Gray-300",
        linkGray:
          "text-Gray-600\
          hover:text-Gray-700\
          active:text-Gray-600\
          disabled:text-Gray-300",
        dropDownTrigger:
          "bg-white data-[checked=true]:text-Gray-900 data-[checked=false]:text-Gray-500 text-start text-medium font-medium",
        custom: "",
      },
      size: {
        sm: "py-2 px-[0.875rem] [&>*:first-child>*]:w-5",
        md: "py-[0.625rem] px-4 [&>*:first-child>*]:w-5",
        lg: "py-[0.625rem] px-[1.125rem] [&>*:first-child>*]:w-5",
        xl: "py-3 px-5 [&>*:first-child>*]:w-5",
        "2xl": "py-4 px-7 [&>*:first-child>*]:w-6 gap-3",
        "dropDownTrigger": "py-2.5 px-3.5 [&>*:first-child>*]:w-5",
        "custom": "",
      },
      icon: {
        leading: "",
        trailing: "flex-row-reverse",
        // hide the icon container not to take a extra space (gap) with its neighbor
        false: "[&>*:first-child]:hidden",
        only: "[&>*:last-child]:hidden",
      },
    },
    compoundVariants: [
      // removing transition
      {
        variant: "dropDownTrigger",
        className: "transition-none",
      },
      // disable shadow when active
      {
        variant: ["dropDownTrigger"],
        className: "active:scale-100",
      },
      // disable borders
      {
        variant: ["tertiaryGray", "tertiaryColor", "linkGray"],
        className: "border-0",
      },
      // disable active shadows
      {
        variant: [
          "linkGray",
          "tertiaryGray",
          "tertiaryColor",
          "dropDownTrigger",
        ],
        className: "active:shadow-none",
      },
      // no Padding
      {
        variant: ["linkGray"],
        className: "p-0",
      },
    ],
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
  CustomAbsoluteComponent?: JSX.Element;
  childrenWrapperClassName?: string;
  ellipsis?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant,
      icon,
      size,
      ellipsis = false,
      iconSrc = undefined,
      customIconComponent = null,
      CustomAbsoluteComponent = null,
      childrenWrapperClassName = "",
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
        {/* div is used to be always the first child of Comp not to affect the childrenWrapper with [&>*:first-child]: */}
        <div>
          {customIconComponent ? customIconComponent : null}
          {iconSrc ? <img src={iconSrc} alt="icon" /> : null}
        </div>
        <div className={cn(ellipsis && "text-ellipsis overflow-hidden", childrenWrapperClassName)}>{props.children}</div>
        {CustomAbsoluteComponent}
      </Comp>
    );
  }
);
Button.displayName = "Button";

export interface buttonPropsType extends VariantProps<typeof buttonVariants> {}

export { Button, buttonVariants, type ButtonProps };
