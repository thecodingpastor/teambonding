import { TeamBondingBanner } from "@/assets";
import Image from "next/image";

const TeamBanner = () => {
  return (
    <div className="w-full relative min-h-[400px] max-w-[1440px] mx-auto mt-[65px] md:mt-0">
      <Image
        src={TeamBondingBanner}
        alt=""
        className="min-h-[400px] sm:h-full "
        sizes="400vw"
      />
      <div className="absolute z-[1] text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <h3>The Team</h3>
      </div>
    </div>
  );
};

export default TeamBanner;
