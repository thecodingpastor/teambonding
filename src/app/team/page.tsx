import Image from "next/image";
import { TeamData } from "./_components/data";
import EventLocations from "./_components/event-locations";
import TeamBanner from "./_components/team-banner";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Team",
};

const TeamPage = () => {
  return (
    <div>
      <TeamBanner />

      <div className="max-w-[1100px] mx-auto px-4">
        <p className="text-center text-lg px-4 mt-20 ">
          Meet the Team Behind TeamBondingNigeria
        </p>
        <div className="grid grid-cols-auto-fill-minmax gap-4 pt-10 pb-20 max-w-[700px] mx-auto px-4  ">
          {TeamData.map((item) => (
            <div
              className=" border-2 rounded-2xl flex flex-col items-center text-center py-4 hover:scale-[1.03] transition duration-300"
              key={item.name}
            >
              <Image
                src={item.image}
                alt={item.name}
                className="w-[150px] h-[150px] mb-6"
                sizes="300vw"
              />
              <p className="text-[14px] leading-4 text-color-orange">
                {item.role}
              </p>
              <h4 className="text-[20px] mb-2 font-aleo font-black ">
                {item.name}
              </h4>
              <p className="font-thin leading-5 px-2">{item.bio}</p>
            </div>
          ))}
        </div>
        <EventLocations />
      </div>
    </div>
  );
};

export default TeamPage;
