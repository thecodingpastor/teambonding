"use client";

import { usePathname } from "next/navigation";

const AppHeaderForHomePage: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const pathname = usePathname();

  let content: React.ReactNode;
  if (pathname !== "/") {
    content = <>{children}</>;
  } else {
    content = null;
  }

  return content;
};

export default AppHeaderForHomePage;
