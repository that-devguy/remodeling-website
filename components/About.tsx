import React from "react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <section className="flex flex-col items-center bg-slate-50">
      <div className="flex max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24 xl:gap-12">
        <div className="relative h-full items-start sm:w-1/2 md:items-center">
          <div className="relative flex h-full">
            <Image
              src="/kitchen-1.jpeg"
              alt="kitchen-1"
              width="640"
              height="400"
              className="w-full rounded-lg object-cover sm:h-[330px] 2xl:h-[430px]"
            />
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:w-1/2 md:gap-2 xl:gap-8">
          <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
            About Kitts Remodeling
          </h2>
          <p className="sm:my-6">
            Founded in 2001, Kitts Remodeling has been dedicated to providing
            top-notch remodeling services with a personal touch. Our founder,
            with over two decades of industry experience, ensures every project
            meets our high standards of quality and integrity. We take pride in
            our reputation for delivering outstanding results and exceptional
            customer service.
          </p>
          <Link
            className="text-sm font-bold text-brand-primary underline underline-offset-4 md:text-base"
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
