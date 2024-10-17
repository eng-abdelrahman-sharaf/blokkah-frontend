import Link from "next/link";
import { Logo } from "@/components/icons";
import { Button } from "@/app/[locale]/components/Button";
import GuestIcon from "../assets/GuestIcon";
import LanguageSwitch from "./header/languageSwitch";
import ExploreDropDown from "./header/exploreDropDown";
import { Ham, Menu } from "lucide-react";



const NavItem = ({ href, text }: { href: string; text: string }) => (
  <Button variant={"linkGray"} size={"2xl"} asChild>
    <Link href={href} className="transition-all">
      {text}
    </Link>
  </Button>
);

const NavigationGroup = () => (
  <div className={`flex gap-10 h-full items-center font-medium`}>
    <Logo className="h-8" />
    <nav className="gap-8 hidden xl:flex">
      <ExploreDropDown />
      <NavItem href="/about" text="About" />
      <NavItem href="/contact" text="Contact" />
    </nav>
  </div>
);

const CTAGroup = () => (
  <div className="flex gap-3 items-center">
    <LanguageSwitch />  
    <Button variant={"tertiaryColor"} size={"2xl"} icon={false} >Download app</Button>
    <Button variant={"primary"} icon="leading" size={"2xl"} asChild><Link href="./log-in/method"><div><GuestIcon className="h-6" /></div><span>Sign in</span></Link></Button>
    <div>
      <Menu className="xl:hidden h-14 w-14" />
    </div>
  </div>
)

// !NOTE - use mt-24 for neighbors to be lower the header height 
const Header = ({className}:{className?:string}) => {
  return (
    <header className="bg-Gray-100 px-16 flex justify-between items-center fixed top-0 inset-x-0 h-24 text-2xl z-20 backdrop-blur-lg border border-Gray-300">
        <NavigationGroup />
        <CTAGroup />
    </header>
  );
};

export default Header;
