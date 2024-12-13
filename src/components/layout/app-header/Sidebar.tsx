"use client";

import navList from "./navData";
import { Link } from "../Link";
import Image from "next/image";
import { Logo } from "@/assets";
import { cn } from "@/lib/utils";
import useUIStore from "@/store/uiStore";
import Overlay from "../Overlay";
import { usePathname } from "next/navigation";
import AnimatedInView from "@/components/animations";

const Sidebar = () => {
  const sidebarIsOpen = useUIStore((state) => state.sidebarIsOpen);
  const setSidebarIsOpen = useUIStore((state) => state.setSidebarIsOpen);
  const pathname = usePathname();
  return (
    <>
      <aside
        className={cn(
          "w-[250px] fixed z-50 top-[65px] right-0 h-[calc(100vh-65px)] bg-background transition duration-300 md:hide-completely flex flex-col",
          sidebarIsOpen ? "translate-x-0" : "translate-x-[250px]"
        )}
      >
        <nav className="flex flex-col gap-6 uppercase font-bold px-4 pt-10 ">
          {navList.map((item, index) => (
            <AnimatedInView
              delay={0.1 * index}
              x={100}
              opacity={0}
              key={item.link}
              repeat
            >
              <Link
                href={item.link}
                className={pathname === item.link ? "text-color-orange" : ""}
                onClick={() => setSidebarIsOpen(false)}
              >
                {item.label}
              </Link>
            </AnimatedInView>
          ))}
          <AnimatedInView
            delay={0.1 * navList.length}
            x={100}
            opacity={0}
            repeat
          >
            <Link
              href="/contact"
              className={pathname === "/contact" ? "text-color-orange" : ""}
              onClick={() => setSidebarIsOpen(false)}
            >
              Contact
            </Link>
          </AnimatedInView>
        </nav>
        <Link
          href="/"
          className="mt-auto absolute bottom-0 pb-10 self-center"
          onClick={() => setSidebarIsOpen(false)}
        >
          <Image
            src={Logo}
            width={80}
            alt="Team Bonding Logo"
            className="w-[80px]"
          />
        </Link>
      </aside>
      {sidebarIsOpen && <Overlay close={() => setSidebarIsOpen(false)} />}
    </>
  );
};

export default Sidebar;
