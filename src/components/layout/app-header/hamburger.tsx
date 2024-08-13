"use client";

import classes from "./hamburger.module.scss";
import { cn } from "@/lib/utils";
import useUIStore from "@/store/uiStore";

const Hamburger = () => {
  const setSidebarIsOpen = useUIStore((state) => state.setSidebarIsOpen);
  const sidebarIsOpen = useUIStore((state) => state.sidebarIsOpen);
  return (
    <div
      className={cn(classes.Hamburger, sidebarIsOpen ? classes.Open : "")}
      onClick={() => setSidebarIsOpen(!sidebarIsOpen)}
    >
      <span
        className={cn(
          "bg-foreground h-[2px] w-7",
          sidebarIsOpen && "bg-color-orange"
        )}
      ></span>
      <span
        className={cn(
          "bg-foreground h-[2px] w-7",
          sidebarIsOpen && "bg-color-orange"
        )}
      ></span>
      <span
        className={cn(
          "bg-foreground h-[2px] w-7",
          sidebarIsOpen && "bg-color-orange"
        )}
      ></span>
    </div>
  );
};

export default Hamburger;
