"use client";

import { useEffect, useState } from "react";
import "./globals.css";
import BOTICon from "../assets/BOTIcon";
import { Button } from "@/components/UI/Button";
import Footer from "./BotComponents/Footer";
import { DropDownBody } from "../../components/dropDown";
import { cn } from "@/lib/utils";

// !TODO - Fix the error of moving down when zooming in too much
// !TODO - Fix the scrollbar overflowing the container

const AbsoluteMenu = () => {
  const BotSelectionState = useState("");
  const [bot, setBot] = BotSelectionState;
  return (

    <div className="absolute z-50 right-0 bottom-full -translate-y-[0.5vh] rounded-2xl flex flex-col bg-white  border border-Brand-500 h-[80vh]  aspect-[480/860]">
      <div className="w-full grow custom-bot-menu-gradient rounded-t-2xl overflow-y-auto">
        <div onClick={()=>setBot("0")} className="w-full bg-slate-400 h-96">0</div>
        <div onClick={()=>setBot("1")} className="w-full bg-slate-400 h-96">1</div>
        <div onClick={()=>setBot("2")} className="w-full bg-slate-400 h-96">2</div>
      </div>
      <Footer BotSelectionState={BotSelectionState} />
    </div>
  );
};

const BotCLicker = ({
  isOpenState: [isOpen, setIsOpen],
}: {
  isOpenState: [boolean, (value: boolean) => void];
}) => {
  const [animations, setAnimations] = useState(["", ""]);
  useEffect(() => {
    setAnimations(["custom-bot-opening", "custom-bot-closing"]);
  }, []);
  return (
    // the container of "Talk To aaid" and the chat button (doesn't contain the "Talk To aaid" container)
    <div className="z-50">
      {/* the container of "Talk To aaid" which clips the text overflow to make the animation works 
        right-1/2 to clip the content when crossing the half of the chat button*/}
      <div className="overflow-hidden absolute right-1/2 top-1/2 -translate-y-1/2 -z-10">
        <div
          className={cn(
            // right padding is 4 (half of the chat button width + some padding)
            "py-[1vh] pl-[2vh] pr-[4.5vh] text-Secondary-900 text-[2.5vh] rounded-s-lg font-bold w-max bg-Secondary-50 translate-x-[120%]",
            isOpen ? animations[0] : animations[1]
          )}
        >
          Talk to Aaid
        </div>
      </div>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-Secondary-600 p-[1.5vh] rounded-full border-0"
        customIconComponent={<BOTICon className="w-full h-full" />}
        variant={"custom"}
        size={"custom"}
        icon={"only"}
      ></Button>
    </div>
  );
};

export default function GPT() {
  const isOpenState = useState(false);
  // In GPT ALL dimensions are in vh
  return (
      <DropDownBody
        className="fixed right-[4%] bottom-[4%] h-[7.5%] aspect-square"
        isOpenState={isOpenState}
        customButton={<BotCLicker isOpenState={isOpenState} />}
        AbsoluteMenu={<AbsoluteMenu />}
      />
  );
}
