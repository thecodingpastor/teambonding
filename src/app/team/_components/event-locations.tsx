import Image from "next/image";
import { cn } from "@/lib/utils";

import { Beach, IITA, Lakowe, Office, Parks } from "@/assets";

import classes from "./style.module.css";
import AnimatedInView from "@/components/animations";

const data = [
  {
    label: "IITA Ibadan",
    image: IITA,
  },
  {
    label: "Lakowe Lakes",
    image: Lakowe,
  },
  {
    label: "Office Spaces",
    image: Office,
  },
  {
    label: "Private Beaches",
    image: Beach,
  },
  {
    label: "Parks",
    image: Parks,
  },
];

const EventLocations = () => {
  return (
    <div className="my-20 text-center mx-auto">
      <h3 className="mb-6">Event Locations</h3>
      <p>Recommended venues for your team bonding activities</p>
      <div className="flex flex-wrap gap-6 items-center justify-center max-w-[800px] mx-auto mt-10 ">
        {data.map((item, index) => (
          //   <AnimatedInView
          //   key={item.name}
          //   repeat
          //   opacity={0.5}
          //   scale={1.05}
          //   delay={0.1 * index}
          // ></AnimatedInView>
          <AnimatedInView
            key={item.label}
            repeat
            opacity={0.5}
            scale={1.05}
            delay={0.1 * index}
            className={cn(
              "relative w-[220px] h-[160px] rounded-xl overflow-hidden",
              classes.Container
            )}
          >
            <Image
              src={item.image}
              alt={item.label}
              className="absolute w-full h-full -z-[1]"
              sizes="400vw"
            />
            <div
              className="w-full h-full absolute -z-[1]"
              style={{ background: "rgba(0,0,0,.3)" }}
            ></div>
            <p className="text-white absolute z-10 bottom-0 p-3">
              {item.label}
            </p>
          </AnimatedInView>
        ))}
      </div>
    </div>
  );
};

export default EventLocations;
