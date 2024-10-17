
import PhoneIcon from "../../(user-flow)/assets/phoneIcon";
import GoogleIcon from "../../(user-flow)/assets/googleIcon";
import AppleIcon from "../../(user-flow)/assets/appleIcon";
import XIcon from "../../(user-flow)/assets/xIcon";
import { cn} from "@/lib/utils";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";
import { Button } from "../../components/Button";

const AuthenticationButtons = ({ className, type }: { className?: string, type: "create account"|"Log in" }) => {
    let injection : "in"|"up";
    if (type == "Log in") {
        injection = "in"
    }
    else{
        injection = "up"
    }
    return (
        <div className={cn(`gap-5 flex flex-col text-xl font-medium w-full [&>*]:gap-3`, className)}>
            <Link href={"./phone"} className="[&>*]:gap-3"> 
                <Button icon="leading" variant={"primary"} size={"lg"} customIconComponent={<PhoneIcon className="w-5"/>} >
                    Sign {injection} with Phone number
                </Button>
            </Link>
            <Button icon="leading" variant={"secondaryGray"} size={"lg"} customIconComponent={<GoogleIcon className="w-5"/>}>
                Sign {injection} in with Google
            </Button>
            <Button icon="leading" variant={"secondaryGray"} size={"lg"} customIconComponent={<AppleIcon className="w-5"/>}>
                Sign {injection} with Apple
            </Button>
            <Button icon="leading" variant={"secondaryGray"} size={"lg"} customIconComponent={<XIcon className="w-5"/>}>
                Sign {injection} with X
            </Button>
        </div>
    )
}

export default AuthenticationButtons