import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/app/portfolio/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import projects from "@/public/data/projects.json";
import { Slash } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const Portfolio = () => {
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
        <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:px-10 lg:py-24">
          <h2 className="title mr-auto text-4xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
            Our Portfolio
          </h2>
          <p className="mr-auto w-full">
            Discover the transformative power of quality craftsmanship with
            Kitts Remodeling. Explore our extensive gallery showcasing a wide
            range of completed projects, from stunning kitchen remodels and
            luxurious bathroom renovations to elegant custom carpentry and
            expansive deck constructions. See firsthand how we bring our
            clients' visions to life with meticulous attention to detail and a
            commitment to excellence.
          </p>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
};

export default Portfolio;
