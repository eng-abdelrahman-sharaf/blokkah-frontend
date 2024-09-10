import { Button } from "@/components/UI/Button";
import { ChevronDown, ChevronUp } from "lucide-react";
import { ReactNode, useState } from "react";

interface DropDownProps {
  dropDownText: string;
  AbsoluteMenu: ReactNode;

  className?: string;
  buttonClassName?: string;
}

export function DropDownBody({
  dropDownText,
  AbsoluteMenu,
  className,
  buttonClassName,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block text-left">
      <Button
        variant={"dropDownTrigger"}
        icon={"trailing"}
        customIconComponent={
          isOpen ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )
        }
        className="gap-8 w-[200px]"
        childrenWrapperClassName="grow overflow-hidden text-ellipsis"
        onClick={() => setIsOpen(!isOpen)}
      >
        {dropDownText}
      </Button>

      {isOpen && AbsoluteMenu}
    </div>
  );
}

const RangeInput = ({onChange}:{onChange:any}) => {
  return (
    <input
      type="number"
      className="placeholder:text-md placeholder:font-regular bg-white border border-Gray-300 shadow-xs rounded-lg py-2.5 px-3.5 w-full text-Gray-700 h-fit"
      placeholder="0"
  />
  );
} 
const RangeAbsMenu = () => {
  return <div className="absolute bg-white rounded-lg border border-Gray-100 top-[100%] translate-y-2.5">
      <div className="flex gap-4 py-1 px-8 ">
        <div className="flex gap-1 text-md font-medium">
        <div className="flex flex-col items-start gap-1.5">
          <div>Minimum</div>
          <RangeInput onChange={()=>{}} />
          </div>
          <div></div>
        </div>
        <div></div>
      </div>
    </div>;
}

export function AreaDropDown() {
  return (
    <DropDownBody dropDownText="Area" AbsoluteMenu={<RangeAbsMenu />} />
  );
}
