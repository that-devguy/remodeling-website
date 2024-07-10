import React from "react";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

interface TestimonialCardProps {
  coverPhoto: string;
  name: string;
  type: string;
  description: string;
  testimonial: string;
}

const capitalizeFirstLetter = (string: string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const TestimonialCard = ({
  coverPhoto,
  name,
  type,
  description,
  testimonial,
}: TestimonialCardProps) => {
  const desc = capitalizeFirstLetter(description);
  return (
    <div className="embla__slide !mr-6 flex max-w-[400px] select-none flex-col rounded-md border border-slate-200 bg-white text-black shadow-lg">
      <Image
        src={coverPhoto}
        alt={type}
        height="500"
        width="600"
        className="sm:h[225px] h-[215px] rounded-t-md object-cover"
      />
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h5 className="font-medium sm:text-lg">{name}</h5>
          <div className="flex gap-2 text-yellow-500">
            <FontAwesomeIcon icon={faStar} className="w-4" />
            <FontAwesomeIcon icon={faStar} className="w-4" />
            <FontAwesomeIcon icon={faStar} className="w-4" />
            <FontAwesomeIcon icon={faStar} className="w-4" />
            <FontAwesomeIcon icon={faStar} className="w-4" />
          </div>
        </div>
        <p className="text-sm text-black/50">{desc}</p>
      </div>
      <div>
        <p className="mb-8 px-4 text-sm sm:text-base">
          "{testimonial}"
        </p>
      </div>
    </div>
  );
};

export default TestimonialCard;
