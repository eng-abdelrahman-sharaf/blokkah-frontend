import { useState } from "react";
import MenuContainer from "./MenuContainer";
import RadioGroup from "../radioGroup";
import ResetButton from "./resetButton";

const Room = ({name , state , radioName}:{ name:string, radioName:string , state:[string[] , (val:string[]) => void] }) => (
  <div className="flex flex-col gap-1">
    <div className="py-1 text-start text-xl font-bold text-Secondary-700">
      {name}
    </div>
    <RadioGroup
      checkedValueState={state}
      name={radioName}
      ValueArray={["1", "2", "3", "4+"]}
      sortChecked={true}
      singleContainerClassName="px-3.5 border border-Brand-50 rounded-2xl shadow-xs"
      multiple = {true}
    >
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4+</div>
    </RadioGroup>
  </div>
)

type RoomsMenuProps = {
  roomsStates:{
  bedsState: [string[], (val: string[]) => void],
  bathsState: [string[], (val: string[]) => void],
  livingState: [string[], (val: string[]) => void],
}
}

const RoomsMenu = ({roomsStates}:RoomsMenuProps) => {
  return (
    <MenuContainer>
      <div className="py-1 px-[1.625rem] flex flex-col gap-4">
      {/* Beds */}
      <Room name="Beds" radioName="beds" state={roomsStates.bedsState}/>
      {/* baths */}
      <Room name="Baths" radioName="baths" state={roomsStates.bathsState}/>
      {/* Living */}
      <Room name="Living" radioName="living" state={roomsStates.livingState}/>      
      <ResetButton onClick={() => { roomsStates.bedsState[1]([]); roomsStates.bathsState[1]([]); roomsStates.livingState[1]([])}}/>
      </div>
    </MenuContainer>
  )
} 

export default RoomsMenu