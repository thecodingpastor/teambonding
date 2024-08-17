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
      <div
        className="w-full min-h-[400px] sm:h-full absolute"
        style={{ background: "rgba(0,0,0,0.3)" }}
      ></div>
      <h3 className="absolute bottom-[15%] left-[5%] z-[1] w-full max-w-[400px] md:max-w-[500px] lg:max-w-[600px] px-4 font-bold text-[35px] md:text-[45px] lg:text-[55px] text-white">
        Discover Our Range of Team Bonding Activities.
      </h3>
    </div>
  );
};

export default BondingBannerSection;
