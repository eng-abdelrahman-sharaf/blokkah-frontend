import { cn } from "@/app/lib/utils"
import * as React from "react"
 
const AuthCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-[2.75rem] shadow-2xl bg-Gray-100 flex flex-col px-10 py-8 gap-10 text-center items-center justify-center",
      className
    )}
    {...props}
    >
    {props.children}
  </div>  
))
AuthCard.displayName = "Card"

export default AuthCard