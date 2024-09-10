import Link from "next/link";
import { Logo } from "@/components/icons";
import { fontSizesAliases } from "@/lib/utils";

const Header = () => {
  return (
    <header className="bg-white px-10 flex justify-between">
      <div
        className={`flex gap-10 h-full items-center ${fontSizesAliases["display-xs"]} font-medium text-Gray-600`}
      >
        <Logo className="h-8" />

        <nav className="hidden md:flex space-x-6">
          <Link href="/home" className="text-gray-800 hover:text-gray-600">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-gray-600">
            About
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-gray-600">
            Contact
          </Link>
        </nav>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex space-x-4">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          CTA 1
        </button>
        <button className="bg-green-500 text-white px-4 py-2 rounded">
          CTA 2
        </button>
        <button className="bg-red-500 text-white px-4 py-2 rounded">
          CTA 3
        </button>
      </div>
    </header>
  );
};

export default Header;
