import AuthCardContainer from "../../components/authCardContainer";
import BuildingBG from "../../components/buildingBG";
import LoginPhoneInput from "../../components/loginPhoneInput";
import SkipSection from "../components/skipSection";
import AuthCardHeader from "../../components/authCardHeader";

export default function Page() { 
    return (
        <div className="w-full h-full flex">
            <BuildingBG/>
            <AuthCardContainer>
                <AuthCardHeader ContainsArrow={true} title="Sign in to Your Account" subtitle="Welcome back! Please enter your phone number."/>
                <div className="gap-1.5 flex flex-col w-full items-start">
                    <div>Phone Number</div>
                    <LoginPhoneInput/>
                </div>
                <SkipSection pageType="log in"/>
            </AuthCardContainer>
        </div>
           
    )
}