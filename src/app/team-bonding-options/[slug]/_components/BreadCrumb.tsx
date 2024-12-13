import AnimatedInView from "@/components/animations";
import { Link } from "@/components/layout/Link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Chevron = () => (
  <FaChevronRight className="text-color-orange text-base " />
);

const BreadCrumb = ({
  parentLabel,
  parentLink,
  childLabel,
}: {
  parentLabel: string;
  parentLink: string;
  childLabel: string;
}) => {
  return (
    <div className="flex gap-1 md:gap-3 flex-wrap items-center mb-4 -mt-10 md:mt-0 md:mb-10">
      <AnimatedInView
        className="flex items-center gap-1 md:gap-3"
        x={20}
        repeat
      >
        <Link href="/">Home</Link> <Chevron />{" "}
      </AnimatedInView>
      <AnimatedInView
        className="flex items-center gap-1 md:gap-3"
        x={20}
        repeat
        delay={0.1}
      >
        <Link href="/team-bonding-options">Team Bonding Options</Link>{" "}
        <Chevron />{" "}
      </AnimatedInView>
      <AnimatedInView
        className="flex items-center gap-1 md:gap-3"
        x={20}
        repeat
        delay={0.2}
      >
        <Link href={parentLink}>{parentLabel}</Link> <Chevron />{" "}
      </AnimatedInView>
      <AnimatedInView
        className="flex items-center gap-1 md:gap-3"
        x={20}
        repeat
        delay={0.3}
      >
        <p className="font-black">{childLabel}</p>
      </AnimatedInView>
    </div>
  );
};

export default BreadCrumb;
