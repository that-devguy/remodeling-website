import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface ProjectCardProps {
  coverPhoto: string;
  name: string;
  type: string;
  description: string;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const ProjectCard = ({
  coverPhoto,
  name,
  type,
  description,
}: ProjectCardProps) => {
  const desc = capitalizeFirstLetter(description);
  return (
    <div className="flex select-none flex-col rounded-b-lg bg-white shadow-lg">
      <Image
        src={coverPhoto}
        alt={type}
        height="500"
        width="600"
        className="sm:h[225px] h-[215px] rounded-t-lg object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium sm:text-lg">{name}</h5>
        </div>
        <p className="text-sm text-black/50">{desc}</p>
      </div>
      <div></div>
    </div>
  );
};

export default ProjectCard;
