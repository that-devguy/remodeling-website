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

const bathroomFilter = (project) => project.type.includes("Bathroom");

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
              <BreadcrumbLink href="/services/bathroom-remodeling">
                Bathroom Remodeling
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="mx-auto flex flex-col items-center bg-white">
        <div className="flex max-w-[1920px] flex-col items-center justify-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:justify-between sm:px-10 lg:pt-24">
          <div className="flex flex-col gap-8 sm:w-1/2">
            <h1 className="title mr-auto text-4xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
              Bathroom Remodeling
            </h1>
            <p className="mr-auto flex">
              Your bathroom is one of the most frequently used rooms in your
              home, so you and your family deserve a space that feels both
              comfortable and luxurious.
            </p>
            <p>
              Say goodbye to old, fading, and outdated vanities. Replace them
              with stunning new ones that reflect your personal taste.
              Reconfigure your lighting scheme to create a calming, soothing
              atmosphere, and give your tile a brand-new look to tie it all
              together.
            </p>
            <div className="flex w-fit flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
              <ConsultationButton title="Request a Free Consultation" />
            </div>
          </div>
          <div className="flex h-full select-none items-center sm:w-1/3">
            <ProjectCarousel filterFunction={bathroomFilter} />
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
              Your Dream Bathroom In 3 Easy Steps
            </h2>
            <div className="mb-6">
              <p className="mr-auto flex text-white">
                At Kitts Remodeling, we ensure you're always in the loop with
                every change we make to your bathroom. We provide expert advice
                on optimizing your space and suggest upgrades that best suit
                your needs.
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
                  your vision for your new bathroom.
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
                  to work on transforming your bathroom into the perfect space
                  you’ve envisioned.
                </p>
              </div>
              <div className="flex flex-col rounded-md bg-white p-6 sm:w-1/3">
                <h3 className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                  03
                </h3>
                <p className="font-medium sm:text-base">
                  Enjoy Your Dream Bathroom
                </p>
                <p className="text-sm text-black/50 lg:text-base">
                  Once your bathroom remodel is complete, all that's left for
                  you to do is enjoy it and make the most of your new upgrades.
                  Get ready to relax and unwind anytime you want, all within the
                  comfort of your own home.
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
              Bathroom Remodeling Prices
            </h2>
            <div className="mb-6">
              <p className="w-full xl:w-1/2">
                At Kitts Remodeling, we aim to deliver the top-quality
                craftsmanship you deserve. We work efficiently and methodically
                to bring your bathroom vision to life, keeping you informed
                every step of the way.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:gap-8">
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                <Image
                  src="/bathroom-1.jpeg"
                  alt="Basic Bathroom"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                />
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">
                      Basic Bathroom Remodel*
                    </h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $20k
                  </p>
                  <p className="mb-8 text-sm text-black/50 lg:text-base">
                    We offer a range of upgrades to transform your bathroom,
                    including a fresh paint job, new stock vanities, and updated
                    light fixtures. We can also replace or refinish your
                    bathtub, and install new fixtures, flooring, and wall tile
                    for a completely revitalized space.
                  </p>
                </div>
              </div>
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                <Image
                  src="/bathroom-3.jpg"
                  alt="Average Bathroom"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                />
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">
                      Average Bathroom Remodel*
                    </h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $55k
                  </p>
                  <p className="mb-8 text-sm text-black/50 lg:text-base">
                    Install a new vanity with premium hardware, re-tile your
                    shower, and add a semi-frameless glass enclosure. We also
                    offer services to remove popcorn ceilings, update your
                    flooring, apply a fresh coat of paint, install new lighting,
                    and upgrade your plumbing fixtures for a complete bathroom
                    transformation.
                  </p>
                </div>
              </div>
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                <Image
                  src="/bathroom-4.jpg"
                  alt="High-End Bathroom"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                />
                <div className="flex flex-col gap-4 p-4">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">
                      High-End Bathroom Remodel*
                    </h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $75k +
                  </p>
                  <p className="mb-8 text-sm text-black/50 lg:text-base">
                    Install a custom tile shower with a heavy, frameless glass
                    enclosure. You also have the option to choose a custom steam
                    or body-spray shower. Our services include reconfiguring
                    your lighting scheme with smart controls, as well as
                    offering premium vanity and tile selections for a luxurious
                    bathroom experience.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-black/50">
              *Prices are approximate and may vary based on the size of your
              bathroom and your choice of upgrades and materials. An exact quote
              for your bathroom remodeling project will be provided after an
              in-house consultation.
            </p>
            <Link
              className="mr-auto flex rounded-sm px-1 text-sm font-medium text-brand-primary underline underline-offset-4 focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 md:text-base"
              href="/"
              key="projects"
            >
              Learn More About Bathroom Remodeling Costs
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
