import { FooterBG, WhiteLogo } from "@/assets";
import Image from "next/image";
import navList from "../app-header/navData";
import { Link } from "../Link";
import AddressSpan from "./address-span";
import Socials from "@/app/contact/_components/socials";

const AppFooter = () => {
  return (
    <footer className="max-w-[100vw] relative h-auto px-10 py-20">
      <Image
        src={FooterBG}
        alt=""
        fill
        className="w-full h-auto absolute inset-0 -z-[1]"
      />
      <div className="text-white max-w-[1200px] px-4 mx-auto flex flex-col gap-10 justify-center items-center">
        <Link href="/">
          <Image
            src={WhiteLogo}
            alt=""
            width={200}
            height={150}
            className="w-[200px] sm:w-[250px]"
            sizes="300vw"
          />
        </Link>
        <div className="flex gap-10 uppercase justify-center flex-wrap">
          {navList.map((item) => (
            <Link href={item.link} key={item.link}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact">Contact</Link>
        </div>
        <hr className="bg-white text-white h-[1px] w-full" />
        <div className="text-center font-light flex flex-col gap-3">
          <p>
            <AddressSpan /> Office HQ | 22, Primate Adejobi Street, Mende,
            Anthony, Ikeja, Lagos. Nigeria
          </p>
          <p>
            Contact Us: Phone +2348032622079 <br />| e-mail:{" "}
            <a href="mailto:booking@teambondingnigeria.com">
              booking@teambondingnigeria.com
            </a>
          </p>
          <div className="flex gap-4 items-center justify-center !text-white">
            Follow us on <Socials white />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default AppFooter;
