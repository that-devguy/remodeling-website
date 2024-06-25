import React from "react";
import Image from "next/image";
import Link from "next/link";
import services from "../public/data/services.json";

const ServicesPreview = () => {
  const featuredServices = services.filter((service) => service.isFavorite);

  return (
    <section className="flex flex-col items-center bg-slate-50">
      <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24">
        <div className="flex w-full flex-col gap-4 md:gap-2 xl:gap-8">
          <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
            Our Most Popular Services
          </h2>
          <div className="mb-6 sm:my-6">
            <ul className="grid grid-cols-2 justify-between gap-4 sm:gap-8 md:grid-cols-4 xl:gap-12">
              {featuredServices.map((service) => (
                <li key={service.id}>
                  <Image
                    src={service.coverPhoto}
                    alt="kitchen-2"
                    width="350"
                    height="350"
                    className="aspect-[3/5] max-h-[191px] rounded-lg object-cover md:max-h-[330px]"
                  />
                  <div className="pt-4">
                    <h5 className="font-medium sm:text-lg">{service.name}</h5>
                    <p className="text-sm text-black/50">
                      {service.description}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <Link
            className="ml-auto text-sm font-bold text-brand-primary underline underline-offset-4 md:text-base"
            href="/"
            key="projects"
          >
            Browse All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
