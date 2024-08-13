import { BannerImage, WhiteLogo } from "@/assets";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="w-full relative min-h-[400px] max-w-[1440px] mx-auto mt-[65px] md:mt-0">
      <Image
        src={BannerImage}
        alt=""
        className="min-h-[400px] sm:h-full "
        sizes="400vw"
      />
      <div className="absolute z-[1] text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 ">
        <Image
          src={WhiteLogo}
          alt=""
          sizes="300vw"
          className="max-w-[200px] mx-auto "
        />
        <p className="max-w-[400px] min-w-[250px] px-2 text-center mt-4">
          Build <span className="text-color-orange">Stronger</span> Teams
          Through Fun and Engaging Activities.
        </p>
      </div>
    </div>
  );
};

export default Banner;
