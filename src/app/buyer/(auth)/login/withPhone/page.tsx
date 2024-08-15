import AuthCardContainer from "../../components/authCardContainer";
import BuildingBG from "../../components/buildingBG";
import LoginPhoneInput from "../../components/loginPhoneInput";
import SkipSection from "../components/skipSection";
import AuthCardHeader from "../../components/authCardHeader";

export default function Page() { 
    return (
        <>
            <AuthCardHeader ContainsArrow={true} href="./chooseMethod" title="Sign in to Your Account" subtitle="Welcome back! Please enter your phone number."/>
            <div className="gap-1.5 flex flex-col w-full items-start">
                <div className="text-xl font-medium">Phone Number</div>
                <LoginPhoneInput/>
            </div>
            <SkipSection pageType="log in"/>
        </>           
    )
}