"use client";
import React from "react";
import Button from "./Button";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";

const Hero = () => {
  return (
    <section className="mx-auto flex flex-col items-center">
      <div className="flex min-h-screen-minus-nav max-w-[1920px] flex-col items-center justify-center gap-8 overflow-hidden p-4 sm:flex-row sm:justify-between sm:p-10">
        <div className="flex flex-col gap-8 sm:w-1/2">
          <h1 className="title mr-auto text-3xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-7xl">
            Redefine Your Home’s Potential with Kitts Remodeling
          </h1>
          <p className="sm:my-6">
            With over 25 years of experience, we deliver expert craftsmanship
            with an honest work ethic. From kitchen makeovers and bathroom
            renovations to complete home additions, our family-owned business
            brings your vision to life.
          </p>
          <div className="flex items-center gap-4 md:gap-8">
            <Button type="button" title="Request a Free Consultation" />
            <Link
              className="text-sm font-bold text-brand-primary underline underline-offset-4 md:text-base"
              href="/"
              key="projects"
            >
              View Our Work
            </Link>
          </div>
        </div>
        <div className="flex h-full items-center sm:w-1/3">
          <ProjectCarousel />
        </div>
      </div>
    </section>
  );
};

export default Hero;
