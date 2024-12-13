import { AboutBannerImage } from "@/assets";
import AnimatedInView from "@/components/animations";
import Image from "next/image";

const AboutBanner = () => {
  // return null;
  return (
    <div className="w-full relative min-h-[400px] max-w-[1440px] mx-auto mt-[65px] md:mt-0">
      <Image
        src={AboutBannerImage}
        alt=""
        sizes="400vw"
        className="min-h-[400px] sm:h-full "
      />
      <div className="absolute z-[1] text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-center w-full max-w-[600px] px-4">
        <AnimatedInView y={-20} opacity={0.5} repeat>
          <h3>About Us</h3>
        </AnimatedInView>
        <AnimatedInView
          y={20}
          opacity={0.5}
          repeat
          className="max-w-[800px] px-2 mt-4 "
        >
          Welcome to Team Bonding Nigeria, a proud subsidiary of Inshape Fitness
          Solutions. We specialize in creating memorable and impactful team
          bonding experiences for corporate organizations and groups.
        </AnimatedInView>
      </div>
    </div>
  );
};

export default AboutBanner;
