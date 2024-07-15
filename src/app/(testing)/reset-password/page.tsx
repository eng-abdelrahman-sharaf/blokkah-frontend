import { fontSizesAliases } from "@/app/lib/utils";
import { Button } from "@/components/UI/Button";
import {
  Card,
  CardChildContainer,
  HeaderTextContainer,
  CardDescription,
  CardTitle,
  HeaderImage,
} from "@/components/UI/Card";
import Input from "@/components/UI/Input";
import { Eye, Lock } from "@/components/icons";
import arrowLeft from "@/components/icons/arrow-left.svg";
import CheckMark from "@/components/icons/check-mark";
import logoIcon from "@/components/icons/logo.svg";

const Criterion = ({
  criterion,
  success,
}: {
  criterion: string;
  success: Boolean;
}) => {
  const className = success ? "fill-Success-600" : "fill-Gray-400";
  return (
    <div className="flex gap-2">
      <CheckMark PathClassName={className} />
      <div
        className={`text-Gray-800 ${fontSizesAliases["text-md"]} font-light`}
      >
        {criterion}
      </div>
    </div>
  );
};

export default function Home() {
  return (
    <main className="flex justify-center items-center h-screen">
      <Card>
        <CardChildContainer>
          <HeaderImage src={logoIcon.src} />
          <HeaderTextContainer>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Congratulations! Your account has been successfully verified. For
              security purposes, we kindly ask you to provide a new password
              below.
            </CardDescription>
          </HeaderTextContainer>
        </CardChildContainer>
        <CardChildContainer className="items-stretch">
          <div className="flex gap-4 flex-col">
            <Input inputType="password" startComponent={<Lock />} endComponent={<Eye />} label="New Passsword"  placeholder="••••••••"/>
            <Input inputType="password" startComponent={<Lock />} endComponent={<Eye />} label="Rewrite New Password" placeholder="••••••••"/>
          </div>
          <div className="flex flex-col gap-0 items-start">
            <Criterion
              criterion="Require at least one uppercase letter."
              success={true}
            />
            <Criterion
              criterion="Require at least one of special characters (e.g #$%&)."
              success={false}
            />
            <Criterion
              criterion="Require at least 8 characters. "
              success={false}
            />
          </div>
          <div className="flex flex-col gap-4">
            <Button variant={"primary"} size={"sm"} className="w-full">
              verify
            </Button>
            <Button
              variant={"secondaryGray"}
              size={"sm"}
              className="w-full"
              icon={"leading"}
              iconSrc={arrowLeft.src}
            >
              Back to Login
            </Button>
          </div>
        </CardChildContainer>
      </Card>
    </main>
  );
}
