import { LandingAbout } from "@/assets";
import Image from "next/image";
import { Button } from "../ui/button";
import { Link } from "../layout/Link";
import AnimatedInView from "../animations";

const AboutSection = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 max-w-[500px] md:max-w-[1200px] px-4 mx-auto my-20">
      <Image
        src={LandingAbout}
        alt=""
        width={300}
        className="flex-1 shrink-0 rounded-2xl"
        sizes="300vw"
      />
      <div className="flex-1 shrink-0 flex flex-col gap-6 md:gap-0 lg:pt-6 -order-1 md:order-1">
        <AnimatedInView animation="slideLeft">
          <h3 className="mb-2">About Us</h3>
          <div className="my-auto flex flex-col gap-2 lg:gap-7">
            <p>
              We specialize in creating memorable and impactful team bonding
              experiences for corporate organizations and groups.{" "}
            </p>
            <p>
              Our activities are designed to foster collaboration, enhance
              communication, and build stronger, more cohesive teams.
            </p>
          </div>
          <Link href="/about">
            <Button className="max-w-max mt-2">Learn more </Button>
          </Link>
        </AnimatedInView>
      </div>
    </div>
  );
};

export default AboutSection;
