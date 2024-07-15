"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/app/portfolio/components/ProjectCard";
import Testimonials from "@/components/Testimonials";
import CTA from "@/components/CTA";
import projects from "@/public/data/projects.json";
import PortfolioCarousel from "@/components/PortfolioCarousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const kitchenFilter = (project) => project.type.includes("Kitchen");
const bathroomFilter = (project) => project.type.includes("Bathroom");
const homeRenoFilter = (project) => project.type.includes("Home Renovation");
const paintFilter = (project) => project.type.includes("Paint");

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
        <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:px-10 lg:pt-24">
          <h2 className="title mr-auto text-4xl font-bold uppercase italic text-brand-primary sm:text-4xl lg:text-5xl 2xl:text-6xl">
            Our Portfolio
          </h2>
          <p className="mr-auto w-full lg:w-3/4">
            Discover the transformative power of quality craftsmanship with
            Kitts Remodeling. Explore our extensive gallery showcasing a wide
            range of completed projects, from stunning kitchen remodels and
            luxurious bathroom renovations to elegant custom carpentry and
            expansive deck constructions. See firsthand how we bring our
            clients' visions to life with meticulous attention to detail and a
            commitment to excellence.
          </p>
          <div className="mr-auto flex flex-col pt-10 lg:pt-24">
            <h3 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-3xl 2xl:text-3xl">
              Kitchen Remodels
            </h3>
            <div className="mr-auto flex h-full select-none items-center">
              <PortfolioCarousel filterFunction={kitchenFilter} />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-slate-100">
        <div className="flex w-full max-w-[1920px] flex-col items-center overflow-hidden p-4 py-10 sm:px-10 lg:pt-12">
          <h3 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-3xl 2xl:text-3xl">
            Bathroom Remodels
          </h3>
          <div className="mr-auto flex h-full select-none items-center">
            <PortfolioCarousel filterFunction={bathroomFilter} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-white">
        <div className="flex w-full max-w-[1920px] flex-col items-center overflow-hidden p-4 py-10 sm:px-10 lg:pt-12">
          <h3 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-3xl 2xl:text-3xl">
            Home Renovations
          </h3>
          <div className="mr-auto flex h-full select-none items-center">
            <PortfolioCarousel filterFunction={homeRenoFilter} />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center bg-slate-100">
        <div className="flex w-full max-w-[1920px] flex-col items-center overflow-hidden p-4 py-10 sm:px-10 lg:pt-12">
          <h3 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-3xl 2xl:text-3xl">
            Interior Painting
          </h3>
          <div className="mr-auto flex h-full select-none items-center">
            <PortfolioCarousel filterFunction={paintFilter} />
          </div>
        </div>
      </section>
      <Testimonials />
      <CTA />
    </>
  );
};

export default Portfolio;
