"use client";
import { cn } from "@/lib/utils";
import { ReactNode, useRef, useState } from "react";

const RadioGroup = ({
  ValueArray,
  nodesArray,
  name,
  checkedValue = "",
  singleContainerClassName,
  wholeContainerClassName,
  children,
  checked,
  unChecked,
  multiple = false,
}: {
  ValueArray: Array<string>;
  nodesArray?: Array<JSX.Element>;
  name: string;
  checkedValue?: string;
  wholeContainerClassName?: string;
  singleContainerClassName?: string;
  customOnlabelClick?: (value: string) => void;
  children: JSX.Element[];
  checked?: (label: ReactNode) => void;
  unChecked?: (label: ReactNode) => void;
  multiple?: boolean;
}) => {
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onChange = () => { 
    !checked || !unChecked
    ? undefined
    : () => {
          console.log("onchange");
        if(!wrapperRef.current) return;
        const labels = wrapperRef.current.querySelectorAll(
          `label`
        ) as any;
        console.log(labels);
        for (const label of labels) {
            console.log(label.children[2].checked);
            if (label.children[2].checked) {
                console.log("checked");
                checked(label);
            }
            else {
                  console.log("unchecked");
                unChecked(label);
            }
        }
      }
  }
  
  return (
    <div
      ref={wrapperRef}
      className={cn(
        "flex p-3 gap-3 bg-white rounded-lg",
        wholeContainerClassName
      )}
    >
      {ValueArray.map((value, index) => {
        return (
          <label
            key={index}
            className={`text-Gray-500 text-lg font-regular  rounded-lg  px-3 py-2 relative
                  [&:has(>:checked)]:bg-Secondary-50 [&:has(>:checked)]:text-Secondary-900`}
          >
            {children[index]}
            <div className="absolute w-full h-full top-0 left-0 rounded-lg [&:has(+:checked)]:border [&:has(+:checked)]:border-Secondary-600"></div>
            <input
              name={name}
              value={value}
              className={`hidden`}
              type={multiple ? "checkbox" : "radio"}
              defaultChecked={value == checkedValue ? true : undefined}
              onChange={onChange}
            ></input>
          </label>
        );
      })}
    </div>
  );
};
export default RadioGroup;
