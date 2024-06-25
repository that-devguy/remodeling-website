"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faTrowelBricks,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import StepsCarousel from "@/components/StepsCarousel";

const Steps = () => {
  return (
    <section className="flex flex-col items-center bg-white">
      <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24">
        <div className="flex w-full flex-col gap-4 md:gap-2 xl:gap-8">
          <h2 className="title md:text-center text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
            Effortless Home Transformation:<br></br> Our 3-Step Process
          </h2>
          <h3 className="md:text-center">
            At Kitts Remodeling, we aim to simplify the entire home renovation
            journey, making it stress-free and enjoyable!
          </h3>
          <div className="flex flex-col sm:mt-6">
            {/* mobile view*/}
            <StepsCarousel />

            {/* desktop view */}
            <ul className="hidden justify-between sm:flex sm:gap-2 xl:gap-12">
              <li className="flex w-1/4 flex-col items-center justify-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="mb-4 h-6 w-6 rounded-lg bg-brand-primary p-4 text-white"
                />
                <h5 className="mb-2 font-medium sm:text-lg">Contact Us</h5>
                <p className="text-xs/75 text-center text-black/50 sm:text-sm">
                  Reach out to us via phone, email, or our online form. We're
                  here to answer your questions and set up a consultation to
                  discuss your project ideas and goals.
                </p>
              </li>
              <li className="flex w-10 flex-col items-center justify-center lg:w-20">
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  height="75"
                  width="75"
                  className="flex w-fit items-center"
                />
              </li>
              <li className="flex w-1/4 flex-col items-center justify-start">
                <FontAwesomeIcon
                  icon={faPenRuler}
                  className="mb-4 h-6 w-6 rounded-lg bg-brand-primary p-4 text-white"
                />
                <h5 className="mb-2 font-medium sm:text-lg">Planning</h5>
                <p className="text-xs/75 text-center text-black/50 sm:text-sm">
                  Work with our experienced team to create a customized plan
                  that suits your needs and style. We’ll guide you through
                  design options, material selections, and provide a detailed
                  project timeline and estimate.
                </p>
              </li>
              <li className="flex w-10 flex-col items-center justify-center lg:w-20">
                <Image
                  src="/arrow.png"
                  alt="arrow"
                  height="75"
                  width="75"
                  className="flex w-fit items-center"
                />
              </li>
              <li className="flex w-1/4 flex-col items-center justify-start">
                <FontAwesomeIcon
                  icon={faTrowelBricks}
                  className="mb-4 h-6 w-6 rounded-lg bg-brand-primary p-4 text-white"
                />
                <h5 className="mb-2 font-medium sm:text-lg">Installation</h5>
                <p className="text-xs/75 text-center text-black/50 sm:text-sm">
                  Sit back and relax as our skilled craftsmen bring your vision
                  to life. We manage the entire installation process with
                  precision and care, ensuring a seamless and stress-free
                  experience.
                </p>
              </li>
            </ul>
            <Link
              className="mt-8 hidden justify-center font-bold text-brand-primary underline underline-offset-4 sm:flex md:text-base"
              href="/"
            >
              Get Started Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
