import { useState } from "react";
import RadioGroup from "../radioGroup";
import { cn } from "@/lib/utils";

export default function PropertyRequest({className}:{className?:string}) {
    const saleValueArray = ["sale", "rent"];
    const SaleCheckedValue = useState(saleValueArray[0]);


    return (
        <div className={cn("flex flex-col grow overflow-y-auto px-6" , className)}>
            <div className="flex flex-col gap-2">
            <div className="text-Gray-700 text-md font-medium">Request type</div>
            <RadioGroup ValueArray={saleValueArray} checkedValueState={SaleCheckedValue} name="req-type" singleContainerClassName="py-3 bg-Gray-25 w-[50%]" wholeContainerClassName="gap-0 p-0">
                <div className="max-w-[max-content]">for Sale</div>
                <div className="max-w-[max-content]">for Rent</div>
            </RadioGroup>
            </div>
        </div>
    )
}