import AuthenticationButtons from "../../components/authenticationButtons";
import AuthCardContainer from "../../components/authCardContainer";
import BuildingBG from "../../components/buildingBG";
import SkipSection from "../components/skipSection";
import AuthCardHeader from "../../components/authCardHeader";

export default function Page() { 
    return (
        <>
            <AuthCardHeader ContainsArrow={false} title="Welcome Back!" subtitle="Please choose your sign in method."/>
            <AuthenticationButtons type="Log in"/>
            <SkipSection pageType="log in"/>
        </>
    )
}