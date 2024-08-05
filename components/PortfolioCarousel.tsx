import React, { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  DotButton,
  useDotButton,
} from "@/components/ui/emblaCarouselDotButton";

import projects from "../public/data/projects.json";

type Project = {
  id: number;
  name: string;
  description: string;
  isFavorite: boolean;
  useTestimonial: boolean;
  coverPhoto: string;
  type: string;
  testimonial?: string;
};

const PortfolioCarousel = ({
  filterFunction,
}: {
  filterFunction: (project: Project) => boolean;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const featuredProjects = projects.filter(filterFunction);

  return (
    <div className="embla relative mt-4">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container hidden pl-2 sm:my-6 sm:flex">
          {featuredProjects.map((project, index) => (
            <div className="embla__slide !mr-6 max-w-[400px]" key={project.id}>
              <div className="relative">
                <Image
                  src={project.coverPhoto}
                  alt={project.name}
                  height={430}
                  width={500}
                  className="h-[215px] rounded-md object-cover sm:h-[250px]"
                />
              </div>

              <div className="py-4 sm:p-4">
                <h5 className="font-medium sm:text-base">{project.type}</h5>
                <p className="text-sm text-black/50">
                  {project.name}'s {project.description}.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-2 mt-6 flex items-center justify-between">
        <div className="embla__dots flex items-center sm:px-4">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""} rounded-md focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PortfolioCarousel;
