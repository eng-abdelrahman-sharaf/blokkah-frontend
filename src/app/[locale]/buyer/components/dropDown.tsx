"use client";

import { Button, buttonVariants } from "@/components/UI/Button";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";
import { ButtonProps } from "@/components/UI/Button";

interface DropDownProps {
  isOpenState: [boolean, (value: boolean) => void];

  dropDownText?: string;
  AbsoluteMenu?: ReactNode;
  className?: string;
  customButton?: ReactNode;

  buttonProps?: ButtonProps;
}

export function DropDownBody({
  AbsoluteMenu,
  dropDownText,
  buttonProps = {},
  isOpenState : [isOpen, setIsOpen],
  customButton,
  className,
}: DropDownProps) {
  const {
    variant = "dropDownTrigger",
    icon = "trailing",
    customIconComponent = isOpen ? (
      <ChevronUp className="h-4 w-4" />
    ) : (
      <ChevronDown className="h-4 w-4" />
    ),
    className: buttonClass,
    childrenWrapperClassName,
    onClick = () => setIsOpen(!isOpen),
    size = "2xl",
    ...otherProps
  } = buttonProps;

  return (
    <div className={cn("relative inline-block", className)}>
      {customButton ? (
        customButton
      ) : (
        <Button
          variant={variant}
          icon={icon}
          customIconComponent={customIconComponent}
          className={cn( "text-left" , buttonClass)}
          childrenWrapperClassName={childrenWrapperClassName}
          onClick={onClick}
          size={size}
          {...otherProps}
        >
          {dropDownText}
        </Button>
      )}

      {isOpen && AbsoluteMenu}
    </div>
  );
}

const RangeInput = ({ onChange }: { onChange: any }) => {
  return (
    <input
      type="number"
      className="placeholder:text-md placeholder:font-regular bg-white border border-Gray-300 shadow-xs rounded-lg py-2.5 px-3.5 w-full text-Gray-700 h-fit"
      placeholder="0"
    />
  );
};
const RangeAbsMenu = () => {
  return (
    <div className="absolute bg-white rounded-lg border border-Gray-100 top-[100%] translate-y-2.5">
      <div className="flex gap-4 py-1 px-8 ">
        <div className="flex gap-1 text-md font-medium">
          <div className="flex flex-col items-start gap-1.5">
            <div>Minimum</div>
            <RangeInput onChange={() => {}} />
          </div>

          <div></div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export function AreaDropDown() {
  return <DropDownBody isOpenState={useState(false)} dropDownText="Area" AbsoluteMenu={<RangeAbsMenu />} />;
}
