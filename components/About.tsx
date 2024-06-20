import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col items-center bg-slate-50">
      <div className="flex max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-24 sm:flex-row sm:px-10">
        <div className="flex h-full items-center sm:w-1/2">
          <Image
            src="/kitchen-1.jpeg"
            alt="kitchen-1"
            width={650}
            height={400}
            className="rounded-lg object-cover md:m-auto"
          />
        </div>
        <div className="flex flex-col gap-4 md:gap-2 xl:gap-8 sm:w-1/2">
          <h1 className="title mr-auto text-2xl font-bold uppercase italic text-[#116ed1] sm:text-2xl lg:text-4xl 2xl:text-5xl">
            About Kitts Remodeling
          </h1>
          <p className="sm:my-6">
            Founded in 2001, Kitts Remodeling has been dedicated to providing
            top-notch remodeling services with a personal touch. Our founder,
            with over two decades of industry experience, ensures every project
            meets our high standards of quality and integrity. We take pride in
            our reputation for delivering outstanding results and exceptional
            customer service.
          </p>
          <Link
            className="text-sm font-bold text-[#116ed1] underline underline-offset-4 md:text-base"
            href="/"
            key="projects"
          >
            More About Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
