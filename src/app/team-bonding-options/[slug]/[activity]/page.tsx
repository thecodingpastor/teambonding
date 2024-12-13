import Image from "next/image";
import BreadCrumb from "../_components/BreadCrumb";
import { findSingleTeamBondingOptionsDetails } from "../../_components/activities-data";
import { notFound } from "next/navigation";
import GetQuoteButton from "@/components/layout/app-header/get-quote-button";
import AppAccordion from "@/components/my-accordion";
import AnimatedInView from "@/components/animations";

const SingleActivityDetailPage = async ({
  params: { slug, activity },
}: {
  params: { slug: string; activity: string };
}) => {
  const singleTeamBondingOptionsDetails =
    findSingleTeamBondingOptionsDetails(activity);

  if (!singleTeamBondingOptionsDetails) {
    return notFound();
  }

  const {
    bannerUrl,
    breadCrumb: { childLabel, parentLabel },
    intro,
    name,
    benefits,
    teamSize,
    time,
    requirements,
  } = singleTeamBondingOptionsDetails;

  return (
    <div>
      {/* <div className="w-full min-h-[150px] md:mt-0 mt-[70px]">
        <Image
          alt={childLabel}
          src={bannerUrl}
          width={1400}
          height={500}
          sizes="400vw"
          className="w-full min-h-[150px] object-fill  "
        />
      </div> */}
      <div className="w-full relative min-h-[400px] max-w-[1440px] mx-auto mt-[65px] md:mt-0">
        <Image
          src={bannerUrl}
          alt={childLabel}
          className="min-h-[400px] sm:h-full "
          sizes="400vw"
          fill
        />
        <div
          className="absolute z-[1] text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 py-3 px-6 rounded-md"
          style={{ background: "rgba(0, 0, 0, 0.5)" }}
        >
          <AnimatedInView scale={1.05}>
            <h3 className="text-center">{childLabel}</h3>
          </AnimatedInView>
        </div>
        {/* <div style="background-color: rgba(0, 0, 0, 0.5); padding: 10px;">
          <span style="color: #FFFFFF;">WHITE</span>
        </div> */}
      </div>
      <div className="max-w-[1200px] py-16 mx-auto px-4">
        <BreadCrumb
          parentLink={`/team-bonding-options/${slug}`}
          childLabel={childLabel}
          parentLabel={parentLabel}
        />
        <h3 className="text-color-orange mb-4">{name}</h3>
        <p>{intro}</p>
        <h4 className="mt-10 mb-5 font-bold">
          Benefits of This Activity to your Team
        </h4>
        <div className="space-y-4">
          {benefits.map(({ children, lead }, index) => (
            <AnimatedInView x={-50} opacity={0} key={lead}>
              <div
                key={lead}
                className="p-4 rounded-md hover:-translate-y-1 transition duration-300 border"
                style={{
                  boxShadow: "0px 8.524px 30px 0px rgba(0, 0, 0, 0.09)",
                }}
              >
                <AppAccordion
                  name={lead}
                  content={children.map((item, i) => (
                    <p key={i}>{item}</p>
                  ))}
                  title={
                    <p className="font-bold text-color-green mb-2 ">
                      {lead + ": "}
                    </p>
                  }
                  isOpen={index === 0}
                />
              </div>
            </AnimatedInView>
          ))}
        </div>
        <AnimatedInView y={20} opacity={0}>
          <h4 className="mt-10 mb-5 font-bold">
            Team Size Recommended For This Activity
          </h4>
          <p>{teamSize}</p>
        </AnimatedInView>
        <AnimatedInView y={20} opacity={0}>
          <h4 className="mt-10 mb-5 font-bold">Time Needed</h4>
          <p>{time}</p>{" "}
        </AnimatedInView>
        <AnimatedInView y={20} opacity={0}>
          <h4 className="mt-10 mb-5 font-bold">
            Requirements for Team Members to Be Part of This Activity
          </h4>{" "}
        </AnimatedInView>

        <AnimatedInView y={20} opacity={0}>
          <ul>
            {requirements.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </AnimatedInView>
        <div className="mt-10">
          <GetQuoteButton isLoggedIn={false} text="Request a Quote" />
        </div>
      </div>
    </div>
  );
};

export default SingleActivityDetailPage;
