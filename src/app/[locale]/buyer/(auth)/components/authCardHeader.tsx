import ArrowHead from "@/app/[locale]/assets/arrowHead";
import Link from "next/link";
import React from "react";

const AuthCardHeader = ({ ContainsArrow = false, title, subtitle, subtitleComponent, href = "#" }: { ContainsArrow?: boolean, title: string, subtitleComponent?: React.ReactNode, subtitle?: string, href?: string }) => {
    return (
        <div className="relative gap-2 flex flex-col items-center w-full">
            {ContainsArrow && <Link href={href} className="absolute top-0 left-0"><ArrowHead className="w-10" /></Link>}
            <h1 className={`text-3xl font-bold text-Gray-900`}>{title}</h1>
            <div className={`text-lg font-regular text-Gray-600`}>
                {subtitleComponent ? subtitleComponent : <h2 className={`text-lg font-regular text-Gray-600`}>{subtitle}</h2>}
            </div>
        </div>
    )
}

export default AuthCardHeader;