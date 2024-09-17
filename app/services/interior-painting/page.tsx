"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultationButton from "@/components/ConsultationButton";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import ProjectCarousel from "@/components/ProjectCarousel";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";

const homeRenoFilter = (project: { type: string | string[] }) =>
  project.type.includes("Paint");

const Services = () => {
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
              <BreadcrumbLink href="/#services">Services</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator></BreadcrumbSeparator>
            <BreadcrumbItem>
              <BreadcrumbLink href="/services/interior-painting">
                Interior Painting
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="mx-auto flex flex-col items-center bg-white">
        <div className="flex max-w-[1920px] flex-col items-center justify-center gap-8 overflow-hidden p-4 py-10 md:flex-row sm:justify-between sm:px-10 lg:pt-24">
          <div className="flex flex-col gap-8 md:w-1/2">
            <h1 className="title mr-auto text-4xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
              Interior Painting
            </h1>
            <p className="mr-auto flex">
              Whether you own an older home or a newer home, maintaining its
              charm and vitality is crucial. Over time, vibrant colors can fade,
              leaving your space looking tired. At Kitts Remodeling, we
              specialize in revitalizing interiors to enhance comfort and style
              for your family.
            </p>
            <p>
              Transform your living spaces with our expert interior painting
              services. Whether refreshing existing colors or exploring new
              palettes, we tailor our approach to suit your vision.
            </p>
            <div className="flex w-fit flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
              <ConsultationButton title="Request a Free Consultation" />
            </div>
          </div>
          <div className="flex h-full select-none items-center md:w-1/3">
            <ProjectCarousel filterFunction={homeRenoFilter} />
          </div>
        </div>
      </section>
      <section
        className="flex flex-col items-center bg-brand-primary"
        id="services"
      >
        <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24">
          <div className="flex w-full flex-col gap-4 md:gap-2 xl:gap-8">
            <h2 className="title mr-auto text-2xl font-bold uppercase italic text-white sm:text-2xl lg:text-4xl 2xl:text-5xl">
              Your Dream Home In 3 Easy Steps
            </h2>
            <div className="mb-6">
              <p className="mr-auto flex text-white">
                At Kitts Remodeling, we treat every customer with the utmost
                dedication and care, no matter the size of the renovation
                project. We leverage our exceptional skills and expertise to
                deliver your dream home, often faster than you might expect.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:gap-8">
              <div className="flex flex-col rounded-md bg-white p-6 sm:w-1/3">
                <h3 className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                  01
                </h3>
                <p className="font-medium sm:text-base">Get In Touch With Us</p>
                <p className="text-sm text-black/50 lg:text-base">
                  Fill out our form or give us a call. During our phone
                  consultation, we will gather all the details to understand
                  your vision for your project.
                </p>
              </div>
              <div className="flex flex-col rounded-md bg-white p-6 sm:w-1/3">
                <h3 className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                  02
                </h3>
                <p className="font-medium sm:text-base">Time For Work</p>
                <p className="text-sm text-black/50 lg:text-base">
                  Once we have all the details, we’ll provide you with a price
                  estimate and a clear timeline. Then, our expert team will get
                  to work on transforming your home into the perfect space
                  you’ve envisioned.
                </p>
              </div>
              <div className="flex flex-col rounded-md bg-white p-6 sm:w-1/3">
                <h3 className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                  03
                </h3>
                <p className="font-medium sm:text-base">
                  Enjoy Your Dream Home
                </p>
                <p className="text-sm text-black/50 lg:text-base">
                  Once we’re out the door, get ready to enjoy a home that looks
                  exactly how you’ve always envisioned. Gather your loved ones
                  and start creating new memories in a space that’s completely
                  yours.
                </p>
              </div>
            </div>
            <Link
              className="mr-auto flex rounded-sm px-1 text-sm font-medium text-white underline underline-offset-4 focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 md:text-base"
              href="/"
              key="projects"
            >
              View Our Complete Process
            </Link>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-slate-200">
        <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24">
          <div className="flex w-full flex-col gap-4 md:gap-2 xl:gap-8">
            <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
              Interior Painting Prices
            </h2>
            <div className="mb-6">
              <p className="w-full xl:w-1/2">
                The skill, talent, and attention to detail we provide are
                unmatched. At Kitts Remodeling, we aim to help you maximize your
                home's potential and achieve the look you desire, all at a price
                that fits your budget.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:gap-8">
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                {/* <Image
                  src="/interior-painting-2.jpg"
                  alt="Small Paint"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                /> */}
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">Small Home*</h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $8k
                  </p>
                  <p className="text-sm text-black/50 lg:text-base">
                    Approximately 1,200 to 1,800 square feet. Includes interior
                    walls, ceilings, and trim. Basic preparation, two coats of
                    paint, and minor repairs included.
                  </p>
                </div>
              </div>
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                {/* <Image
                  src="/interior-painting-1.jpg"
                  alt="Medium Paint"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                /> */}
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">Medium Home*</h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $15k
                  </p>
                  <p className="text-sm text-black/50 lg:text-base">
                    Approximately 1,800 to 3,000 square feet. Includes interior
                    walls, ceilings, and trim. Thorough preparation, two coats
                    of premium paint, minor drywall repairs, and trim painting.
                  </p>
                </div>
              </div>
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                {/* <Image
                  src="/interior-painting-4.png"
                  alt="Large Paint"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                /> */}
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">Large Home*</h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $30k+
                  </p>
                  <p className="text-sm text-black/50 lg:text-base">
                    Large home with over 3,000 square feet. Includes extensive
                    preparation, two coats of high-quality paint, repairs to
                    walls and trim, and attention to architectural details.
                    Custom color consultations and additional finishes
                    available.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-black/50">
              *Prices are averages and may vary based on the size of your home
              and choice of paint. You will receive a precise quote for your
              specific home renovation project following the in-house
              consultation.
            </p>
            <Link
              className="mr-auto flex rounded-sm px-1 text-sm font-medium text-brand-primary underline underline-offset-4 focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 md:text-base"
              href="/"
              key="projects"
            >
              Learn More About Interior Painting Costs
            </Link>
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
};

export default Services;
