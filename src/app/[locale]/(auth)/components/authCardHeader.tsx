import ArrowHead from "@/app/[locale]/assets/arrowHead";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const AuthCardHeader = ({ ContainsArrow = false, title, subtitle, subtitleComponent, href = "#" }: { ContainsArrow?: boolean, title: string, subtitleComponent?: React.ReactNode, subtitle?: string, href?: string }) => {
    return (
        // <div className={"relative gap-2 flex flex-col items-center w-full"}>
        //     <div className={cn("flex w-full" , ContainsArrow?"justify-between" : "justify-center")}>
        //         {ContainsArrow && <Link href={href} className=""><ArrowHead className="w-10" /></Link>}
        //         <h1 className={`text-3xl font-bold text-Gray-900`}>{title}</h1>
        //         {ContainsArrow && <div></div>}
        //     </div>
        //     <div className={`text-lg font-regular text-Gray-600`}>
        //         {subtitleComponent ? subtitleComponent : <h2 className={`text-lg font-regular text-Gray-600`}>{subtitle}</h2>}
        //     </div>
        // </div>
        <div className={cn("grid grid-rows-2 w-full items-center" , ContainsArrow ? "grid-cols-[2.5rem_1fr]" : "grid-cols-1" )}>

            {ContainsArrow && <Link href={href} className="row-span-2"><ArrowHead className="w-10" /></Link>}
            <h1 className={`text-3xl font-bold text-Gray-900`}>{title}</h1>
            <div className={`text-lg font-regular text-Gray-600`}>
                {subtitleComponent ? subtitleComponent : <h2 className={`text-lg font-regular text-Gray-600`}>{subtitle}</h2>}
            </div>
        </div>
    )
}

export default AuthCardHeader;