import React from "react";
import Button from "./Button";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";

const Hero = () => {
  return (
    <section className="sm:min-h-screen-minus-nav mt-4 flex flex-col items-center gap-8 p-4 sm:flex-row sm:p-10 md:mt-0">
      <div className="flex flex-col gap-8 sm:w-1/2">
        <h1 className="title mr-auto text-4xl sm:text-5xl font-bold uppercase italic text-[#116ed1] lg:text-6xl 2xl:text-7xl">
          Redefine Your Home’s Potential with Kitts Remodeling
        </h1>
        <p className="sm:my-6">
          With over 25 years of experience, we deliver expert craftsmanship with
          an honest work ethic. From kitchen makeovers and bathroom renovations
          to complete home additions, our family-owned business brings your
          vision to life.
        </p>
        <div className="flex items-center gap-4 md:gap-8">
          <Button type="button" title="Get a Quote" />
          <Link
            className="text-sm font-bold text-[#116ed1] underline underline-offset-4 md:text-base"
            href="/"
            key="projects"
          >
            View Our Work
          </Link>
        </div>
      </div>
      <div className="flex h-full items-center sm:w-1/2">
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default Hero;
