import React from "react";
import { cn } from "@/lib/utils";
import { fontSizesAliases } from "@/lib/utils";

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col gap-8 w-[30.5rem] items-center", className)}
    {...props}
  />
));
Card.displayName = "Card";

const HeaderImage = React.forwardRef<
  HTMLImageElement,
  React.ImgHTMLAttributes<HTMLImageElement>
>(({ className, ...props }, ref) => (
  <img ref={ref} className={cn("h-14", className)} {...props} />
));
HeaderImage.displayName = "HeaderImage";

const CardChildContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-6 items-center w-full", className)} {...props} />
));
CardChildContainer.displayName = "CardChildContainer";

const HeaderTextContainer = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("flex flex-col gap-2 items-center", className)} {...props} />
));
HeaderTextContainer.displayName = "HeaderTextContainer";

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      `text-Gray-900 ${fontSizesAliases["display-sm"]} font-bold text-center align-top`,
      className
    )}
    {...props}
  />
));
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn(
      `text-center font-regular  align-top  text-Gray-600 text-lg`,
      className
    )}
    {...props}
  />
));
CardDescription.displayName = "CardDescription";


export {
  Card,
  CardChildContainer,
  CardTitle,
  CardDescription,
  HeaderTextContainer,
  HeaderImage,
};
