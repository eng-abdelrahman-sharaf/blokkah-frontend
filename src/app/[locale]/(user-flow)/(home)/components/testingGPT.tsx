"use client";

import React from "react";
import { Button } from "@/app/[locale]/components/Button"; 
import BOTIcon from "../assets/BOTIcon";
import { ChevronLeft } from "lucide-react";
import ChatBOT from "./BotComponents/ChatBOT";
import Footer from "./BotComponents/Footer";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import "./globals.css";
import XIcon from "../assets/XIcon";
import DefaultSelector from "./BotComponents/defaultSelector";
import PropertyRequest from "./BotComponents/propertyRequest";

const BOTToggler = ({
  isOpenState: [isOpen, setIsOpen],
}: {
  isOpenState: [boolean, (value: boolean) => void];
}) => {
  const [animations, setAnimations] = useState("");
  const [timeoutId, setTimeouId] = useState<NodeJS.Timeout>()
  const AnimatedElement = useRef(null)
  useEffect(() => {
    setAnimations("custom-bot-closing");
    if (timeoutId) clearTimeout(timeoutId);
    setTimeouId(setTimeout(
      () => {
        if (AnimatedElement?.current) {
            console.log("changed")
            const element = AnimatedElement.current as any;
            element.classList.remove("custom-bot-closing");  
            element.classList.add("custom-bot-opening");
        }
      },5000
    ))
  }, []);
  return (
    // the container of "Talk To Aaid" and the chat button (doesn't contain in size the "Talk To aaid" container)
    <div className="fixed z-30 bottom-3 right-10">
      {/* the container of "Talk To Aaid" which clips the text overflow to make the animation works 
          right-1/2 to clip the content when crossing the half of the chat button*/}
      <div className="overflow-hidden absolute right-1/2 top-1/2 -translate-y-1/2 -z-20">
        <div
          className={cn(
            // right padding is (half of the chat button width + some padding)
            "py-2 pl-3 pr-14 text-Secondary-900 text-xl rounded-s-lg font-bold w-max bg-Secondary-50 translate-x-[120%]",
            animations
          )}
          ref={AnimatedElement}
        >
          Talk to Aaid
        </div>
      </div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-Secondary-600 p-3 rounded-full border-0 relative z-0"
        customIconComponent={
          !isOpen ? (
            <BOTIcon className="w-16 aspect-square" />
          ) : (
              <XIcon className="w-16 aspect-square text-Gray-900"/>
          )
        }
        variant={"custom"}
        size={"custom"}
        icon={"only"}
      ></Button>
    </div>
  );
};

function Header({
  className,
  children,
  BOTState: [_, setBOTState],
  isOpenState:[__,setIsOpen],
}: {
  children: string;
  className?: string;
  BOTState: [string, (value: string) => void];
  isOpenState: [boolean, (value: boolean) => void];
}) {
  return (
    <div
      className={cn(
        "flex justify-between px-10 py-2.5 text-lg font-bold items-center mt-3",
        className
      )}
    >
      <button
        onClick={() => {
          setBOTState("");
        }}
      >
        <ChevronLeft className="w-7 h-7 text-Gray-400" />
      </button>
      <div className="text-Gray-600">{children}</div>
      <div>
        <button onClick={() => {setIsOpen(false)}}>
          <XIcon className="w-6 h-6 text-Gray-400 sm:hidden" />
        </button>
      </div>
    </div>
  );
}

const FAQQuestion = ({ message , onClick  }: { message: string  , onClick: ()=>void }) => {
  return (
    <div className="self-end border border-Secondary-200 bg-Secondary-25 py-2.5 px-3.5 text-xl font-regular text-Secondary-600 rounded-lg cursor-pointer max-w-[90%]" onClick={onClick} >
      {message}
    </div>
  );
}

const FAQAnswer = ({ message , className }: { message: string  , className?:string}) => {
  return (
    <div className={cn("self-start border bg-Gray-100 py-2.5 px-3.5 text-xl font-regular text-Gray-900 rounded-lg max-w-[90%]", className)}>{message}</div>
  );
}

const FAQ = ({ className }: { className?: string }) => { 
  const questions = [
    { "question": "What is the price of the property?What is the price of the property?What is the price of the property?What is the price of the property?What is the price of the property?What is the price of the property?", "answer": "The price of the property is 1MThe price of the property is 1MThe price of the property is 1MThe price of the property is 1MThe price of the property is 1MThe price of the property is 1MThe price of the property is 1MThe price of the property is 1M" },
    { "question": "What is the price of the property?", "answer": "The price of the property is 1M" },
    { "question": "What is the price of the property?", "answer": "The price of the property is 1M" },
    { "question": "What is the price of the property?", "answer": "The price of the property is 1M" },
    { "question": "What is the price of the property?", "answer": "The price of the property is 1M" },
    { "question": "What is the price of the property?", "answer": "The price of the property is 1M" },
  ];
  const [openedQuestions , setOpenedQuestions]  = useState<number[]>([]);
  const onClick = (index: number) => { 
    return () => {
      if (openedQuestions.includes(index)) {
        setOpenedQuestions(openedQuestions.filter((item) => item != index));
      } else {
        setOpenedQuestions([...openedQuestions, index]);
      }
    }
  }
  return (
    <div className={cn("grow overflow-x-hidden overflow-y-auto flex flex-col gap-5 px-6", className)}>
      <FAQAnswer message="Tell us what you want to know"/>
      {questions.map((item, index) => (
        <React.Fragment key={index}>
          <FAQQuestion message={item.question} onClick={onClick(index)}/>
          <FAQAnswer message={item.answer} className={openedQuestions.includes(index) ? "" : "hidden"} />
        </React.Fragment>
      ))}
    </div>
  );
}

function BOT() {
  const [BOTState, setBOTState] = useState("");
  const isOpenState = useState(false)
  return (
    <>
      {/* BOT */}
      <div className={cn("fixed flex flex-col right-0 bottom-0 w-full h-full overflow-hidden bg-white z-40 sm:right-10 sm:bottom-28 sm:top-20 sm:w-[30rem] sm:h-auto sm:rounded-2xl sm:max-h-[53.75rem] border border-Brand-500" , !isOpenState[0] && "hidden" )}>
        <Header
          isOpenState={isOpenState}
          BOTState={[BOTState, setBOTState]}
          className={BOTState ? "" : "hidden"}
        >
          {["AI Chat", "Property Request", "FAQ"][Number(BOTState)]}
        </Header>
        
        {/* Components here must be grow to get the full height and overflow-y-auto to be scrollable */}
        <ChatBOT className={BOTState == "0" ? "" : "hidden"} />
        <PropertyRequest className={BOTState == "1" ? "" : "hidden"} />
        <FAQ className={BOTState == "2" ? "" : "hidden"} />
        <DefaultSelector isOpenState={isOpenState} className={BOTState == "" ? "" : "hidden"} BOTState={[BOTState, setBOTState]} />
        
        {/* footer */}
        <Footer BotSelectionState={[BOTState, setBOTState]} />
      </div>
      <BOTToggler isOpenState={isOpenState} />
    </>
  );
}

export default function TestingGPT() {
  return (
    <>
      <BOT />
    </>
  );
}
