import GetQuoteButton from "@/components/layout/app-header/get-quote-button";
import ActivityCarousel from "./_components/activity-carousel";
import { notFound } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "@/components/layout/Link";
import { Button } from "@/components/ui/button";
import { Metadata } from "next";
import customFetch from "@/lib/customFetch";
import Image from "next/image";
import { TeamBondingOptionsDetails } from "../_components/activities-data";
import AnimatedInView from "@/components/animations";

// METADATA
export async function generateMetadata({
  params: { slug },
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const teamBondingOption = TeamBondingOptionsDetails.find(
      (item) => item.url === slug
    );

    if (teamBondingOption) {
      return {
        title: teamBondingOption?.name,
        description: teamBondingOption?.intro,
        //COMPARE THIS WITH THE TWITTER OPTION
        // openGraph: {
        //   images: [{ url: bundle?.imageUrl[0] }],
        // },
        twitter: {
          card: "summary_large_image",
          title: teamBondingOption?.name,
          description: teamBondingOption?.intro,
          // images: [bundle?.imageUrl[0]],
        },
        alternates: {
          canonical:
            "https://teambondingnigeria.com/team-bonding-options/" +
            teamBondingOption?.url,
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
}: {
  params: { slug: string };
}) => {
  const teamBondingOption = TeamBondingOptionsDetails.find(
    (item) => item.url === slug
  );

  if (!teamBondingOption) {
    return notFound();
  }

  const activityData = await customFetch("/api/clients?category=" + slug);
  const { activities, intro, name } = teamBondingOption;

  return (
    <>
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
        {activityData?.length > 0 && <ActivityCarousel data={activityData} />}
        <div className="my-10 pb-8">
          <GetQuoteButton isLoggedIn={false} text={"Request a Quote"} />
        </div>
      </div>
      <div className=" bg-[#EEF0F4] py-16 sm:py-24">
        <div className="max-w-[1100px] !mx-auto px-4 ">
          <h3 className="text-center mb-10 ">Activities</h3>
          <div className="grid grid-cols-team-fill-minmax gap-4 max-w-[900px] justify-center mx-auto">
            {activities?.map((item, index) => (
              <AnimatedInView
                repeat
                opacity={0.6}
                scale={0.95}
                delay={index * 0.1}
                key={item.name}
                className="flex flex-col rounded-2xl shadow-md bg-white relative overflow-hidden"
              >
                <Image
                  alt={item.name}
                  src={item.img}
                  width={300}
                  height={150}
                  className="!h-[150px]"
                  sizes="300vw"
                />
                <div className="px-2 pb-4 flex flex-1 flex-col ">
                  <h4 className="font-semibold text-[22px] my-3 ">
                    {item.name}
                  </h4>
                  <p className="leading-5 text-sm sm:text-[16px] mb-4">
                    {item.intro}
                  </p>
                  <Link
                    href={`/team-bonding-options/${slug}/${item.url}`}
                    className="block mt-auto"
                  >
                    <Button className=" w-[130px] bg-white text-color-orange font-bold ">
                      Learn more
                    </Button>
                  </Link>
                </div>
              </AnimatedInView>
            ))}
          </div>
        </div>
        <div className="mt-20 w-full flex items-center justify-center">
          <GetQuoteButton isLoggedIn={false} text="Request a Quote" />
        </div>
      </div>
    </>
  );
};

export default SingleActivityPage;
