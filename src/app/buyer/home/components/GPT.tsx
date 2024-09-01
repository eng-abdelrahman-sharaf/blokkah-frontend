"use client";

import { ReactNode } from "react";
import RadioGroup from "./radioGroup";
import AIChatIcons from "../assets/aiChatIcons";
import PropertyRequestIcons from "../assets/propertyRequestIcons";
import FAQIcons from "../assets/FAQIcons";
const Option = ({ text, icons }: { text: string; icons: ReactNode }) => (
  <div>
    <div className="flex items-center gap-0.5 flex-col">
      {icons}
      <div>{text}</div>
    </div>
  </div>
);

export default function GPT() {
  return (
    <div className="fixed right-12 bottom-[2.875rem] top-20 rounded-2xl flex flex-col bg-white">
        <div className="grid grid-cols-2 grid-rows-2 h-28 gap-2">
            <div className="bg-red-500 col-start-1 col-span-2 row-span-1"></div>
            <div className="bg-red-500 row-span-1 col-start-1"></div>
            <div className="bg-red-500 row-span-1 col-start-2"></div>
        </div>
          
      {/* <div className="overflow-y-auto grow">
        <div className="bg-red-400 h-40"></div><br />
        <div className="bg-red-400 h-40"></div><br />
        <div className="bg-red-400 h-40"></div><br />
        <div className="bg-red-400 h-40"></div><br />
      </div> */}
      <div>
        <RadioGroup
          name="chatbot-section"
          ValueArray={["0", "1", "2"]}
          checked={(label:any) => {
            const svgs = label.querySelectorAll("svg");
            svgs[0].classList.add("hidden");
            svgs[1].classList.remove("hidden");
          }}
          unChecked={(label:any) => {
            const svgs = label.querySelectorAll("svg");
            svgs[0].classList.remove("hidden");
            svgs[1].classList.add("hidden");
          }}
        >
          <Option icons={<AIChatIcons />} text="AI Chat" />
          <Option icons={<PropertyRequestIcons />} text="Property Request" />
          <Option icons={<FAQIcons />} text="FAQ" />
        </RadioGroup>
      </div>
    </div>
  );
}
