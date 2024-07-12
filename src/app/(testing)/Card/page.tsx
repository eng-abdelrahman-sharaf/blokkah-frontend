import { Card , CardChildContainer, HeaderTextContainer,CardDescription,CardTitle,HeaderImage } from "@/components/UI/Card";

import logoIcon from "@/components/icons/logo.svg";

export default function Home() {
  return (
    <main>
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
          
        </CardChildContainer>
      </Card>
    </main>
  );
}
