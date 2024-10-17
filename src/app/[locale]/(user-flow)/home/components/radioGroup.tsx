"use client";
import { cn } from "@/lib/utils";
import { m } from "framer-motion";
import React, { ReactNode, useEffect, useRef, useState } from "react";

// Container (DIV) >> Label >> Input , Children, AbsoluteBG


const Option = ({ text, icons }: { text: string; icons: ReactNode }) => (
  <div>
    <div className="flex items-center gap-0.5 flex-col">
      {icons}
      <div className="text-center text-md font-semibold">{text}</div>
    </div>
  </div>
);


const RadioGroup = ({
  checkedValueState,
  ValueArray,
  name,
  wholeContainerClassName,
  singleContainerClassName,
  children,
  multiple = false,
}: {
  checkedValueState: any;
  ValueArray: Array<string>;
  name: string;
  wholeContainerClassName?: string;
  singleContainerClassName?: string;
  children: JSX.Element[];
  multiple?: boolean;
}) => {
  
const [checkedValue, setCheckedValue] = checkedValueState;


  const allLabelsRef = useRef<HTMLLabelElement[]>([]);

  const isChecked = (value: string) => {
    if (multiple) return checkedValue.includes(value);
    else return checkedValue == value;
  }

  const addToChecked = (value:string) =>{
    if (multiple) { 
      setCheckedValue([...checkedValue,value]);
    }
    else {
      setCheckedValue(value);
    }
  }

  const removeFromChecked = (value: string) => {
    if (multiple) {
      setCheckedValue(checkedValue.filter((val:string) => val != value));
    }
    else {
      setCheckedValue("");
    }
  }

  const onChange = (e: any) => {
    if (e.target.checked) {
      addToChecked(e.target.value);
    }
    else {
      removeFromChecked(e.target.value);
    }
  };

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
            key={index}
            className={cn(
              `text-Gray-500 text-lg font-regular  rounded-lg  px-3 py-2 relative z-0 flex justify-center items-center cursor-pointer
               data-[checked=true]:text-Secondary-900 data-[checked=true]:bg-Secondary-50 data-[checked=true]:border data-[checked=true]:border-Secondary-600`,
              singleContainerClassName
            )}
            ref={(el) => {
              if (el) allLabelsRef.current[index] = el;
            }}
            data-checked={isChecked(value)}
          >
            {isChecked(value)?React.cloneElement(children[index], {"data-checked":true}):children[index]}
            <input
              name={name}
              value={value}
              className={`hidden`}
              type={multiple ? "checkbox" : "radio"}
              defaultChecked={isChecked(value) ? true : undefined}
              onChange={onChange}
            ></input>
          </label>
        );
      })}
    </div>
  );
};
export default RadioGroup;
