import { cn } from "@/app/lib/utils"
import AuthCard from "./authCard"

const AuthContainer = ({className , children}:{className?:string , children:React.ReactNode}) => (
    <div className={cn("w-1/2 h-full bg-Gray-200 flex justify-center items-center" , className)}>
        <AuthCard className="w-2/3 max-w-[34rem]">
            {children}
        </AuthCard>
    </div>
)

export default AuthContainer