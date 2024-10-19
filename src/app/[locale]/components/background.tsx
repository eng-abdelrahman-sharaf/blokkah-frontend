"use client"

import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

interface BackgroundProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    imgClassName?: string;
    backgroundClassName?: string;
    imageSrc: string;
    imageAlt?: string;
}
const Background = React.forwardRef<
    HTMLDivElement,
    BackgroundProps
    >(({imageSrc , imageAlt = "background-image",backgroundClassName , imgClassName ,  className , ...props}, ref) => {
    return (
        <div ref={ref} className={cn('relative z-0 [&>*:not(:nth-last-child(-n+2))]:z-0 [&>*:not(:nth-last-child(-n+2))]:relative', className)} {...props}>
            {props.children}
            {/* for linear gradients, shade ...etc */}
            <div className={cn("absolute top-0 left-0 right-0 bottom-0 -z-10" , backgroundClassName)} data-background={true}></div>
            <Image src={imageSrc} alt={imageAlt} className={cn("absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full -z-20", imgClassName)} fill data-background={true} />
        </div>
    )
});
Background.displayName = "Background";

export default Background;