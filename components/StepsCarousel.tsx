import React from "react";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faTrowelBricks,
  faPenRuler,
} from "@fortawesome/free-solid-svg-icons";
import {
  DotButton,
  useDotButton,
} from "@/components/ui/emblaCarouselDotButton";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel();
  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  return (
    <div className="embla sm:hidden">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {[
            {
              icon: faPhone,
              title: "1.  Contact Us",
              text: "Reach out to us via phone, email, or our online form. We're here to answer your questions and set up a consultation to discuss your project ideas and goals.",
            },
            {
              icon: faPenRuler,
              title: "2.  Planning",
              text: "Work with our experienced team to create a customized plan that suits your needs and style. We’ll guide you through design options, material selections, and provide a detailed project timeline and estimate.",
            },
            {
              icon: faTrowelBricks,
              title: "3.  Installation",
              text: "Sit back and relax as our skilled craftsmen bring your vision to life. We manage the entire installation process with precision and care, ensuring a seamless and stress-free experience.",
            },
          ].map((slide, index) => (
            <div
              className="embla__slide flex flex-col items-start justify-center pr-4"
              key={index}
            >
              {/* <FontAwesomeIcon
                icon={slide.icon}
                className="mb-4 h-6 w-6 rounded-lg bg-brand-primary p-4 text-white"
              /> */}
              <h5 className="mb-2 text-lg font-medium">{slide.title}</h5>
              <p className="text-sm text-black/50">{slide.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="embla__dots items-center">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? "embla__dot--selected" : ""}`}
            />
          ))}
        </div>
        <Link
          className="text-sm font-bold text-brand-primary underline underline-offset-4 md:text-base"
          href="/"
        >
          Get Started Now
        </Link>
      </div>
    </div>
  );
}
