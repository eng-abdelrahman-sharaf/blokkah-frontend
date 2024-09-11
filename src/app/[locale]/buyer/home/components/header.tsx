import Link from "next/link";
import { Logo } from "@/components/icons";
import { Button } from "@/components/UI/Button";
import { DropDownBody } from "../../components/dropDown";
import GlobeIcon from "../assets/globeIcon";
import GuestIcon from "../assets/GuestIcon";

const NavLinks = () => (
  <div className="absolute top-full bg-red-500 flex flex-col">
    <Link href={"/home"}>Home</Link>
    <Link href={"/home"}>Home</Link>
    <Link href={"/home"}>Home</Link>
  </div>
);

const ExploreDropDown = () => {
  return (
    <DropDownBody
      dropDownText="Explore"
      buttonProps={{ variant: "linkGray" }}
      AbsoluteMenu={<NavLinks />}
    />
  );
};

const NavItem = ({ href, text }: { href: string; text: string }) => (
  <Button variant={"linkGray"} size={"2xl"} asChild>
    <Link href={href} className="transition-all">
      {text}
    </Link>
  </Button>
);

const NavigationGroup = () => (
  <div className={`flex gap-10 h-full items-center text-2xl font-medium`}>
    <Logo className="h-8" />
    <nav className="flex gap-8 ">
      <ExploreDropDown />
      <NavItem href="/about" text="About" />
      <NavItem href="/contact" text="Contact" />
    </nav>
  </div>
);

const CTAGroup = () => (
  <div className="flex gap-3">
    <Button variant={"tertiaryGray"} size={"2xl"} icon={"leading"} customIconComponent={<GlobeIcon className="h-6"/>}>English</Button>
    <Button variant={"tertiaryColor"} size={"2xl"} >Download app</Button>
    <Button variant={"primary"} icon="leading" customIconComponent={<GuestIcon className="h-6" />} size={"2xl"} ><span className="text-2xl">Sign in</span></Button>
  </div>
)

const Header = () => {

  return (
    <header className="bg-white px-16 flex justify-between items-center fixed top-0 z-30 inset-x-0 h-24">
        <NavigationGroup />
        <CTAGroup />
    </header>
  );
};

export default Header;
