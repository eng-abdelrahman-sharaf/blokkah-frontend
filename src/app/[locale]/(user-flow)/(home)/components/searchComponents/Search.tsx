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
    }
    else if (e.key === "Escape") {
        e.target.blur();
    }
  };

  // to open only one dropdown at a time
  const _openedDropDownState = useState("");

  const getOpenedDropDownState = (value:string) => {
    const state  = _openedDropDownState[0] === value;
    const setState = (new_state : boolean) =>  new_state ? _openedDropDownState[1](value) : _openedDropDownState[1]("");
    return [state, setState];
  }

  // RadioGroup state
  const buyOrRentState = useState(["buy"]);

  // DropDown states
  const priceState = useState<[string ,string]>(["", ""]);
  const areaState = useState<[string ,string]>(["", ""]);
  const propertyTypeState = useState<["residential"|"commercial" , Array<string>]>(["residential" , []]) ;
  const roomsStates = {
    bedsState: useState<string[]>([]),
    bathsState: useState<string[]>([]),
    livingState: useState<string[]>([])
  }
  

  const isPriceValid = priceState[0][0] !== "" && priceState[0][1] !== "";
  const isAreaValid = areaState[0][0] !== "" && areaState[0][1] !== "";
  const isRoomsStateValid = roomsStates.bedsState[0].length !== 0 || roomsStates.bathsState[0].length !== 0 || roomsStates.livingState[0].length !== 0;
  const roomsData = isRoomsStateValid ? [roomsStates.bedsState[0].join("-") + " Beds", roomsStates.bathsState[0].join("-") + " Baths", roomsStates.livingState[0].join("-") + " Livings"].join(",") : "";
  const dropDownsButtonProps = { className: "text-xl font-regular" };

  return (
    <Background
      imageSrc={SearchBG.src}
      backgroundClassName="bg-[linear-gradient(rgba(0,0,0,0.4)_40%,rgba(0,29,49,0.5)_100%)]"
      className="min-h-[43.75rem] flex flex-col gap-12 items-center justify-center z-0 bg-red-400"
    >
      <div className="flex flex-col gap-5 text-Brand-25 *:text-center">
        <div className="text-6xl font-bold">Find your next property in minutes</div>
        <div className="text-3xl font-medium">Discover the Perfect Place for You Today</div>
      </div>
      
      <div className="lg:grid  grid-cols-[min-content,1fr,1fr,min-content] grid-rows-2 lg:w-[70%] gap-x-3 gap-y-5 \
                      w-[95%]  flex">
        
          {/* Input Fields */}
          <RadioGroup
            checkedValueState={buyOrRentState}
            name="property-type"
            ValueArray={["rent", "buy"]}
            singleContainerClassName="text-xl font-bold px-5 py-2"
          wholeContainerClassName="w-fit gap-4 px-3 py-2 self-center \
            hidden lg:flex"// responsiveness
            >
            <div className="data-[checked=true]:font-bold">Rent</div>
            <div className="data-[checked=true]:font-bold">Buy</div>
          </RadioGroup>

        
          {/* search bar */}
          <div
            onKeyDown={handleKeyDown}
            className="grow lg:col-span-2"
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
      
          <Button size={"2xl"} className="text-2xl font-bold py-4 px-[3.187rem] w-fit hidden lg:inline-flex">Search</Button>
        
          {/* property-type */}
          <DropDownBody isOpenState={getOpenedDropDownState("property") as any}  className="hidden lg:block" dataString={propertyTypeState[0][1].join(", ")} buttonProps={dropDownsButtonProps} AbsoluteMenu={<PropertyTypeMenu propertyTypeState={propertyTypeState} />} dropDownText="Property type"/>
        
          {/* beds-baths-living */}
          <DropDownBody isOpenState={getOpenedDropDownState("beds") as any} className="hidden lg:block" dataString={roomsData} AbsoluteMenu={<RoomsMenu roomsStates={roomsStates} />} buttonProps={dropDownsButtonProps} dropDownText="Beds, Baths, Living" />      

          <DropDownBody isOpenState={getOpenedDropDownState("area") as any} className="hidden lg:block" dataString={isAreaValid ? areaState[0].join(" to ") : ""} buttonProps={dropDownsButtonProps} AbsoluteMenu={<MinMaxMenu minMaxState={areaState} />} dropDownText="Area (m2)" />          
        
          {/* Price */}
          <DropDownBody isOpenState={getOpenedDropDownState("price") as any} className="hidden lg:block" dataString={isPriceValid ? priceState[0].join(" to ") : ""} buttonProps={dropDownsButtonProps} AbsoluteMenu={<MinMaxMenu minMaxState={priceState} />} dropDownText="Price" />
      
      </div>
      
    </Background>
  );
}
