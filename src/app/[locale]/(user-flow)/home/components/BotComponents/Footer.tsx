import { ReactNode } from "react";
import AIChatIcons from "../../assets/aiChatIcons";
import PropertyRequestIcons from "../../assets/propertyRequestIcons";
import FAQIcons from "../../assets/FAQIcons";
import RadioGroup from "../radioGroup";

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

export default function Footer({BotSelectionState}:{BotSelectionState:[string,(value:string)=>void]}) {
  return (
    <>
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
    </>
  );
}


