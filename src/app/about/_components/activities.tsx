import { Activities } from "@/assets";
import { Link } from "@/components/layout/Link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const ActivitiesSection = () => {
  return (
    <div className="bg-[#F4F8FF] py-20 px-4 flex flex-col items-center gap-20">
      <h3 className="text-center ">Our Activities</h3>
      <div className="max-w-[1100px] mx-auto ">
        <Image
          src={Activities}
          alt="Activities"
          className="w-full"
          sizes="300vw"
        />
      </div>
      <Link href="/contact">
        <Button>Start here</Button>
      </Link>
    </div>
  );
};

export default ActivitiesSection;
