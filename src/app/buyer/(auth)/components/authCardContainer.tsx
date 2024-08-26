import { cn } from "@/lib/utils"
import AuthCard from "./authCard"

const AuthCardContainer = ({className , children}:{className?:string , children:React.ReactNode}) => (
    <div className={cn("w-full xl:w-1/2 min-h-[40rem] h-full bg-Gray-200 flex justify-center items-center" , className)}>
        <AuthCard>
            {children}
        </AuthCard>
    </div>
)

export default AuthCardContainer