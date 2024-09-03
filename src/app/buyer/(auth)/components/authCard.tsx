import Background from "@/app/components/background"
import { cn } from "@/lib/utils"
import * as React from "react"

const AuthCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "w-full h-full rounded-none bg-none \
        xl:w-[34.25rem] xl:h-fit xl:rounded-[2.75rem]\
        bg-Gray-100 flex flex-col px-10 py-8 gap-10 text-center items-center justify-center",
        className
      )}
      {...props}
      >
      {props.children}
    </div>  
))
AuthCard.displayName = "Card"

export default AuthCard