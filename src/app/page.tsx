import { AVButton } from "@/components/UI/Button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardHeaderImage,
  CardTextContainer,
  CardTitle,
} from "@/components/UI/Card";
import logoIcon from "@/components/icons/logo.svg";

export default function Home() {
  return (
    <main>
      <Card>
        <CardHeader>
          <CardHeaderImage src={logoIcon.src} />
          <CardTextContainer>
            <CardTitle>Reset Password</CardTitle>
            <CardDescription>
              Congratulations! Your account has been successfully verified. For
              security purposes, we kindly ask you to provide a new password
              below.
            </CardDescription>
          </CardTextContainer>
        </CardHeader>
      </Card>
    </main>
  );
}
