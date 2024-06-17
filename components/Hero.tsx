import React from "react";
import Button from "./Button";
import Link from "next/link";
import ProjectCarousel from "./ProjectCarousel";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row hero items-center p-10 gap-8">
      <div className="flex w-1/2 flex-col gap-8">
        <h1 className="title text-7xl font-bold italic uppercase text-[#116ed1]">
          Redefine Your Home’s Potential with Kitts Remodeling
        </h1>
        <p className="my-6">
          With over 25 years of experience, we deliver expert craftsmanship with
          an honest work ethic. From kitchen makeovers and bathroom renovations
          to complete home additions, our family-owned business brings your
          vision to life.
        </p>
        <div className="flex items-center gap-8">
          <Button type="button" title="Get a Quote" />
          <Link
            className="text-[#116ed1] font-bold underline underline-offset-4"
            href="/"
            key="projects"
          >
            View Our Work
          </Link>
        </div>
      </div>
      <div className="flex w-1/2">
        <ProjectCarousel />
      </div>
    </section>
  );
};

export default Hero;
