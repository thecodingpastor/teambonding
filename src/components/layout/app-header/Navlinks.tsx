"use client";

import { usePathname } from "next/navigation";
import { Link } from "../Link";

import navList from "./navData";
import { cn } from "@/lib/utils";
const Navlinks = ({ isLoggedIn = false }) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex gap-4 lg:gap-10 items-center font-bold uppercase">
      {navList.map((item) => (
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
      ))}
      {!isLoggedIn ? (
        <Link
          href="/contact"
          className={cn(
            "hover:text-color-orange transition duration-300",
            pathname === "/contact" && "text-color-orange"
          )}
        >
          contact
        </Link>
      ) : (
        <Link
          href="/dashboard"
          className={cn(
            "hover:text-color-orange transition duration-300",
            pathname === "/dashboard" && "text-color-orange"
          )}
        >
          Dashboard
        </Link>
      )}
    </div>
  );
};

export default Navlinks;
