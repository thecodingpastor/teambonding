"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Carousel.module.css";
import { CarouselData } from "./CarouselData";
import Image from "next/image";

const BrandsCarousel = ({
  carouselData,
}: {
  carouselData: { id: string; name: string; image: string }[];
}) => {
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
          {carouselData.map(({ id, image, name }) => (
            <div className={styles.embla__slide} key={id}>
              <Image
                className={styles.embla__slide__img}
                src={image}
                alt={name}
                sizes="400vw"
                width={250}
                height={200} // fill
                // className="250px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandsCarousel;
