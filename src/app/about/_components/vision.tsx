import { Mission, Vision } from "@/assets";
import Image from "next/image";

const MissionAndVision = () => {
  return (
    <div className="py-20">
      <div className="flex flex-col items-center sm:flex-row max-w-[300px] sm:max-w-[900px] mx-auto">
        <div className="flex-1 shrink-0 text-center sm:text-right flex flex-col sm:items-end justify-center p-4 ">
          <h3 className="max-w-max mx-auto sm:mx-0 mb-5">Our Mission</h3>
          <p>
            To transform workplace dynamics by providing innovative and
            enjoyable team bonding activities that promote unity and
            productivity.
          </p>
        </div>
        <div className="flex-1 shrink-0 p-4 -order-1 sm:order-1 ">
          <Image
            src={Mission}
            alt=""
            sizes="300vw"
            className="max-w-[300px] min-w-[250px] sm:mr-auto  "
          />
        </div>
      </div>
      <div className="flex flex-col items-center sm:flex-row max-w-[300px] sm:max-w-[900px] mx-auto">
        <div className="flex-1 shrink-0 p-4 ">
          <Image
            src={Vision}
            alt=""
            sizes="300vw"
            className="max-w-[300px] min-w-[250px] sm:ml-auto  "
          />
        </div>
        <div className="flex-1 shrink-0 text-center sm:text-left flex flex-col sm:items-start justify-center p-4 ">
          <h3 className="max-w-max mx-auto sm:mx-0 mb-5">Our Vision</h3>
          <p>
            To transform workplace dynamics by providing innovative and
            enjoyable team bonding activities that promote unity and
            productivity.
          </p>
        </div>
      </div>
    </div>
  );
};

export default MissionAndVision;
