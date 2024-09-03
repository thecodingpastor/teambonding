import customFetch from "@/lib/customFetch";
import BrandsCarousel from "./brands-carousel";

const Chosenby = async () => {
  const brands = await customFetch("/api/clients");

  const carouselData = brands?.map((item: any) => {
    return { id: item?._id, name: item?.name, image: item?.images[0]?.url };
  });
  return (
    <div className="bg-[#EEF0F4] py-10 sm:py-20 max-w-[1440px] mx-auto px-4">
      <h3 className="text-center mb-10">Chosen By</h3>
      <BrandsCarousel carouselData={carouselData} />
    </div>
  );
};

export default Chosenby;
