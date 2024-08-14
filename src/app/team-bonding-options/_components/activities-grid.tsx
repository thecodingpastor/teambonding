import { BondingBanner } from "@/assets";
import { Link } from "@/components/layout/Link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const data = {
  name: "Outdoor Activities",
  image: BondingBanner,
  intro: "Adventure races, hiking, and outdoor challenges.",
  benefits:
    "Enhances teamwork, boosts morale, and encourages a healthy lifestyle.",
};
const ActivitiesGrid = () => {
  return (
    <div className="max-w-[900px] mx-auto px-4 grid grid-cols-team-fill-minmax gap-4 py-20">
      {Array.from({ length: 5 }, (_, index) => (
        <div
          key={index}
          className="flex flex-col relative bg-white gap-2 shadow-md rounded-xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-[150px] bg-black opacity-40"></div>
          <Image
            src={data.image}
            alt=""
            width={200}
            height={200}
            className="h-[150px] shrink-0"
          />
          <div className="p-3">
            <p>{data.intro}</p>
            <div>
              <p className="!font-black">Benefits: </p> {data.benefits}
            </div>
          </div>
          <hr />
          <Link
            href={"/team-bonding-options/" + data.name}
            className="px-2 mx-auto"
          >
            <Button variant="ghost" className="mb-2 text-lg font-black">
              Learn more
            </Button>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default ActivitiesGrid;
