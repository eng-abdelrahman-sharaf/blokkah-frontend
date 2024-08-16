import { randomId } from "@/lib/utils";
import AuthCardHeader from "../../components/authCardHeader";
import SkipSection from "../../log-in/components/skipSection";
import AuthPhoneInput from "../../components/authPhoneInput";

export default function Page() {
    const Input = ({label , placeholder}:{label:string, placeholder:string}) => {
        const id = randomId();
        return (
            <div className="flex flex-col gap-1.5 items-start">
                <label className="text-xl text-Gray-700 font-medium" htmlFor={id}>
                    {label}
                </label>
                <input type="text" className="px-3.5 py-2.5 w-[14.125rem] text-lg font-medium border border-Gray-300 shadow-xs bg-white rounded-lg" placeholder={placeholder} />
            </div>
        )
    }
    return <>
        <AuthCardHeader ContainsArrow={true} title="Create Account" subtitle="Welcome! Please enter your details." href="./method" />
        <form className="w-full flex flex-col gap-4">
            <div className="flex justify-between w-full">
                <Input label="First Name" placeholder="Your first name" />
                <Input label="Last Name" placeholder="Your last name" />
            </div>
            <AuthPhoneInput />
        </form>
        <SkipSection pageType="sign up" answerHref="/buyer/log-in/method" skipHref="/" />
    </>
}