import * as React from "react";
import { ChevronDown } from "lucide-react";

const Select = ({selectPlaceHolder , className}:{selectPlaceHolder?:React.ReactNode , className?:string}) => {
  return (
    <>
      <select name="cars" className={className}>
        {selectPlaceHolder && <option value=""><div>{selectPlaceHolder} <ChevronDown className="h-4 w-4 text-blue-500" /></div></option>}
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
        
      </select>
    </>
  );
}

export default function SelectScrollable() {
  return (
    <div>
      <Select selectPlaceHolder="Select a car" className="appearance-none w-48"/>
    </div>
  )
}
