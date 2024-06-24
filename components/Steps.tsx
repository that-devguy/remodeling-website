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
    <section className="bg-brand-primary flex flex-col items-center">
      <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24">
        <div className="flex w-full flex-col gap-4 md:gap-2 xl:gap-8">
          <h2 className="title text-center text-2xl font-bold uppercase italic text-white sm:text-2xl lg:text-4xl 2xl:text-5xl">
            As Easy As 1, 2, 3
          </h2>
          <h3 className="text-center text-white">
            At Kitts Remodeling, we aim to simplify the entire home renovation
            journey, making it stress-free and enjoyable!
          </h3>
          <div className="sm:my-6">
            {/* mobile view
            <Carousel className="mt-6 w-full sm:hidden">
              <CarouselContent>
                <CarouselItem className="flex flex-col items-center justify-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="text-brand-primary mb-4 h-10 w-10 rounded-lg bg-white p-2"
                  />
                  <h5 className="mb-2 font-medium text-white sm:text-lg">
                    Contact Us
                  </h5>
                  <p className="px-10 text-center text-sm text-white/75">
                    Reach out to us via phone, email, or our online form. We're
                    here to answer your questions and set up a consultation to
                    discuss your project ideas and goals.
                  </p>
                </CarouselItem>
                <CarouselItem className="flex flex-col items-center justify-start">
                  <FontAwesomeIcon
                    icon={faPenRuler}
                    className="text-brand-primary mb-4 h-10 w-10 rounded-lg bg-white p-2"
                  />
                  <h5 className="mb-2 font-medium text-white sm:text-lg">
                    Planning
                  </h5>
                  <p className="px-10 text-center text-sm text-white/75">
                    Work with our experienced team to create a customized plan
                    that suits your needs and style. We’ll guide you through
                    design options, material selections, and provide a detailed
                    project timeline and estimate.
                  </p>
                </CarouselItem>
                <CarouselItem className="flex flex-col items-center justify-start">
                  <FontAwesomeIcon
                    icon={faTrowelBricks}
                    className="text-brand-primary mb-4 h-10 w-10 rounded-lg bg-white p-2"
                  />
                  <h5 className="mb-2 font-medium text-white sm:text-lg">
                    Installation
                  </h5>
                  <p className="px-10 text-center text-sm text-white/75">
                    Sit back and relax as our skilled craftsmen bring your
                    vision to life. We manage the entire installation process
                    with precision and care, ensuring a seamless and stress-free
                    experience.
                  </p>
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel> */}
            <StepsCarousel />

            {/* desktop view */}
            <ul className="hidden justify-between sm:flex sm:gap-8 xl:gap-12">
              <li className="flex w-1/4 flex-col items-center justify-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="text-brand-primary mb-4 h-10 w-10 rounded-lg bg-white p-2"
                />
                <h5 className="mb-2 font-medium text-white sm:text-lg">
                  Contact Us
                </h5>
                <p className="text-center text-xs text-white/75 sm:text-sm">
                  Reach out to us via phone, email, or our online form. We're
                  here to answer your questions and set up a consultation to
                  discuss your project ideas and goals.
                </p>
              </li>
              <li className="flex flex-col items-center justify-center">
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
                  className="text-brand-primary mb-4 h-10 w-10 rounded-lg bg-white p-2"
                />
                <h5 className="mb-2 font-medium text-white sm:text-lg">
                  Planning
                </h5>
                <p className="text-center text-xs text-white/75 sm:text-sm">
                  Work with our experienced team to create a customized plan
                  that suits your needs and style. We’ll guide you through
                  design options, material selections, and provide a detailed
                  project timeline and estimate.
                </p>
              </li>
              <li className="flex flex-col items-center justify-center">
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
                  className="text-brand-primary mb-4 h-10 w-10 rounded-lg bg-white p-2"
                />
                <h5 className="mb-2 font-medium text-white sm:text-lg">
                  Installation
                </h5>
                <p className="text-center text-xs text-white/75 sm:text-sm">
                  Sit back and relax as our skilled craftsmen bring your vision
                  to life. We manage the entire installation process with
                  precision and care, ensuring a seamless and stress-free
                  experience.
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
