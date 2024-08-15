import { fontSizesAliases } from "@/lib/utils";
import { Button } from "@/components/UI/Button";
import Link from "next/link";

const SkipSection = ({ pageType }: { pageType: "sign up" | "log in" }) => {
  const Question = pageType === "sign up" ? "Already have an account?" : "Don’t have an account?";
  const LinkText = pageType === "sign up" ? "Create Account" : "Sign in";
  return <>
    <div
      className={`justify-center items-center gap-1 inline-flex font-medium text-lg`}
    >
      <div className="text-Gray-500">{Question}</div>
      <Link href={"/buyer/signUp"} className="text-Gray-700">
        {LinkText}
      </Link>
    </div>
    <Button variant={"tertiaryGray"} size={"sm"} className="w-fit">
      <Link href={"/"}>Skip for later</Link>
    </Button>
  </> 
}

export default SkipSection;