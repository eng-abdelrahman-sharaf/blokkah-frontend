import { Button } from "@/app/[locale]/components/Button";
import AuthCardHeader from "../../components/authCardHeader";
import OTP from "../../components/otp";


export default function Page() { 
    const subtitleComponent = <div className="text-lg font-regular">
            We have sent you a verification code to <span className="font-bold">(+20)1288239807</span> , please enter it to Sign you in Blokkah."
        </div>
    return (
        <>
            <AuthCardHeader ContainsArrow={true} href="./phone" title="Account Verification" subtitleComponent={subtitleComponent} />
            <OTP />
            <div className="flex-col flex items-stretch w-full gap-2">
                <Button variant={"primary"} icon={false} size={"lg"}>Verify</Button>
                <Button variant={"secondaryGray"} >Resend code</Button>
            </div>
        </>
    )
}