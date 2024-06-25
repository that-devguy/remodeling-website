"use client";
import React, { useState } from "react";
import projects from "../public/data/projects.json";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const HighlightedProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  return (
    <div className="card relative">
      <div
        className="relative"
        onMouseEnter={toggleHover}
        onMouseLeave={toggleHover}
      >
        <Image
          src={project.coverPhoto}
          alt={project.name}
          height={430}
          width={500}
          className="h-[215px] rounded-lg object-cover sm:h-[330px] 2xl:h-[430px]"
        />
        {isHovered && (
          <Link href="/">
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-brand-primary/75 font-bold text-white underline underline-offset-4">
              View Project
            </div>
          </Link>
        )}
      </div>
      <div className="py-4 sm:p-4">
        <h5 className="font-medium sm:text-lg">{project.type}</h5>
        <p className="text-sm text-black/50 sm:text-sm">
          {project.desc}
        </p>
      </div>
    </div>
  );
};

const ProjectCarousel = () => {
  const favoriteProjects = projects.filter((project) => project.favorite);

  return (
    <Carousel className="left-10 w-full overflow-hidden sm:left-16 md:left-12 lg:left-24">
      <CarouselContent className="">
        {favoriteProjects.map((project) => (
          <CarouselItem className="basis-1/2" key={project.id}>
            <HighlightedProjectCard project={project} />
          </CarouselItem>
        ))}
        <CarouselItem className="basis-1/2" key="blank">
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
};

export default ProjectCarousel;
