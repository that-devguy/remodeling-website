"use client";
import React, { useState } from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import {
  DotButton,
  useDotButton,
} from "@/components/ui/emblaCarouselDotButton";
import projects from "../public/data/projects.json";

import TestimonialCard from "@/components/TestimonialCard";

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const featuredTestimonial = projects.filter(
    (project) => project.useTestimonial,
  );

  return (
    <section className="flex flex-col items-center bg-white">
      <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24">
        <div className="flex w-full flex-col gap-4 md:gap-2 xl:gap-8">
          <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
            What Our Happy Customers Say About Us
          </h2>
          <p className="w-full xl:w-1/2">
            Read what our satisfied clients had to say about us and get an
            insight into how we do our work and what you can expect when
            choosing us as your home remodeling company.
          </p>
          <div className="embla relative mt-4">
            <div className="embla__viewport" ref={emblaRef}>
              <div className="embla__container mb-6 hidden pl-2 sm:my-6 sm:flex">
                {featuredTestimonial.map((project) => (
                  <TestimonialCard
                    key={project.id}
                    coverPhoto={project.coverPhoto}
                    name={project.name}
                    type={project.type}
                    description={project.description}
                    testimonial={project.testimonial}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between pl-2">
            <div className="embla__dots flex items-center">
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
      </div>
    </section>
  );
};

export default Testimonials;
