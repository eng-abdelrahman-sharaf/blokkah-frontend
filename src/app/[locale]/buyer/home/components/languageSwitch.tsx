"use client"

import { usePathname } from "next/navigation";
import { languageNames } from "@/lib/internationalization";
import { Button } from "@/components/UI/Button";
import GlobeIcon from "../assets/globeIcon";
import Link from "next/link";

export default function LanguageSwitch() {
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];
  // we have only two languages so it is implemented in this way
  const otherLocale = currentLocale === "ar" ? "en" : "ar";

  return (
    <>
    <Button variant={"tertiaryGray"} size={"2xl"} icon={"leading"} asChild>
      {/* we use substring(3) because /ar, /en, /fr ... and so on consist 3 chars */}
      <Link href={`/${otherLocale}${pathname.substring(3)}`}>
        <div>
          <GlobeIcon/>
        </div>
        <div>{languageNames[otherLocale]}</div>
      </Link>
    </Button>
    </>
  );
}
