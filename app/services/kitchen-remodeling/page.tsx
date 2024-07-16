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

const favoriteFilter = (project) => project.isFavorite;

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
      <section className="flex flex-col items-center bg-white">
        <div className="flex max-w-[1920px] flex-col items-center justify-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:justify-between sm:px-10 lg:pt-24">
          <div className="flex flex-col gap-8 sm:w-1/2">
            <h1 className="title mr-auto text-4xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
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
          <div className="flex h-full select-none items-center sm:w-1/3">
            <ProjectCarousel filterFunction={favoriteFilter} />
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
};

export default Services;
