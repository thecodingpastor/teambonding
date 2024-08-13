"use client";

import useUIStore from "@/store/uiStore";
import RouteLoading from "./RouteLoading";

const RouteLoadingProvider = ({ children }: { children: React.ReactNode }) => {
  const routeLoading = useUIStore((state) => state.routeLoading);
  return (
    <>
      {routeLoading && <RouteLoading />}
      {children}
    </>
  );
};

export default RouteLoadingProvider;
