"use client";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import styles from "./Carousel.module.css";
import Image, { StaticImageData } from "next/image";

import { Button } from "@/components/ui/button";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";

const GalleryCarousel = ({ images }: { images: any[] }) => {
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
          {images.map((item) => (
            <div className={styles.embla__slide} key={item?._id}>
              <Image
                className={styles.embla__slide__img}
                src={item?.url}
                alt="Category Image"
                sizes="400vw"
                width={250}
                height={150}
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

export default GalleryCarousel;
