"use client";

import React from "react";
import { Input } from "@nextui-org/input";
import SearchIcon from "./searchIcon";
import "./style.css";

export default function App() {
  const [value, setValue] = React.useState("");
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      alert(`You have searched for ${value}`);
    }
    else if (e.key === "Escape") {
        e.target.blur();
    }
  };
  return (
    <>
      <div
        onKeyDown={handleKeyDown}
        className="w-[800px] h-[240px] px-8 rounded-2xl flex justify-center items-center bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        <Input
          isClearable
          radius="lg"
          classNames={{
            input:
              "placeholder:text-Gray-500 placeholder:text-lg placeholder:font-regular caret-Gray-500 !text-Gray-500 text-lg font-regular grow p-0 !ps-0 !data-[hover]:bg-red-500 !hover:bg-red-500",
            innerWrapper: "h-fit gap-2 flex",
            inputWrapper: "min-h-0 h-fit p-4 rounded-lg !ring-0 !ring-offset-0",
            clearButton: "[&>*>*]:fill-Gray-500",
          }}
          placeholder="Search for a place, city or agent"
          type="search"
          value={value}
          autoComplete="off"
          onValueChange={setValue}
          startContent={<SearchIcon className="w-5 h-5 grow-0" />}
        />
      </div>
    </>
  );
}
