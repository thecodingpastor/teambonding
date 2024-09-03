"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Carousel.module.css";
import Image from "next/image";

import { CarouselData } from "./data";
import { FaArrowLeft, FaArrowRight, FaChevronRight } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import GalleryModal from "../../_components/gallery-modal";

const ActivityCarousel = ({ data }: any) => {
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      delay: 2000,
    }),
  ]);

  const scrollPrev = useCallback(() => {
    if (embla) embla.scrollPrev();
  }, [embla]);

  const scrollNext = useCallback(() => {
    if (embla) embla.scrollNext();
  }, [embla]);

  useEffect(() => {
    if (!embla) return;

    const onSelect = () => {
      setCanScrollPrev(embla.canScrollPrev());
      setCanScrollNext(embla.canScrollNext());
    };

    embla.on("select", onSelect);
    onSelect(); // Initial check

    return () => {
      embla.off("select", onSelect);
    };
  }, [embla]);

  const arrowClass =
    "text-white rounded-full p-2 w-[35px] h-[35px] central absolute top-1/2 ";

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {data?.map(({ _id, name, images, description }: any) => (
            <div className={styles.embla__slide} key={_id}>
              <div className="relative">
                <Image
                  className={styles.embla__slide__img}
                  src={images[1].url}
                  alt={name}
                  sizes="400vw"
                  width={250}
                  height={150}
                />
                <Image
                  src={images[0].url}
                  alt={name}
                  width={50}
                  height={30}
                  className="absolute bottom-2 left-2 max-w-[80px] md:max-w-[110px]"
                />
                {/* <Image
                  className={styles.embla__slide__img}
                  src={images[0].image}
                  alt={images[0].name}
                  sizes="400vw"
                />
                <Image
                  src={logo}
                  alt={id}
                  className="absolute bottom-2 left-2 max-w-[80px] md:max-w-[110px]"
                /> */}
              </div>
              <GalleryModal
                images={images?.slice(1)}
                logo={images[0]?.url}
                description={description}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between absolute w-full left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 mx-auto mt-5 ">
        {canScrollPrev && (
          <FaArrowLeft
            onClick={scrollPrev}
            className={arrowClass + " left-[10px]"}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
          />
        )}
        {canScrollNext && (
          <FaArrowRight
            onClick={scrollNext}
            className={arrowClass + " right-[10px]"}
            style={{ background: "rgba(0, 0, 0, 0.7)" }}
          />
        )}
      </div>
    </div>
  );
};

export default ActivityCarousel;

// "use client";

// import useEmblaCarousel from "embla-carousel-react";
// import Autoplay from "embla-carousel-autoplay";
// import styles from "./Carousel.module.css";
// import Image from "next/image";

// import { CarouselData } from "./data";
// import { Button } from "@/components/ui/button";
// import { FaArrowLeft, FaArrowRight, FaChevronRight } from "react-icons/fa";
// import { useCallback } from "react";
// import GalleryModal from "../../_components/gallery-modal";

// const ActivityCarousel = () => {
//   const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
//     Autoplay({
//       stopOnInteraction: false,
//       stopOnMouseEnter: true,
//       delay: 2000,
//     }),
//   ]);

//   const scrollPrev = useCallback(() => {
//     if (embla) embla.scrollPrev();
//   }, [embla]);

//   const scrollNext = useCallback(() => {
//     if (embla) embla.scrollNext();
//   }, [embla]);

//   const arrowClass =
//     "text-white rounded-full p-2 cursor-pointer w-[35px] h-[35px] central ";

//   return (
//     <div className={styles.embla}>
//       <div className={styles.embla__viewport} ref={emblaRef}>
//         <div className={styles.embla__container}>
//           {CarouselData.map(({ id, images, logo }) => (
//             <div className={styles.embla__slide} key={id}>
//               <div className="relative">
//                 <Image
//                   className={styles.embla__slide__img}
//                   src={images[0].image}
//                   alt={images[0].name}
//                   sizes="400vw"
//                 />
//                 <Image
//                   src={logo}
//                   alt={id}
//                   className="absolute bottom-2 left-2 max-w-[80px] md:max-w-[110px]"
//                 />
//               </div>
//               <GalleryModal images={images} logo={logo} />
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-between absolute w-full left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 mx-auto mt-5 ">
//         <FaArrowLeft
//           onClick={scrollPrev}
//           className={arrowClass + " left-[10px]"}
//           style={{ background: "rgba(0, 0, 0, 0.7)" }}
//         />
//         <FaArrowRight
//           onClick={scrollNext}
//           className={arrowClass + " right-[10px]"}
//           style={{ background: "rgba(0, 0, 0, 0.7)" }}
//         />
//       </div>
//     </div>
//   );
// };

// export default ActivityCarousel;
