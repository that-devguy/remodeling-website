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
    <div className="embla__slide !mr-6 flex max-w-[500px] flex-col rounded-b-lg bg-white shadow-lg select-none">
      <Image
        src={coverPhoto}
        alt={type}
        height="500"
        width="600"
        className="h-[215px] rounded-t-lg object-cover sm:h-[330px] 2xl:h-[250px]"
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
        <p className="text-sm sm:text-base mb-8 px-4 text-black/50">"{testimonial}"</p>
      </div>
    </div>
  );
};

export default TestimonialCard;
