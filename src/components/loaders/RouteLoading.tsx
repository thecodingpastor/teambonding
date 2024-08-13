"use client";

import { useEffect, useState } from "react";

import "./RouteLoading.css";

const RouteLoading = () => {
  const [Progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 5));
    }, 500);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-[100vw] fixed z-[50000000] h-2 top-0 left-0">
      <div
        style={{ width: `${Progress}%` }}
        className="loading_bar bg-color-orange h-full"
      />
    </div>
  );
};

export default RouteLoading;
