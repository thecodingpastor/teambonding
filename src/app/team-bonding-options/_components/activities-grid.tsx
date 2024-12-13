import { Custom, Indoor, Outdoor, SportEvents, Wellness } from "@/assets";
import AnimatedInView from "@/components/animations";
import { Link } from "@/components/layout/Link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const teamBondingOptions = [
  {
    slug: "outdoor",
    name: "Outdoor Adventures",
    image: Outdoor,
    intro:
      " Outdoor Adventures such as scavenger hunt, outdoor challenges and hiking offer a dynamic and engaging way for teams to bond and develop key skills. These activities are ideal for teams of varying sizes, with recommended group sizes typically ranging from 2 to 20 members depending on the specific activity.",
  },
  {
    slug: "indoor",
    name: "Indoor Activities/Games",
    image: Indoor,
    intro:
      "Indoor activities offer a controlled environment for team building, perfect for various weather conditions or space constraints. These activities are ideal for teams of varying sizes, with recommended group sizes typically ranging from 4 to 20 members depending on the specific activity.",
  },
  {
    slug: "sport-events",
    name: "Sport Events",
    image: SportEvents,
    intro:
      "Sports games provide an ideal platform for team building, offering an energetic and dynamic environment to foster camaraderie and collaboration. These activities can accommodate a wide range of group sizes, with optimal team numbers often ranging from 4 to 20 participants, depending on the specific sport or game chosen.",
  },
  {
    slug: "wellness-programmes",
    name: "Wellness Programmes",
    image: Wellness,
    intro:
      "Wellness programmes have become important for corporate organizations, as they contribute to employee satisfaction, productivity, and overall well-being. These activities can accommodate a wide range of group sizes, with optimal team numbers often ranging from 2 to 20 participants, depending on the specific sport or game chosen.",
  },
  {
    slug: "",
    name: "Customized Packages",
    image: Custom,
    intro:
      "We can plan a mix of our four categories; Outdoor Adventures, Indoor Games, Sport Events, and Wellness Programmes. For more information, request a quote.",
  },
];

const ActivitiesGrid = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 grid grid-cols-team-fill-minmax gap-4 py-20">
      {teamBondingOptions.map(({ image, intro, slug, name }, index) => (
        <AnimatedInView
          scale={0.97}
          delay={index * 0.1}
          repeat
          key={slug}
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
          {slug && (
            <Link
              href={"/team-bonding-options/" + slug}
              className="px-2 mx-auto"
            >
              <Button
                variant="ghost"
                className="mb-2 text-md font-semibold text-color-orange"
              >
                Learn more
              </Button>
            </Link>
          )}
        </AnimatedInView>
      ))}
    </div>
  );
};

export default ActivitiesGrid;
