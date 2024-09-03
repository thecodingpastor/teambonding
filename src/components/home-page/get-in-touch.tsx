import Link from "next/link";
import { Button } from "../ui/button";
import AnimatedInView from "../animations";

const GetInTouch = () => {
  return (
    <div className="max-w-[500px] md:max-w-[800px] mx-auto px-4 pt-8 md:pt-20">
      {/* <AnimatedInView> </AnimatedInView> */}
      <p className="mb-10">
        We love helping teams like yours enhance open communication and build
        team camaraderie. If you want to rekindle the bonds your team once
        shared, or you’re assembling a new virtual team for the post-pandemic
        world, we are here to help.
      </p>
      <Link href="/contact" className="block w-max mx-auto ">
        <Button>Get in touch</Button>
      </Link>
    </div>
  );
};

export default GetInTouch;
