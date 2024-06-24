import React from "react";
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
        <div className="embla__container mt-6">
          {[
            {
              icon: faPhone,
              title: "Contact Us",
              text: "Reach out to us via phone, email, or our online form. We're here to answer your questions and set up a consultation to discuss your project ideas and goals.",
            },
            {
              icon: faPenRuler,
              title: "Planning",
              text: "Work with our experienced team to create a customized plan that suits your needs and style. We’ll guide you through design options, material selections, and provide a detailed project timeline and estimate.",
            },
            {
              icon: faTrowelBricks,
              title: "Installation",
              text: "Sit back and relax as our skilled craftsmen bring your vision to life. We manage the entire installation process with precision and care, ensuring a seamless and stress-free experience.",
            },
          ].map((slide, index) => (
            <div
              className="embla__slide flex flex-col items-center justify-center"
              key={index}
            >
              <FontAwesomeIcon
                icon={slide.icon}
                className="text-brand-primary mb-4 h-10 w-10 rounded-lg bg-white p-2"
              />
              <h5 className="mb-2 font-medium text-white text-lg">
                {slide.title}
              </h5>
              <p className="px-10 text-center text-sm text-white">
                {slide.text}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            onClick={() => onDotButtonClick(index)}
            className={`embla__dot${index === selectedIndex ? " embla__dot--selected" : ""}`}
          />
        ))}
      </div>
    </div>
  );
}
