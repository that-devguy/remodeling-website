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
          className="h-[215px] rounded-lg object-cover sm:h-[330px] md:h-[430px]"
        />
        {isHovered && (
          <Link href="/">
            <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-[#116ed1]/75 font-bold text-white underline underline-offset-4">
              View Project
            </div>
          </Link>
        )}
      </div>
      <div className="card-body p-4">
        <h5 className="card-title sm:text-lg font-medium">{project.type}</h5>
        <p className="card-text text-xs sm:text-sm text-black/50">{project.desc}</p>
      </div>
    </div>
  );
};

const ProjectCarousel = () => {
  const favoriteProjects = projects.filter((project) => project.favorite);

  return (
    <Carousel className="left-10 w-full overflow-hidden md:left-12 lg:left-24">
      <CarouselContent>
        {favoriteProjects.map((project) => (
          <CarouselItem
            className="height basis-1/2 xl:basis-1/3"
            key={project.id}
          >
            <HighlightedProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
};

export default ProjectCarousel;
