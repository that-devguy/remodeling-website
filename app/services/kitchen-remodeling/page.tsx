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

const kitchenFilter = (project: { type: string | string[] }) =>
  project.type.includes("Kitchen");

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
              <BreadcrumbLink href="/services/kitchen-remodeling">
                Kitchen Remodeling
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="mx-auto flex flex-col items-center bg-white">
        <div className="flex max-w-[1920px] flex-col items-center justify-center gap-8 overflow-hidden p-4 py-10 sm:justify-between sm:px-10 md:flex-row lg:pt-24">
          <div className="flex flex-col gap-8 md:w-1/2">
            <h1 className="title mr-auto text-3xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
              Kitchen Remodeling
            </h1>
            <p className="mr-auto flex">
              If your kitchen feels outdated or lacks excitement, it's time to
              show it some love and give it the remodeling upgrade it deserves.
              Say goodbye to old cabinets, countertops, and cramped spaces, and
              imagine an open-concept kitchen.
            </p>
            <p>
              Make your kitchen the heart of your home for family gatherings,
              creating a relaxed and sociable atmosphere. At Kitts Remodeling,
              we're here to transform your '80s or '90s kitchen into a brighter,
              welcoming space where you can enjoy your time and create new
              memories.
            </p>
            <div className="flex w-fit flex-col gap-4 lg:flex-row lg:items-center lg:gap-8">
              <ConsultationButton title="Request a Free Consultation" />
            </div>
          </div>
          <div className="flex h-full select-none items-center md:w-1/3">
            <ProjectCarousel filterFunction={kitchenFilter} />
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
              Your Dream Kitchen In 3 Easy Steps
            </h2>
            <div className="mb-6">
              <p className="mr-auto flex text-white">
                At Kitts Remodeling, we ensure you're always in the loop with
                every change we make to your kitchen. We provide expert advice
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
                  your vision for your kitchen space.
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
                  to work on transforming your kitchen into the perfect space
                  you’ve envisioned.
                </p>
              </div>
              <div className="flex flex-col rounded-md bg-white p-6 sm:w-1/3">
                <h3 className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                  03
                </h3>
                <p className="font-medium sm:text-base">
                  Enjoy Your Dream Kitchen
                </p>
                <p className="text-sm text-black/50 lg:text-base">
                  Experience the joy of your new, open kitchen with ample
                  storage, stylish finishes, and a warm, inviting atmosphere.
                  Invite your family and friends over to celebrate and create
                  wonderful new memories together.
                </p>
              </div>
            </div>
            {/* <Link
              className="mr-auto flex rounded-sm px-1 text-sm font-medium text-white underline underline-offset-4 focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 md:text-base"
              href="/"
              key="projects"
            >
              View Our Complete Process
            </Link> */}
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-slate-200">
        <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24">
          <div className="flex w-full flex-col gap-4 md:gap-2 xl:gap-8">
            <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
              Kitchen Remodeling Prices
            </h2>
            <div className="mb-6">
              <p className="w-full xl:w-1/2">
                Our work is unmatched in quality and efficiency. We understand
                the importance of a functional kitchen, so we strive to complete
                your project promptly, ensuring you can enjoy your upgraded
                space as soon as possible.
              </p>
            </div>
            <div className="flex flex-col gap-4 sm:flex-row md:gap-8">
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                {/* <Image
                  src="/kitchen-3.jpg"
                  alt="Basic Kitchen"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                /> */}
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">
                      Basic Kitchen Remodel*
                    </h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $45k
                  </p>
                  <p className="text-sm text-black/50 lg:text-base">
                    Reface or refinish existing cabinets, install new beautiful
                    stone countertops, lighting, plumbing fixtures, and a new
                    tile backsplash.
                  </p>
                </div>
              </div>
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                {/* <Image
                  src="/kitchen-1.jpeg"
                  alt="Average Kitchen"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                /> */}
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">
                      Average Kitchen Remodel*
                    </h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $85k
                  </p>
                  <p className="text-sm text-black/50 lg:text-base">
                    Install semi-custom cabinets, get an updated lighting
                    configuration, new appliances, new countertops, and a new
                    tile backsplash.
                  </p>
                </div>
              </div>
              <div className="flex select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg sm:w-1/3">
                {/* <Image
                  src="/kitchen-2.jpeg"
                  alt="High-End Kitchen"
                  height="500"
                  width="600"
                  className="sm:h[225px] h-[215px] rounded-t-md object-cover"
                /> */}
                <div className="flex flex-col gap-4 p-6">
                  <div className="flex items-center justify-between">
                    <h5 className="font-medium sm:text-base">
                      High-End Kitchen Remodel*
                    </h5>
                  </div>
                  <p className="title text-2xl font-bold text-black/50 lg:text-4xl 2xl:text-5xl">
                    $120k +
                  </p>
                  <p className="text-sm text-black/50 lg:text-base">
                    Completely reconfigure your kitchen layout with custom
                    cabinets, high-grade quartz countertops, premium tile
                    backsplash, and custom lighting configuration.
                  </p>
                </div>
              </div>
            </div>
            <p className="text-sm text-black/50">
              *Prices are approximate and may vary based on the size of your
              kitchen and your choice of upgrades and materials. An exact quote
              for your kitchen remodeling project will be provided after an
              in-house consultation.
            </p>
            {/* <Link
              className="mr-auto flex rounded-sm px-1 text-sm font-medium text-brand-primary underline underline-offset-4 focus:border-neutral-200 focus:ring-2 focus-visible:outline-none focus-visible:ring-offset-2 md:text-base"
              href="/"
              key="projects"
            >
              Learn More About Kitchen Remodeling Costs
            </Link> */}
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
};

export default Services;
