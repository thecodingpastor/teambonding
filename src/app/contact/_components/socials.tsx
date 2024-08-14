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
    link: "#",
  },
  {
    id: "3",
    Icon: FaFacebookF,
    link: "#",
  },
];

const Socials = () => {
  return (
    <div className="flex gap-2">
      {data.map(({ id, Icon, link }) => (
        <a
          href={link}
          target="_blank"
          key={id}
          className="w-[25px] h-[25px] flex items-center justify-center rounded-full p-[4px] text-color-orange border border-color-orange "
        >
          <Icon />
        </a>
      ))}
    </div>
  );
};

export default Socials;
