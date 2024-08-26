"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

interface PortalProps {
  children: React.ReactNode;
  containerId?: string; // Optional container ID if you want to target a specific element
}

const ModalPortal = ({ children, containerId = "modal-root" }: PortalProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  if (!mounted) return null;

  const container = document.getElementById(containerId);
  return container ? createPortal(children, container) : null;
};

export default ModalPortal;
