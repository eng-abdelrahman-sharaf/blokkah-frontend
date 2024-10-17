import { cn } from "@/lib/utils";
import MinimalLogo from "../../../../assets/minimalLogo";
import XIcon from "../../assets/XIcon";
import AIChatCardIcon from "../../assets/aiChatCardIcon";
import { ArrowRight } from "lucide-react";

export default function DefaultSelector({ className, BOTState: [_, setBOTState], isOpenState: [__, setIsOpen] }: { className?: string, BOTState: [string, (value: string) => void]; isOpenState: [boolean, (value: boolean) => void]; }) {
    return (
      <div className={cn("grow custom-bot-menu-gradient overflow-y-auto overflow-x-hidden flex flex-col gap-3 pt-7 px-10", className)}>
        <div className="flex justify-between">
          <MinimalLogo className="w-9 h-9" />
          <button onClick={() => {setIsOpen(false)}}>
            <XIcon className="w-6 h-6 text-Gray-400 sm:hidden" />
          </button>
        </div>
  
        <div>
          <div className="font-bold text-4xl text-Gray-900">Hello!</div>
          <div className="text-Gray-600">How can we help you?</div>
        </div>
  
        {/* CTAs */}
        <div className="flex flex-col gap-3 px-5 py-4 bg-white border border-Gray-300 rounded-lg cursor-pointer" onClick={()=>setBOTState("0")}>
          
          <div className="text-Brand-400 text-md font-semibold">
            AI Agent  
          </div>
  
          <div className="flex flex-col">
            
            <div className="text-xl font-bold text-Gray-700">
              Talk to Ai Bot Through Chat
            </div>
  
            <div className="text-lg font-regular text-Gray-600">
              If you have any additional questions, please don't hesitate to contact our support team.
            </div>
  
          </div>
  
          <div className="flex justify-between">
            <AIChatCardIcon className="w-11 h-11" />
            <div className="border border-Gray-300 rounded-lg p-3">
              <ArrowRight className="w-5 h-5"/>
            </div>
          </div>
          
        </div>
        {/* CTAs */}
        <div className="flex flex-col gap-3 px-5 py-4 bg-white border border-Gray-300 rounded-lg cursor-pointer" onClick={()=>setBOTState("0")}>
          
          <div className="text-Brand-400 text-md font-semibold">
            AI Agent  
          </div>
  
          <div className="flex flex-col">
            
            <div className="text-xl font-bold text-Gray-700">
              Talk to Ai Bot Through Chat
            </div>
  
            <div className="text-lg font-regular text-Gray-600">
              If you have any additional questions, please don't hesitate to contact our support team.
            </div>
  
          </div>
  
          <div className="flex justify-between">
            <AIChatCardIcon className="w-11 h-11" />
            <div className="border border-Gray-300 rounded-lg p-3">
              <ArrowRight className="w-5 h-5"/>
            </div>
          </div>
          
        </div>
        {/* CTAs */}
        <div className="flex flex-col gap-3 px-5 py-4 bg-white border border-Gray-300 rounded-lg cursor-pointer" onClick={()=>setBOTState("0")}>
          
          <div className="text-Brand-400 text-md font-semibold">
            AI Agent  
          </div>
  
          <div className="flex flex-col">
            
            <div className="text-xl font-bold text-Gray-700">
              Talk to Ai Bot Through Chat
            </div>
  
            <div className="text-lg font-regular text-Gray-600">
              If you have any additional questions, please don't hesitate to contact our support team.
            </div>
  
          </div>
  
          <div className="flex justify-between">
            <AIChatCardIcon className="w-11 h-11" />
            <div className="border border-Gray-300 rounded-lg p-3">
              <ArrowRight className="w-5 h-5"/>
            </div>
          </div>
          
        </div>
      </div>
    )
  }