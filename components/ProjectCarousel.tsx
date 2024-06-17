// ProjectCarousel.jsx
import React from "react";
import projects from "../public/data/projects.json";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const HighlightedProjectCard = ({ project }) => {
  return (
    <div className="card">
      <Image
        src={project.coverPhoto}
        alt={project.name}
        height={430}
        width={280}
        style={{objectFit: "cover"}}
      />
      <div>
        <p>{project.name}</p>
        <p>{project.type}</p>
      </div>
    </div>
  );
};

const ProjectCarousel = () => {
  return (
    <Carousel className="overflow-hidden left-24">
      <CarouselContent>
        {projects.map((project) => (
          <CarouselItem className="basis-1/3" key={project.id}>
            <HighlightedProjectCard project={project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default ProjectCarousel;
