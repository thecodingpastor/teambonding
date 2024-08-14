import { useRef, useEffect, RefObject } from "react";

type ClickOutHandler = () => void;

const useClickOut = <T extends HTMLElement>(
  handler: ClickOutHandler
): RefObject<T> => {
  const DOMNode = useRef<T>(null);

  useEffect(() => {
    const handleClickOut = (e: MouseEvent) => {
      if (DOMNode.current && !DOMNode.current.contains(e.target as Node)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClickOut);

    return () => {
      document.removeEventListener("mousedown", handleClickOut);
    };
  }, [handler]);

  return DOMNode;
};

export default useClickOut;
