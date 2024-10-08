"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import services from "../public/data/services.json";

import ServicesPreviewCarousel from "@/components/ServicesPreviewCarousel";

const ServicesPreview = () => {
  return (
    <section className="flex flex-col items-center bg-white" id="services">
      <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24">
        <div className="flex w-full flex-col gap-4 md:gap-2 xl:gap-8">
          <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
            Our Services
          </h2>

          <ServicesPreviewCarousel />

          <div className="mb-6 hidden sm:my-6 sm:flex">
            <ul className="grid grid-cols-2 justify-between gap-4 sm:gap-8 md:grid-cols-3 xl:gap-12">
              {services.map((service) => (
                <li key={service.id}>
                  <Image
                    src={service.coverPhoto}
                    alt={service.name}
                    width="350"
                    height="350"
                    className="aspect-[3/5] max-h-[191px] rounded-md object-cover md:max-h-[330px]"
                  />
                  <div className="flex flex-col gap-2 pt-4">
                    <h5 className="font-medium sm:text-base">{service.name}</h5>
                    <p className="text-sm text-black/50 lg:text-base">
                      {service.description}
                    </p>
                    {service.url && (
                      <Link
                        className="hidden rounded-sm text-sm font-medium text-brand-primary underline underline-offset-4 focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 sm:flex md:text-base"
                        href={service.url}
                      >
                        Read More
                      </Link>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
