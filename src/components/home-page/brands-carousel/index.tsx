"use client";

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Carousel.module.css";
import { CarouselData } from "./CarouselData";
import Image from "next/image";
import { Link } from "@/components/layout/Link";

const BrandsCarousel: React.FC = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({
      stopOnInteraction: false,
      stopOnMouseEnter: true,
      delay: 2000,
    }),
  ]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {CarouselData.map(({ ctaLink, id, image, label }) => (
            <div className={styles.embla__slide} key={id}>
              {/* <Link href={ctaLink} className={styles.embla__slide} key={id}> */}
              <Image
                className={styles.embla__slide__img}
                src={image}
                alt={label}
                sizes="400vw"
              />
            </div>
          ))}
        </div>
      </div>

      {/* <div className={styles.embla__dots}>
        {scrollSnaps.map((_, index) => (
          <button
            key={index}
            className={`${styles.embla__dot} ${
              index === selectedIndex ? styles.embla__dot__active : ""
            }`}
            onClick={() => embla && embla.scrollTo(index)}
          />
        ))}
      </div> */}
    </div>
  );
};

export default BrandsCarousel;
