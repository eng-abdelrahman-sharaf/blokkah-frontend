"use client";

import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";
import { ButtonProps } from "../../components/Button";
import { Button } from "../../components/Button";

export interface DropDownProps {
  isOpenState: [boolean, (value: boolean) => void];
  dataString?: string;
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
  dataString,
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
    size = "dropDownTrigger",
    ...otherProps
  } = buttonProps;

  return (
    <div className={cn("relative inline-block h-fit", isOpen ? "!z-20" : "z-0" , className)}>
      {customButton ? (
        customButton
      ) : (
        <Button
          variant={variant}
          icon={icon}
          customIconComponent={customIconComponent}
          className={cn("text-start justify-between" , buttonClass)}
          childrenWrapperClassName={cn("grow" , childrenWrapperClassName)}
          data-checked={dataString?true:false}
          onClick={onClick}
          ellipsis={true}
          size={size}
          {...otherProps}
        >
          <div className="relative grow">
            <div className={dataString && "invisible"}>
              {dropDownText}
            </div>
            <div className={cn("top-0 left-0 right-0 bottom-0 absolute text-start text-ellipsis overflow-hidden" , dataString || "hidden")}>{dataString}</div>
          </div>
        </Button>
      )}

      {isOpen && AbsoluteMenu}
    </div>
  );
}

