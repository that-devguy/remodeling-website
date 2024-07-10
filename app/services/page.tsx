import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultationButton from "@/components/ConsultationButton";
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

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
              <BreadcrumbLink href="/services">Services</BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <section className="flex flex-col items-center bg-white">
        <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:px-10 lg:py-24 xl:gap-12">
          <h1 className="title mr-auto text-4xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
            Our Comprehensive Remodeling Services
          </h1>
          <p className="mr-auto flex lg:w-1/2">
            With over 25 years of experience, Kitts Remodeling is dedicated to
            providing top-notch remodeling services that meet your unique needs.
            Whether you're looking to renovate a single room or undertake a full
            home remodel, our skilled professionals are here to ensure your
            project is completed to the highest standards. Learn more about each
            of our specialized services and see how we can help you achieve your
            dream home.
          </p>
        </div>
      </section>
      <section className="flex flex-col items-center bg-slate-100">
        <div className="flex max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24 xl:gap-12">
          <div className="relative h-full items-start sm:w-1/2 md:items-center">
            <div className="relative flex h-full">
              <Image
                src="/bathroom-1.jpeg"
                alt="bathroom-1"
                width="640"
                height="400"
                className="w-full rounded-lg object-cover sm:h-[330px] 2xl:h-[430px]"
              />
            </div>
          </div>
          <div className="flex flex-col gap-4 sm:w-1/2 md:gap-2 xl:gap-8">
            <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
              Bathroom Remodeling
            </h2>
            <p className="sm:my-6">
              Transform your bathroom into a luxurious spa-like retreat with our
              expert remodeling services. We offer custom designs that enhance
              both functionality and aesthetics, using high-quality materials
              and finishes. From installing new fixtures to creating custom
              showers and vanities, we ensure your bathroom renovation exceeds
              your expectations.
            </p>
            <div className="flex items-center">
              <ConsultationButton title="Get Started" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
