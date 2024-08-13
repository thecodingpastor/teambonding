"use client";

import { usePathname } from "next/navigation";
import { Link } from "../Link";

import navList from "./navData";
import { cn } from "@/lib/utils";
const Navlinks = () => {
  const pathname = usePathname();
  return navList.map((item) => (
    <Link
      href={item.link}
      key={item.link}
      className={cn(
        "hover:text-color-orange transition duration-300",
        pathname === item.link && "text-color-orange"
      )}
    >
      {item.label}
    </Link>
  ));
};

export default Navlinks;
