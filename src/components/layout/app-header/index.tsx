import { BlackLogo } from "@/assets";
import Image from "next/image";
import { Link } from "../Link";
import Navlinks from "./Navlinks";
import Hamburger from "./hamburger";
import GetQuoteButton from "./get-quote-button";

const AppHeader = () => {
  return (
    <div
      className="w-full flex items-center p-2 fixed md:sticky top-0 bg-white z-30 border-b"
      // style={{ boxShadow: "0px 8px 23.2px 0px rgba(0, 0, 0, 0.09)" }}
    >
      <header className="flex justify-between items-center w-full max-w-[1200px] mx-auto relative">
        <Link href="/">
          <Image
            src={BlackLogo}
            alt="Team Bonding Logo"
            width={100}
            className="w-[100px]"
          />
        </Link>
        <nav className="hidden md:flex gap-4 lg:gap-10 items-center font-bold uppercase ">
          <Navlinks />
          <GetQuoteButton />
        </nav>
        <Hamburger />
      </header>
    </div>
  );
};

export default AppHeader;
