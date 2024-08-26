import GetQuoteButton from "@/components/layout/app-header/get-quote-button";
import ActivityCarousel from "./_components/activity-carousel";
import { notFound } from "next/navigation";
import { fetchActivity } from "./simulate-fetch";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "@/components/layout/Link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";

// METADATA
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const activity = await fetchActivity(slug);

    if (activity) {
      return {
        title: activity?.name,
        description: activity?.intro,
        //COMPARE THIS WITH THE TWITTER OPTION
        // openGraph: {
        //   images: [{ url: bundle?.imageUrl[0] }],
        // },
        twitter: {
          card: "summary_large_image",
          title: activity?.name,
          description: activity?.intro,
          // images: [bundle?.imageUrl[0]],
        },
        alternates: {
          canonical:
            "https://teambondingnigeria.com/team-bonding-options/" +
            activity?.link,
        },
      };
    }
  } catch (error) {
    return {
      title: "Not found",
      description: "The option you are looking for cannot be found",
    };
  }

  return {
    title: "Not found",
    description: "The option you are looking for cannot be found",
  };
}

const SingleActivityPage = async ({
  params: { slug },
}: // searchParams,
{
  params: { slug: string };
  // searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const activity = await fetchActivity(slug);

  if (!activity) {
    return notFound();
  }
  const {
    benefits,
    image,
    intro,
    lead,
    link,
    name,
    requirements,
    teamSize,
    time,
  } = activity;
  return (
    <div className="max-w-[1100px] mx-auto px-4 relative">
      <Link
        href="/team-bonding-options"
        className="text-xl absolute mr-[20px] -top-[50px] md:top-2 right-0"
      >
        <Button
          hideArrow
          className="bg-white text-muted-foreground hover:text-black transition duration-300 border-[2px]  hover:border-[2px] hover:border-black"
        >
          <FaArrowLeft className="" />
          Back
        </Button>
      </Link>
      <div className="mt-32 md:mt-20 mb-5 md:mb-10 flex justify-between items-center">
        <h3 className="">{name}</h3>
      </div>
      <p>{intro}</p>
      <ActivityCarousel />
      <p>{lead}</p>
      <div className="my-10 mb-6">
        <div className="mb-6">
          <h4 className="font-bold text-[28px] mb-2">
            Team Size Recommended for This Activity
          </h4>
          {teamSize.map((item, index) => (
            <p key={index} className="mb-1">
              {item}
            </p>
          ))}
        </div>
        <div className="mb-6">
          <h4 className="font-bold text-[28px] mb-2">Time Needed</h4>
          {time.map((item, index) => (
            <p key={index} className="mb-1">
              {item}
            </p>
          ))}
        </div>
        <div className="mb-6">
          <h4 className="font-bold text-[28px] mb-2">
            Benefits of This Activity to Your Team
          </h4>
          {benefits.map(({ topic, intro, list }, index) => (
            <div key={index} className="mb-1">
              {intro && (
                <p>
                  <span className="font-bold text-lg text-color-orange ">
                    {topic + ": "}
                  </span>
                  {intro}
                </p>
              )}
              <div className="mt-4 mb-10">
                {list.map(({ lead, children }, index) => (
                  <div key={index} className="mb-4">
                    {lead && (
                      <p className="font-bold text-color-green">
                        {lead + ": "}
                      </p>
                    )}
                    {children.map((child, index) => (
                      <p key={index}>{child}</p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mb-6">
          <h4 className="font-bold text-[28px] mb-5">
            Requirements for Team Members to Be Part of This Activity
          </h4>
          <div className="mt-4 mb-10">
            {requirements.map(({ lead, list }, index) => (
              <div key={index} className="mb-4">
                {lead && (
                  <p className="font-bold text-color-orange">{lead + ": "}</p>
                )}
                {list.map((child, index) => (
                  <p key={index}>{child}</p>
                ))}
              </div>
            ))}
          </div>
          {/* {requirements.map(({ lead, list }, index) => (
              <p key={index} className="mb-1">
                {lead}
              </p>
            ))} */}
        </div>
      </div>
      <div className="my-10">
        <GetQuoteButton isLoggedIn={false} text={"Request a Quote"} />
      </div>
    </div>
  );
};

export default SingleActivityPage;
