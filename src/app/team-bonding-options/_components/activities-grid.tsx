import { BondingBanner } from "@/assets";
import { Link } from "@/components/layout/Link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ActivitiesData } from "./activities-data";

const data = {
  name: "Outdoor Activities",
  link: "/outdoor",
  image: BondingBanner,
  intro: "Adventure races, hiking, and outdoor challenges.",
  benefits:
    "Enhances teamwork, boosts morale, and encourages a healthy lifestyle.",
};
const ActivitiesGrid = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 grid grid-cols-team-fill-minmax gap-4 py-20">
      {ActivitiesData.map(
        (
          {
            benefits,
            image,
            intro,
            lead,
            link,
            name,
            requirements,
            teamSize,
            time,
          },
          index
        ) => (
          <div
            key={index}
            className="flex flex-col relative bg-white gap-2 shadow-md rounded-xl overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-[150px]">
              <p className="text-white absolute bottom-0 px-4 py-2 font-bold">
                {name}
              </p>
            </div>
            <Image
              src={image}
              alt={name}
              width={200}
              height={200}
              className="h-[150px] shrink-0"
            />
            <div className="p-3 font-normal text-base relative max-h-[137px] overflow-y-hidden text-ellipsis line-clamp-5 mb-auto ">
              {intro}
            </div>
            <hr />
            <Link
              href={"/team-bonding-options/" + link}
              className="px-2 mx-auto"
            >
              <Button variant="ghost" className="mb-2 text-lg font-black">
                Learn more
              </Button>
            </Link>
          </div>
        )
      )}
    </div>
  );
};

export default ActivitiesGrid;
