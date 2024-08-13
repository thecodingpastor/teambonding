import { BondingBanner } from "@/assets";
import Image from "next/image";

const BondingBannerSection = () => {
  return (
    <div className="w-full relative min-h-[400px] max-w-[1440px] mx-auto mt-[65px] md:mt-0">
      <Image
        src={BondingBanner}
        alt=""
        sizes="400vw"
        className="min-h-[400px] sm:h-full absolute "
      />
      <h3 className="absolute bottom-[20%] md:top-[30%] left-[10%] z-[1] w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] px-4 font-bold text-[40px] md:text-[50px] lg:text-[64px]">
        Discover Our Range of Team Bonding Activities.
      </h3>
      {/* <div className="relative z-[1] w-full max-w-[600px] px-4">
      </div> */}
    </div>
  );
};

export default BondingBannerSection;
