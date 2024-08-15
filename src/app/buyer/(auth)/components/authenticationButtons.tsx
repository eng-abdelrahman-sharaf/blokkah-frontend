import { Button } from "@/components/UI/Button";
import PhoneIcon from "../../assets/phoneIcon";
import GoogleIcon from "../../assets/googleIcon";
import AppleIcon from "../../assets/appleIcon";
import XIcon from "../../assets/xIcon";
import { cn, fontSizesAliases } from "@/app/lib/utils";
import { redirect } from "next/dist/server/api-utils";
import Link from "next/link";

const AuthenticationButtons = ({ className, type }: { className?: string, type: "create account"|"Log in" }) => {
    let injection : "in"|"up";
    if (type == "Log in") {
        injection = "in"
    }
    else{
        injection = "up"
    }
    return (
        <div className={cn(`gap-5 flex flex-col ${fontSizesAliases["text-xl"]} font-medium w-full [&>*>*:last-child]:w-full`, className)}>
            <Link href="./withPhone" className="[&>*>*:last-child]:w-full"> 
                <Button icon="leading" variant={"primary"} size={"lg"} customIconComponent={PhoneIcon()} >
                    Sign {injection} with Phone number
                </Button>
            </Link>
            <Button icon="leading" variant={"secondaryGray"} size={"lg"} customIconComponent={GoogleIcon()}>
                Sign {injection} in with Google
            </Button>
            <Button icon="leading" variant={"secondaryGray"} size={"lg"} customIconComponent={AppleIcon()}>
                Sign {injection} with Apple
            </Button>
            <Button icon="leading" variant={"secondaryGray"} size={"lg"} customIconComponent={XIcon()}>
                Sign {injection} with X
            </Button>
        </div>
    )
}

export default AuthenticationButtons