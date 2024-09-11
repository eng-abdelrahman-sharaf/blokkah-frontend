"use client";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

const RadioGroup = ({
  ValueArray,
  name,
  defaultChecked= undefined,
  wholeContainerClassName,
  singleContainerClassName,
  absoluteBGClassName,
  children,
  onLabelChecked,
  onLabelUnChecked,
  multiple = false,
}: {
  ValueArray: Array<string>;
  name: string;
  defaultChecked?: string;
  wholeContainerClassName?: string;
  singleContainerClassName?: string;
  absoluteBGClassName?: string;
  children: JSX.Element[];
  onLabelChecked?: (label: HTMLLabelElement) => void;
  onLabelUnChecked?: (label: HTMLLabelElement) => void;
  multiple?: boolean;
}) => {
  
  const [checkedValue, setCheckedValue] = useState<string | undefined>(defaultChecked)

  const allLabelsRef = useRef<HTMLLabelElement[]>([]);

  const onChange = (e:any) => { 
    if (e.target.checked) {
      setCheckedValue(e.target.value) 
    }
  }

  useEffect(() => {
    for (const label of allLabelsRef.current) {
      if (label && onLabelUnChecked && label.dataset.value != checkedValue) onLabelUnChecked(label);
      else if (label && onLabelChecked && label.dataset.value == checkedValue) onLabelChecked(label);
    }
  }, [checkedValue]);

  return (
    <div
      className={cn(
        "flex p-3 gap-3 bg-white rounded-lg",
        wholeContainerClassName
      )}
    >
      {ValueArray.map((value, index) => {
        return (
          <label
            data-value={value}
            key={index}
            className={cn(`text-Gray-500 text-lg font-regular  rounded-lg  px-3 py-2 relative z-10
                  [&:has(>:checked)]:text-Secondary-900` , singleContainerClassName)}
            ref = {(el) => {if(el) allLabelsRef.current[index] = el}}
          >
            {children[index]}
            <div className={cn("absolute w-full h-full top-0 left-0 rounded-lg -z-10 [&:has(+:checked)]:bg-Secondary-50  [&:has(+:checked)]:border [&:has(+:checked)]:border-Secondary-600" , absoluteBGClassName)}></div>
            <input
              name={name}
              value={value}
              className={`hidden`}
              type={multiple ? "checkbox" : "radio"}
              defaultChecked={value == defaultChecked ? true : undefined}
              onChange={onChange}
            ></input>
          </label>
        );
      })}
    </div>
  );
};
export default RadioGroup;
