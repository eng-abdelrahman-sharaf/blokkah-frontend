import { randomId } from "@/lib/utils";
import AuthCardHeader from "../../components/authCardHeader";
import SkipSection from "../../components/skipSection";
import AuthPhoneInput from "../../components/authPhoneInput";
import Date from "../components/date";
import Checkbox from "@/app/[locale]/components/checkbox";


const Input = ({
  label,
  placeholder,
}: {
  label: string;
  placeholder: string;
}) => {
  const id = randomId();
  return (
      <label className="text-xl flex-grow text-Gray-700 font-medium flex flex-col gap-1.5 items-start" htmlFor={id}>
        <div className="ml-1">{label}</div>
        <input
          type="text"
          className="px-3.5 py-2.5 w-full text-lg font-medium border border-Gray-300 shadow-xs bg-white rounded-lg placeholder:text-Gray-500"
          placeholder={placeholder}
        />
      </label>
  );
};

export default function Page() {
  return (
    <>
      <AuthCardHeader
        ContainsArrow={true}
        title="Create Account"
        subtitle="Welcome! Please enter your details."
        href="./method"
      />
      <form className="w-full flex flex-col gap-4">
        <div className="flex w-full gap-4">
          <Input label="First Name" placeholder="Your first name" />
          <Input label="Last Name" placeholder="Your last name" />
        </div>
        <AuthPhoneInput />
        <Date label="Date of Birth (Gregorian)" />
        <Checkbox
        labelChild={
          <div className="text-md font-medium text-Gray-500">
            {"By creating account, You agree to our "}
            <a href="#" className="text-Gray-700">
              Terms and Conditions
            </a>
          </div>
        }
      />
      </form>
      <SkipSection
        pageType="sign up"
        answerHref="../log-in/method"
        skipHref="/"
      />
    </>
  );
}
