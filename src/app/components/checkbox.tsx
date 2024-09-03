"use client";
import { ReactNode, useRef, useState } from "react";
import { tv } from "tailwind-variants";
import Check  from "@/app/assets/check";
import { cn } from "@/lib/utils";

const checkicontv = tv({
  base: "[&>*]:stroke-Brand-600",
  variants: {
    size: {
      sm: "w-3 h-3",
      md: "w-[0.875rem] h-[0.875rem]",
    },
  },
  defaultVariants: {
    size: "sm",
  },
});

const checkboxtv = tv({
  base: "border flex items-center justify-center",
  variants: {
    state: {
      default: "bg-white border border-Gray-300",
      hover: "bg-Brand-50  border-Brand-600",
      disabled: "bg-Gray-100 border-Gray-200",
    },
    size: {
      sm: "w-4 h-4 rounded",
      md: "w-5 h-5 rounded-md",
    },
    checked: {
      true: "bg-Brand-50",
      false: "",
    },
  },
  compoundVariants: [
    {
      state: "disabled",
      checked: true,
      class: "bg-Gray-100",
    },
  ],
  defaultVariants: {
    size: "sm",
    checked: false,
    state: "default",
  },
});

interface checkboxProps extends React.HTMLAttributes<HTMLInputElement> {
  size?: "sm" | "md";
  disabled?: boolean;
  labelClassName?: string;
  labelChild?: ReactNode;
}

const Checkbox = ({
  size = undefined,
  disabled,
  labelClassName,
  labelChild,
  ...props
}: checkboxProps) => {
  const [hovered, setHovered] = useState(false);
  const [checked, setChecked] = useState(false);
  const onpointerover = () => {
    setHovered(true);
  };
  const onpointerleave = () => {
    setHovered(false);
  };
  const onChange = (e: any) => {
    setChecked(e.target.checked);
  };
  return (
    <label
      className={cn("gap-3 flex items-center", labelClassName)}
      onPointerOver={onpointerover}
      onPointerLeave={onpointerleave}
    >
      <div
        className={checkboxtv({
          state: disabled ? "disabled" : hovered ? "hover" : "default",
          checked: checked,
        })}
      >
        {checked && <Check className={checkicontv({ size: size })} />}
      </div>
      {labelChild}
      <input
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
        className="hidden"
        {...props}
      />
    </label>
  );
};


export default Checkbox;