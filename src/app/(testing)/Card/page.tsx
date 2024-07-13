import { Button } from "@/components/UI/Button";
import { Card , CardChildContainer, HeaderTextContainer,CardDescription,CardTitle,HeaderImage } from "@/components/UI/Card";
import arrowLeft from "@/components/icons/arrow-left.svg";
import logoIcon from "@/components/icons/logo.svg";

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
        <CardChildContainer>
          <Button variant={"primary"} size={"sm"} className="w-full">verify</Button>
          <Button variant={"secondaryGray"} size={"sm"} className="w-full" icon={"leading"} iconSrc={arrowLeft.src}>Back to Login</Button>
        </CardChildContainer>
      </Card>
    </main>
  );
}
