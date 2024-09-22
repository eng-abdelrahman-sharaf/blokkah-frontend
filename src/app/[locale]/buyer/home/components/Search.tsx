"use client";

import Background from "@/app/[locale]/components/background";
import SearchBG from "../assets/SearchBG.png";
import RadioGroup from "./radioGroup";
import { Input } from "@nextui-org/input";
import { useState } from "react";
import { SearchIcon } from "lucide-react";
import { DropDownBody } from "../../components/dropDown";

export default function Search() {

  // Search Bar state and key handler
  const [value, setValue] = useState("");
  const handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      alert(`You have searched for ${value}`);
    } else if (e.key === "Escape") {
      e.target.blur();
    }
  };

  const checkedValueState = useState("buy");

  return (
    <Background
      imageSrc={SearchBG.src}
      className="h-[43.75rem] flex flex-col gap-12 items-center justify-center "
    >
      {/* Input Fields */}
      <RadioGroup
        checkedValueState={checkedValueState}
        name="property-type"
        ValueArray={["rent", "buy"]}
        defaultChecked="buy"
      >
        <div>Rent</div>
        <div>Buy</div>
      </RadioGroup>

      {/* search bar */}
      <div
              onKeyDown={handleKeyDown}
              className="w-96"
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


      {/* dropDowns */}
      <DropDownBody isOpenState={useState(false)} AbsoluteMenu={<div/>} dropDownText="Property type" />
    </Background>
  );
}
