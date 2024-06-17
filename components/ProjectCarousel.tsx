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
          className="object-cover h-[430px] rounded-lg"
        />
        {isHovered && (
          <Link href="/">
            <div className="absolute inset-0 text-white font-bold underline underline-offset-4 bg-[#116ed1]/75 flex rounded-lg items-center justify-center">
              View Project
            </div>
          </Link>
        )}
      </div>
      <div className="card-body p-4">
        <h5 className="card-title text-lg font-medium">{project.type}</h5>
        <p className="card-text text-sm text-black/50">{project.desc}</p>
      </div>
    </div>
  );
};

const ProjectCarousel = () => {
  const favoriteProjects = projects.filter((project) => project.favorite);

  return (
    <Carousel className="w-full overflow-hidden left-24">
      <CarouselContent>
        {favoriteProjects.map((project) => (
          <CarouselItem
            className="basis-1/2 2xl:basis-1/3 height"
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
