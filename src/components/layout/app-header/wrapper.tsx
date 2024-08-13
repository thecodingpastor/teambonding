"use client";

import { usePathname } from "next/navigation";
import AppHeader from ".";

const AppHeaderWrapper = () => {
  const pathname = usePathname();

  if (pathname !== "/") {
    return <AppHeader />;
  }
  return null;
};

export default AppHeaderWrapper;
