"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";
import { ButtonProps } from "../../components/Button";
import { Button } from "../../components/Button";

export interface DropDownProps {
  isOpenState: [boolean, (value: boolean) => void];

  dropDownText?: string;
  AbsoluteMenu?: ReactNode;
  className?: string;
  customButton?: ReactNode;
  chevronDownClassName?: string;
  buttonProps?: ButtonProps;
}

export function DropDownBody({
  AbsoluteMenu,
  dropDownText,
  chevronDownClassName,
  buttonProps = {},
  isOpenState : [isOpen, setIsOpen],
  customButton,

  className,
}: DropDownProps) {
  const {
    variant = "dropDownTrigger",
    icon = "trailing",
    customIconComponent = isOpen ? (
      <ChevronUp className={cn("h-4 w-4", chevronDownClassName)} />
    ) : (
      <ChevronDown className={cn("h-4 w-4", chevronDownClassName)} />
    ),
    className: buttonClass,
    childrenWrapperClassName,
    onClick = () => setIsOpen(!isOpen),
    size = "2xl",
    ...otherProps
  } = buttonProps;

  return (
    <div className={cn("relative inline-block", isOpen ? "!z-20" : "z-0" , className)}>
      {customButton ? (
        customButton
      ) : (
        <Button
          variant={variant}
          icon={icon}
          customIconComponent={customIconComponent}
          className={cn("text-left" , buttonClass)}
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

