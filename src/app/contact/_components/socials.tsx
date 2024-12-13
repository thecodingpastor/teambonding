import { Link } from "@/components/layout/Link";
import { cn } from "@/lib/utils";
import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const data = [
  {
    id: "1",
    Icon: FaInstagram,
    link: "https://www.instagram.com/team_bonding_nigeria/",
  },
  {
    id: "2",
    Icon: BsTwitterX,
    link: "https://www.instagram.com/team_bonding_nigeria/",
  },
  {
    id: "3",
    Icon: FaFacebookF,
    link: "https://www.facebook.com/profile.php?id=61565692408924",
  },
];

const Socials = ({ white = false }) => {
  return (
    <div className="flex gap-2">
      <Link
        href="#"
        className="hidden w-0 h-0 opacity-0 pointer-events-none"
      ></Link>
      {data.map(({ id, Icon, link }) => (
        <a
          href={link}
          target="_blank"
          key={id}
          className={cn(
            "w-[25px] h-[25px] flex items-center justify-center rounded-full p-[4px] text-color-orange border border-color-orange ",
            white && "text-white border-white"
          )}
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
