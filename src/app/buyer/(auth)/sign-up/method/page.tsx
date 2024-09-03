import AuthenticationButtons from "../../components/authenticationButtons";
import SkipSection from "../../components/skipSection";
import AuthCardHeader from "../../components/authCardHeader";

export default function Page() { 
    return (
        <>  
            <AuthCardHeader ContainsArrow={false} title="Create Account" subtitle="Please choose your sign up method."/>
            <AuthenticationButtons type="create account"/>
            <SkipSection pageType="sign up" answerHref="/buyer/log-in/method" skipHref="/"/>
        </>
    )
}