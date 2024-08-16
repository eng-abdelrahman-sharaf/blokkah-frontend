import { cn } from "@/lib/utils"
import AuthCard from "./authCard"

const AuthCardContainer = ({className , children}:{className?:string , children:React.ReactNode}) => (
    <div className={cn("w-1/2 h-full bg-Gray-200 flex justify-center items-center" , className)}>
        <AuthCard className="w-[34.25rem]">
            {children}
        </AuthCard>
    </div>
)

export default AuthCardContainer