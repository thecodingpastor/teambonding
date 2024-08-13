"use client";

import React, { useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Carousel.module.css";
import { CarouselData } from "./CarouselData";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const TestimonialsCarousel: React.FC = () => {
  const [emblaRef, embla] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      delay: 7000,
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
          {CarouselData.map(({ author, testimony, id, image }) => (
            <div className={styles.embla__slide} key={id}>
              <Image
                className={styles.embla__slide__img}
                src={image}
                alt={author}
                sizes="400vw"
              />
              <p>{testimony}</p>
              <p className="font-black font-aleo mt-3">{author}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between max-w-[400px] mx-auto mt-5">
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

export default TestimonialsCarousel;
