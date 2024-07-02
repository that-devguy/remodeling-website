import React from "react";
import Image from "next/image";
import Link from "next/link";
import ProjectCard from "@/app/projects/components/ProjectCard";
import projects from "@/public/data/projects.json";

const Projects = () => {
  return (
    <section className="flex flex-col items-center bg-white">
      <div className="flex w-full max-w-[1920px] flex-col items-center gap-8 overflow-hidden p-4 py-10 sm:px-10 lg:py-24 xl:gap-12">
        <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
          Projects
        </h2>
        <div className="w-full grid grid-cols-4 gap-4">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              coverPhoto={project.coverPhoto}
              name={project.name}
              type={project.type}
              description={project.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
