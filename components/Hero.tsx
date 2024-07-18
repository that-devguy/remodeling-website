"use client";
import React from "react";
import ConsultationButton from "./ConsultationButton";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";

const favoriteFilter = (project) => project.isFavorite;

const Hero = () => {
  return (
    <section className="mx-auto flex flex-col items-center">
      <div className="flex min-h-screen-minus-nav max-w-[1920px] flex-col items-center justify-center gap-8 overflow-hidden p-4 md:flex-row sm:justify-between sm:p-10">
        <div className="flex flex-col gap-8 md:w-1/2">
          <h1 className="title mr-auto text-3xl font-bold uppercase italic text-brand-primary sm:text-5xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
            Redefine<br></br>Your Home’s <br></br>Potential with <br></br>Kitts
            Remodeling
          </h1>
          <p className="sm:my-6">
            With over 25 years of experience, we deliver expert craftsmanship
            with an honest work ethic. From kitchen makeovers and bathroom
            renovations to complete home additions, our family-owned business
            brings your vision to life.
          </p>
          <div className="flex w-fit flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
            <ConsultationButton title="Request a Free Consultation" />
            <Link
              className="rounded-sm px-1 text-sm font-medium text-brand-primary underline underline-offset-4 focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 md:text-base"
              href="/portfolio"
              key="portfolio"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div className="flex h-full select-none items-center md:w-1/3">
          <ProjectCarousel filterFunction={favoriteFilter} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
