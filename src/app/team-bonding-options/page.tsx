import Chosenby from "@/components/home-page/chosenby";
import ActivitiesGrid from "./_components/activities-grid";
import BondingBannerSection from "./_components/bonding-banner";

const TeamBondingOptions = () => {
  return (
    <div className="relative overflow-x-hidden">
      <BondingBannerSection />
      <ActivitiesGrid />
      <Chosenby />
    </div>
  );
};

export default TeamBondingOptions;
