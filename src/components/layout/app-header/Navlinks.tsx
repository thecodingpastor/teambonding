"use client";

import { usePathname } from "next/navigation";
import { Link } from "../Link";

import navList from "./navData";
import { cn } from "@/lib/utils";
import AnimatedInView from "@/components/animations";
const Navlinks = ({ isLoggedIn = false }) => {
  const pathname = usePathname();

  return (
    <div className="hidden md:flex gap-4 lg:gap-10 items-center font-semibold uppercase">
      {navList.map((item, index) => (
        <AnimatedInView y={-20} opacity={0} delay={0.1 * index} key={item.link}>
          <Link
            href={item.link}
            className={cn(
              "hover:text-color-orange transition duration-300",
              pathname === item.link && "text-color-orange"
            )}
          >
            {item.label}
          </Link>
        </AnimatedInView>
      ))}
      <AnimatedInView y={-20} opacity={0} delay={0.1 * navList.length}>
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
      </AnimatedInView>
    </div>
  );
};

export default Navlinks;
