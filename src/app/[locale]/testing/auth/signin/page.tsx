"use client";

import GoogleIcon from "@/app/[locale]/(user-flow)/assets/googleIcon";
import { Button } from "@/app/[locale]/components/Button";

import { url } from "inspector";
// import { signIn } from "next-auth/react";

export default function Page() {
  return (
    <Button
      icon="leading"
      variant={"secondaryGray"}
      size={"lg"}
      customIconComponent={<GoogleIcon className="w-5" />}
      className="w-[70%]"
      onClick={() => {
        // signIn("google", { callbackUrl: "/", redirect: false });
      }}
    >
      Sign in in with Google
    </Button>
  );
}
