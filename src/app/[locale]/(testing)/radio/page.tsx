"use client";

import RadioGroup from "@/app/[locale]/buyer/home/components/radioGroup";
import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import AIChatIcons from "../../buyer/home/assets/aiChatIcons";
import PropertyRequestIcons from "../../buyer/home/assets/propertyRequestIcons";
import FAQIcons from "../../buyer/home/assets/FAQIcons";

const Option = ({ text, icons }: { text: string; icons: ReactNode }) => (
  <div>
    <div className="flex items-center gap-0.5 flex-col">
      {icons}
      <div className="text-center text-md font-semibold">{text}</div>
    </div>
  </div>
);

export default function Page() {
  return (
    <div className="w-[70%]">
      {/* Basic Usage that takes 100% from the width */}
      <RadioGroup
        checkedValueState={useState("sale")}
        ValueArray={["sale", "rent"]}
        name="req-type"
        singleContainerClassName="py-3 bg-Gray-25 w-[50%]"
        wholeContainerClassName="gap-0 p-0"
      >
        <div className="max-w-[max-content]">for Sale</div>
        <div className="max-w-[max-content]">for Rent</div>
      </RadioGroup>

      {/* using different icons to represent radio Group State */}
      <RadioGroup
        checkedValueState={useState("")}
        name="chatbot-section"
        ValueArray={["0", "1", "2"]}
        onLabelChecked={(label: HTMLLabelElement) => {
          const svgs = label.querySelectorAll("svg");
          svgs[0]?.classList?.add("hidden");
          svgs[1]?.classList?.remove("hidden");
        }}
        onLabelUnChecked={(label: HTMLLabelElement) => {
          const svgs = label.querySelectorAll("svg");
          svgs[0]?.classList?.remove("hidden");
          svgs[1]?.classList?.add("hidden");
        }}
        wholeContainerClassName="gap-0 justify-evenly rounded-2xl"
      >
        <Option
          icons={<AIChatIcons className="h-10 aspect-square" />}
          text="AI Chat"
        />
        <Option
          icons={<PropertyRequestIcons className="h-10 aspect-square" />}
          text="Property Request"
        />
        <Option
          icons={<FAQIcons className="h-10 aspect-square" />}
          text="FAQ"
        />
      </RadioGroup>
    </div>
  );
}
