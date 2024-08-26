import { Experience, Solutions, Success } from "@/assets";
import Image from "next/image";
import AnimatedInView from "../animations";

const data = [
  {
    id: "1",
    title: "Expertise & Experience",
    text: "With years of experience in the fitness and team building industry, we bring unparalleled expertise to every event we organize.",
    img: Experience,
  },
  {
    id: "2",
    title: "Customized Solutions",
    text: "We understand that every team is unique, which is why we offer customized solutions that cater to your specific needs and objectives.",
    img: Solutions,
  },
  {
    id: "3",
    title: "Proven Success",
    text: "Our activities have successfully transformed team dynamics for numerous corporate clients, leading to improved performance and satisfaction.",
    img: Success,
  },
];
const WhyChooseUs = () => {
  return (
    <div className="my-20 max-w-[1200px] mx-auto px-4">
      <h3 className="sm:text-center sm:mx-auto">Why Choose Us?</h3>
      <div className="flex flex-col md:flex-row gap-10 mt-10 sm:mx-auto sm:max-w-max">
        {data.map((item, index) => (
          <AnimatedInView
            animation={
              index === 0 ? "slideRight" : index === 1 ? "zoom" : "slideLeft"
            }
            key={item.id}
          >
            <div className="max-w-[300px]">
              <div className="max-w-[200px] h-[200px] relative">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h4 className="text-color-green text-2xl mb-2 font-bold">
                {item.title}
              </h4>
              <p>{item.text}</p>
            </div>
          </AnimatedInView>
        ))}
      </div>
    </div>
  );
};

export default WhyChooseUs;
