import React from "react";
import Link from "next/link";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import {
  DotButton,
  useDotButton,
} from "@/components/ui/emblaCarouselDotButton";
import services from "../public/data/services.json";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const featuredServices = services.filter((service) => service.isFavorite);

  return (
    <div className="embla mt-4 sm:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {featuredServices.map((service, index) => (
            <div className="embla__slide" key={service.id}>
              <Image
                src={service.coverPhoto}
                alt={service.name}
                width="350"
                height="350"
                className="mr-2 aspect-[3/5] max-h-[191px] w-full rounded-lg object-cover md:max-h-[330px]"
              />
              <div className="pt-4">
                <h5 className="font-medium sm:text-lg">{service.name}</h5>
                <p className="text-sm text-black/50">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-2 mt-6 flex items-center justify-between">
        <div className="embla__dots flex items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""} rounded-md focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2`}
            />
          ))}
        </div>
        <Link
          className="rounded-sm px-1 text-sm font-bold text-brand-primary underline underline-offset-4 focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 md:text-base"
          href="/"
        >
          Browse All Services
        </Link>
      </div>
    </div>
  );
}
