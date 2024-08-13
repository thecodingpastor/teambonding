import AboutSection from "@/components/home-page/about";
import Banner from "@/components/home-page/banner";
import Chosenby from "@/components/home-page/chosenby";
import GetInTouch from "@/components/home-page/get-in-touch";
import WhyChooseUs from "@/components/home-page/why-choose";
import AppHeader from "@/components/layout/app-header";

export default function Home() {
  return (
    <section>
      <Banner />
      <AppHeader />
      <AboutSection />
      <hr />
      <WhyChooseUs />
      <Chosenby />
      <GetInTouch />
    </section>
  );
}
