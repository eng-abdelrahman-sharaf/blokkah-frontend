"use client";

import Background from "@/app/[locale]/components/background";
import SearchBG from "../../assets/SearchBG.png";
import RadioGroup from "../radioGroup";
import { Input } from "@nextui-org/input";
import { ReactNode, useState } from "react";
import { Check, SearchIcon } from "lucide-react";
import { DropDownBody, DropDownProps } from "../../../components/dropDown";
import { cn } from "@/lib/utils";
import { Button } from "@/app/[locale]/components/Button";
import PropertyTypeMenu from "./PropertyTypeMenu";
import RoomsMenu from "./RoomsMenu";
import MinMaxMenu from "./minMaxMenu";


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

  const _openedDropDownState = useState("");

  const getOpenedDropDownState = (value:string) => {
    const state  = _openedDropDownState[0] === value;
    const setState = (new_state : boolean) =>  new_state ? _openedDropDownState[1](value) : _openedDropDownState[1]("");
    return [state, setState];
  }

  const checkedValueState = useState(["buy"]);

  // const propertyTypeOpenState = useState(false);
  // const roomsOpenState = useState(false);


  return (
    <Background
      imageSrc={SearchBG.src}
      className="h-[43.75rem] flex flex-col gap-12 items-center justify-center z-0"
    >
      {/* Input Fields */}
      <RadioGroup
        checkedValueState={checkedValueState}
        name="property-type"
        ValueArray={["rent", "buy"]}
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
      {/* property-type */}
      <DropDownBody isOpenState={getOpenedDropDownState("property") as any} AbsoluteMenu={<PropertyTypeMenu propertyTypeState={useState(["residential" , []]) as any} />} dropDownText="Property type"/>
      {/* beds-baths-living */}
      <DropDownBody isOpenState={getOpenedDropDownState("beds") as any} AbsoluteMenu={<RoomsMenu />} dropDownText="Beds, Baths, Living" buttonProps={{ className: "w-80 justify-between" }} />
      {/* Price */}
      <DropDownBody isOpenState={getOpenedDropDownState("price") as any} AbsoluteMenu={<MinMaxMenu minMaxState={useState(["" , ""])} />} dropDownText="Price" buttonProps={{ className: "w-80 justify-between" }} />
      
    </Background>
  );
}
