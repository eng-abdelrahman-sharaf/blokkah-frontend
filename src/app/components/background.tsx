import { cn } from "@/lib/utils";
import React from "react";

interface BackgroundProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    className?: string;
    imgClassName?: string;
    imageSrc?: string;
    imageAlt?: string;
}
const Background = React.forwardRef<
    HTMLDivElement,
    BackgroundProps
    >(({imageSrc , imageAlt = "background-image", imgClassName ,  className , ...props}, ref) => {
    return (
        <div ref={ref} className={cn("relative", className)} {...props}>
            {props.children}
            <img src={imageSrc} alt={imageAlt} className={cn("absolute top-0 left-0 right-0 bottom-0 object-cover w-full h-full -z-30" , imgClassName)} />
        </div>
    )
});
Background.displayName = "Background";

export default Background;