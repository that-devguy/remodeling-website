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
        height={100}
        width={100}
      />
      <div className="card-body">
        <h5 className="card-title">{project.name}</h5>
        <p className="card-text">{project.description}</p>
      </div>
    </div>
  );
};

const ProjectCarousel = () => {
  return (
    <Carousel>
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
