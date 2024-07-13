import { cn } from "@/app/lib/utils";
import React from "react";

export const Skeleton = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(`animate-pulse bg-Gray-300 rounded-md ${className}`)}
    {...props}
  ></div>
));
Skeleton.displayName = "Skeleton";
