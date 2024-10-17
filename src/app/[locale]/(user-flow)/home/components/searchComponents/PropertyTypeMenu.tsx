import { cn } from "@/lib/utils";
import MenuContainer from "./MenuContainer";
import { Check } from "lucide-react";
import { Button } from "@/app/[locale]/components/Button"; 

// !NOTE - propertyTypeState[0] is a tuple of ["residential"/"commercial" , PropertyType]
const PropertyTypeMenu = ({propertyTypeState}:{propertyTypeState:[["residential"|"commercial",string[]] , (value:["residential"|"commercial",string[]])=>void]}) => {
    const [state, setState] = propertyTypeState;
    const residentialList = ["Olivia Rhye1" , "Olivia Rhye2" , "Olivia Rhye3" , "Olivia Rhye4"]
    const commercialList = ["Olivia Rhye5" , "Olivia Rhye6" , "Olivia Rhye7" , "Olivia Rhye8"]
    const choosedList = state[0] == "residential" ? residentialList : commercialList;
    return (
      <MenuContainer>
        <div className="flex px-[1.625rem] py-3 w-[19.625rem]">
          <button className={cn("text-lg text-Gray-500 font-medium py-1 border-b-1 border-Gray-300 text-center grow" , state[0] == "residential" ? "text-Secondary-700 font-bold border-Secondary-700" : " text-Gray-500 font-medium border-Gray-300")} onClick={()=>setState(["residential" , state[1]])}>Residential</button>
          <button className={cn("text-lg text-Gray-500 font-medium py-1 border-b-1 border-Gray-300 text-center grow", state[0] == "commercial" ? "text-Secondary-700 font-bold border-Secondary-700" : " text-Gray-500 font-medium border-Gray-300")} onClick={() => setState(["commercial", state[1]])}>Commercial</button>
        </div>
        <div className="overflow-y-auto overflow-x-hidden max-h-[13.75rem]">
          {choosedList.map((item, index) => {
            const isSelected = state[1].includes(item);
            return (
              <div key={index} className={cn("px-[1.625rem] py-2.5 flex cursor-pointer justify-between", isSelected && "bg-Gray-100")} onClick={() => { if (!isSelected) setState([state[0], [item, ...state[1]]]); else setState([state[0], state[1].filter((value)=>value!=item)]) }}>
              <div className={"text-md font-medium text-Gray-900"}>{item}</div>
              <Check className={cn("text-Brand-600 w-5 h-5", !isSelected && "hidden")} />
            </div>)
          })}
        </div>
        <div className="px-8 pt-4">
          <Button size={"lg"} icon={false} variant={"tertiaryGray"} onClick={()=>setState([state[0] , []])}>
            Reset
          </Button>
        </div>
      </MenuContainer>
    )
}
  
export default PropertyTypeMenu;