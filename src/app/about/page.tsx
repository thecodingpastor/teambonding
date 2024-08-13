import GetInTouch from "@/components/home-page/get-in-touch";
import AboutBanner from "./_components/about-banner";
import MissionAndVision from "./_components/vision";
import ActivitiesSection from "./_components/activities";
import Testimonials from "./_components/testimonials";

const AboutPage = () => {
  return (
    <div className="relative overflow-x-hidden">
      <AboutBanner />
      <MissionAndVision />
      <ActivitiesSection />
      <Testimonials />
      <GetInTouch />
    </div>
  );
};

export default AboutPage;
