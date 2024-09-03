"use client";

import useClickOut from "@/hooks/useClickout";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { MdCheck } from "react-icons/md";

interface MyDropdownProps {
  className?: string;
  triggerLabel: React.ReactNode;
  options: string[];
  onChange: any;
  defaultValue?: any;
  reset?: boolean;
  //   onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const MyDropdown = ({
  className,
  defaultValue = "",
  triggerLabel,
  options,
  onChange,
  reset,
}: MyDropdownProps) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(defaultValue || "");

  const closeDropdown = () => setOpen(false);
  const openDropdown = () => {
    if (!open) {
      setOpen(true);
    }
  };

  useEffect(() => {
    if (reset) {
      setSelected("");
    }
  }, [reset]);
  const DOMRef = useClickOut<HTMLUListElement>(() => setOpen(false));

  return (
    <div className={cn("w-full relative text-sm ", className)}>
      <div
        onClick={openDropdown}
        className={cn(
          "bg-[#EEF0F4] cursor-pointer h-12 flex justify-between items-center text-sm px-3 py-2 rounded-[8px] text-muted-foreground",
          !!selected && "text-black",
          open && "pointer-events-none"
        )}
      >
        {open ? triggerLabel : selected || triggerLabel}
        <FaChevronDown
          className={cn("transition duration-300", open ? "-rotate-180" : "")}
        />
      </div>
      {open && (
        <ul
          className="border p-1 rounded-md absolute z-10 bg-white w-[90%] top-14 "
          ref={DOMRef}
        >
          {options.map((item) => (
            <li
              key={item}
              className={cn(
                "cursor-pointer p-2 rounded-md transition duration-300 hover:bg-[#eef0f4] flex gap-4 items-center",
                selected === item && "bg-[#eef0f4]"
              )}
              onClick={() => {
                if (selected === item) {
                  setSelected("");
                  onChange("");
                } else {
                  setSelected(item);
                  onChange(item);
                }
                closeDropdown();
              }}
            >
              {item} {selected === item && <MdCheck className="text-xl" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyDropdown;
