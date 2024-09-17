"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import LightGallery from "lightgallery/react";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Portfolio = () => {
  const onInit = () => {
    console.log("lightGallery has been initialized");
  };

  return (
    <>
      <div>
        <Breadcrumb className="mr-auto max-w-[1920px] flex-col items-center overflow-hidden p-4 pt-5 sm:px-11">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/portfolio">Portfolio</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="flex flex-col items-center bg-white">
        <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:px-10 lg:pt-24">
          <h2 className="title mr-auto text-4xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
            Our Portfolio
          </h2>
          <p className="mr-auto w-full lg:w-3/4">
            Discover the transformative power of quality craftsmanship with
            Kitts Remodeling. Explore our extensive gallery showcasing a wide
            range of completed projects, from stunning kitchen remodels and
            luxurious bathroom renovations to elegant custom carpentry. See
            firsthand how we bring our clients' visions to life with meticulous
            attention to detail and a commitment to excellence.
          </p>
          <div className="mr-auto flex flex-col pt-10 lg:pt-24">
            <h3 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-3xl 2xl:text-3xl">
              Kitchen Remodels
            </h3>
            <div>
              <LightGallery
                onInit={onInit}
                speed={500}
                plugins={[lgThumbnail]}
                elementClassNames="gallery-grid"
              >
                {[
                  { src: "/kitchens/image1.jpg", alt: "AFTER" },
                  {
                    src: "/kitchens/image2.jpg",
                    alt: "AFTER",
                  },
                  {
                    src: "/kitchens/image3.jpg",
                    alt: "AFTER",
                  },
                  {
                    src: "/kitchens/image1-during.jpg",
                    alt: "DURING",
                  },
                  {
                    src: "/kitchens/image4.jpg",
                    alt: "AFTER",
                  },
                  {
                    src: "/kitchens/image5.jpg",
                    alt: "AFTER",
                  },
                  {
                    src: "/kitchens/image6.jpg",
                    alt: "AFTER",
                  },
                  {
                    src: "/kitchens/image7.jpg",
                    alt: "AFTER",
                  },
                  {
                    src: "/kitchens/image8.jpg",
                    alt: "AFTER",
                  },
                  {
                    src: "/kitchens/image9.jpg",
                    alt: "AFTER",
                  },
                ].map(({ src, alt }, index) => (
                  <div key={index} className="relative" data-src={src}>
                    <img
                      alt={alt}
                      src={src}
                      className="h-[250px] w-[320px] rounded-md object-cover"
                    />
                    {/* Conditional badge for 'before' and 'during' photos */}
                    {src.includes("before") && (
                      <div className="absolute left-2 top-2 rounded-md bg-brand-secondary px-2 py-1 text-xs font-semibold text-white">
                        BEFORE
                      </div>
                    )}
                    {src.includes("during") && (
                      <div className="absolute left-2 top-2 rounded-md bg-brand-primary px-2 py-1 text-xs font-semibold text-white">
                        DURING
                      </div>
                    )}
                  </div>
                ))}
              </LightGallery>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-slate-100">
        <div className="flex w-full max-w-[1920px] flex-col items-center overflow-hidden p-4 py-10 sm:px-10 lg:pt-12">
          <h3 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-3xl 2xl:text-3xl">
            Bathroom Remodels
          </h3>
          <div className="mr-auto">
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail]}
              elementClassNames="gallery-grid"
            >
              {[
                {
                  src: "/bathrooms/image1.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image1-before.jpg",
                  alt: "BEFORE",
                },
                {
                  src: "/bathrooms/image2.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image2-before.jpg",
                  alt: "BEFORE",
                },
                {
                  src: "/bathrooms/image3.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image4.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image5.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image6.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image5-before.jpg",
                  alt: "BEFORE",
                },
                {
                  src: "/bathrooms/image7.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image8.jpg",
                  alt: "AFTER",
                },
              ].map(({ src, alt }, index) => (
                <div key={index} className="relative" data-src={src}>
                  <img
                    alt={alt}
                    src={src}
                    className="h-[250px] w-[320px] rounded-md object-cover"
                  />
                  {/* Conditional badge for 'before' and 'during' photos */}
                  {src.includes("before") && (
                    <div className="absolute left-2 top-2 rounded-md bg-brand-secondary px-2 py-1 text-xs font-semibold text-white">
                      BEFORE
                    </div>
                  )}
                  {src.includes("during") && (
                    <div className="absolute left-2 top-2 rounded-md bg-brand-primary px-2 py-1 text-xs font-semibold text-white">
                      DURING
                    </div>
                  )}
                </div>
              ))}
            </LightGallery>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-white">
        <div className="flex w-full max-w-[1920px] flex-col items-center overflow-hidden p-4 py-10 sm:px-10 lg:pt-12">
          <h3 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-3xl 2xl:text-3xl">
            Home Renovations
          </h3>
          <div className="mr-auto">
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail]}
              elementClassNames="gallery-grid"
            >
              {[
                {
                  src: "/home-renovations/image1-before.jpg",
                  alt: "BEFORE",
                },
                {
                  src: "/home-renovations/image1-during.jpg",
                  alt: "DURING",
                },
                {
                  src: "/home-renovations/image1-interior.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/home-renovations/image2.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/home-renovations/image3.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/home-renovations/image4.jpg",
                  alt: "AFTER",
                },
              ].map(({ src, alt }, index) => (
                <div key={index} className="relative" data-src={src}>
                  <img
                    alt={alt}
                    src={src}
                    className="h-[250px] w-[320px] rounded-md object-cover"
                  />
                  {/* Conditional badge for 'before' and 'during' photos */}
                  {src.includes("before") && (
                    <div className="absolute left-2 top-2 rounded-md bg-brand-secondary px-2 py-1 text-xs font-semibold text-white">
                      BEFORE
                    </div>
                  )}
                  {src.includes("during") && (
                    <div className="absolute left-2 top-2 rounded-md bg-brand-primary px-2 py-1 text-xs font-semibold text-white">
                      DURING
                    </div>
                  )}
                </div>
              ))}
            </LightGallery>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-slate-100">
        <div className="flex w-full max-w-[1920px] flex-col items-center overflow-hidden p-4 py-10 sm:px-10 lg:pt-12">
          <h3 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-3xl 2xl:text-3xl">
            Interior Painting
          </h3>
          <div className="mr-auto">
            <LightGallery
              onInit={onInit}
              speed={500}
              plugins={[lgThumbnail]}
              elementClassNames="gallery-grid"
            >
              {[
                {
                  src: "/bathrooms/image4.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image5.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/bathrooms/image6.jpg",
                  alt: "AFTER",
                },
                {
                  src: "/painting/image1.jpg",
                  alt: "AFTER",
                },
              ].map(({ src, alt }, index) => (
                <div key={index} className="relative" data-src={src}>
                  <img
                    alt={alt}
                    src={src}
                    className="h-[250px] w-[320px] rounded-md object-cover"
                  />
                  {/* Conditional badge for 'before' and 'during' photos */}
                  {src.includes("before") && (
                    <div className="absolute left-2 top-2 rounded-md bg-brand-secondary px-2 py-1 text-xs font-semibold text-white">
                      BEFORE
                    </div>
                  )}
                  {src.includes("during") && (
                    <div className="absolute left-2 top-2 rounded-md bg-brand-primary px-2 py-1 text-xs font-semibold text-white">
                      DURING
                    </div>
                  )}
                </div>
              ))}
            </LightGallery>
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
};

export default Portfolio;
