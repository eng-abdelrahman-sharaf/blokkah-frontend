"use client";

import RadioGroup from "@/app/[locale]/buyer/home/components/radioGroup";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import AIChatIcons from "../../buyer/home/assets/aiChatIcons";
import PropertyRequestIcons from "../../buyer/home/assets/propertyRequestIcons";
import FAQIcons from "../../buyer/home/assets/FAQIcons";

// props is used to get data-checked
const Option = ({ text, icons , ...props }: { text: string; icons: ReactNode }) => (
  // if this input is checked = "data-[checked=true]:"
  <div className="[&[data-checked=true]>*>*:first-child]:hidden [&[data-checked=true]>*>*:nth-child(2)]:block" {...props}>
    <div className="flex items-center gap-0.5 flex-col">
      {icons}
      <div className="text-center text-md font-semibold">{text}</div>
    </div>
  </div>
);

export default function Page() {
  const BotSelectionState = useState("");
  const saleValueArray = ["sale", "rent"];
  const SaleCheckedValue = useState(saleValueArray[0]);

  return (
    <div className="w-[70%]">
      {/* Basic Usage that takes 100% from the width */}
      
      {/* Bot selection */}
      {/* using different icons to represent radio Group State */}
      <RadioGroup
        checkedValueState={BotSelectionState}
        name="chatbot-section"
        ValueArray={["0", "1", "2"]}
        singleContainerClassName="data-[checked=true]:border-0 data-[checked=true]:bg-transparent"
        wholeContainerClassName="gap-0 justify-evenly rounded-2xl"
      >
        <Option icons={<AIChatIcons className="h-10 aspect-square" />} text="AI Chat" />
        <Option icons={<PropertyRequestIcons className="h-10 aspect-square"/>} text="Property Request" />
        <Option icons={<FAQIcons className="h-10 aspect-square"/>} text="FAQ" />
      </RadioGroup>

      {/* Simple usage */}
      <RadioGroup ValueArray={saleValueArray} checkedValueState={SaleCheckedValue} name="req-type" singleContainerClassName="py-3 bg-Gray-25 w-[50%]" wholeContainerClassName="gap-0 p-0">
                <div className="max-w-[max-content]">for Sale</div>
                <div className="max-w-[max-content]">for Rent</div>
      </RadioGroup>
    </div>
  );
}
