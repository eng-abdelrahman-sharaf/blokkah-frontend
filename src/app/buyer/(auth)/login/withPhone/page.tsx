import { Button } from "@/components/UI/Button";
import AuthContainer from "../../components/authContainer";
import BuildingBG from "../../components/buildingBG";
import Link from "next/link";
import ArrowHead from "@/app/assets/arrowHead";
import { fontSizesAliases } from "@/app/lib/utils";
import LoginPhoneInput from "../../components/loginPhoneInput";
import SkipSection from "../components/skipSection";
import AuthCardHeader from "../../components/authCardHeader";

export default function Page() { 
    return (
        <div className="w-full h-full flex">
            <BuildingBG/>
            <AuthContainer>
                <AuthCardHeader ContainsArrow={true} title="Sign in to Your Account" subtitle="Welcome back! Please enter your phone number."/>
                {/* <div className="flex flex-col gap-2">
                    <div className="flex gap-6">
                        <ArrowHead className="w-10"/>
                        <h1 className={`${fontSizesAliases["display-sm"]} font-bold text-Gray-900`}>Sign in to Your Account</h1>
                    </div>
                    <h2 className={`${fontSizesAliases["text-lg"]} font-regular text-Gray-600`}>Welcome back! Please enter your phone number.</h2>
                </div> */}
                <div className="gap-1.5 flex flex-col w-full items-start">
                    <div>Phone Number</div>
                    <LoginPhoneInput/>
                </div>
                <SkipSection pageType="log in"/>
            </AuthContainer>
        </div>
           
    )
}