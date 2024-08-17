"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Carousel.module.css";
import Image, { StaticImageData } from "next/image";

import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useCallback } from "react";

const GalleryCarousel = ({
  images,
}: {
  images: { name: string; image: StaticImageData }[];
}) => {
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

  const arrowClass =
    "text-white rounded-full p-2 cursor-pointer w-[35px] h-[35px] central ";

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map(({ image, name }) => (
            <div className={styles.embla__slide} key={name}>
              <Image
                className={styles.embla__slide__img}
                src={image}
                alt={name}
                sizes="400vw"
              />
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between absolute w-full left-1/2 -translate-y-1/2 -translate-x-1/2 top-1/2 mx-auto mt-5 ">
        <FaArrowLeft
          onClick={scrollPrev}
          className={arrowClass + " left-[10px]"}
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
        />
        <FaArrowRight
          onClick={scrollNext}
          className={arrowClass + " right-[10px]"}
          style={{ background: "rgba(0, 0, 0, 0.7)" }}
        />
      </div>
    </div>
  );
};

export default GalleryCarousel;
