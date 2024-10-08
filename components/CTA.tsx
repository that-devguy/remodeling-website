import React from "react";
import Image from "next/image";
import Link from "next/link";
import ConsultationButton from "./ConsultationButton";

const CTA = () => {
  return (
    <section className="flex flex-col items-center bg-slate-100">
      <div className="flex max-w-[1920px] flex-col items-center justify-between gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24 xl:gap-12">
        <div className="flex flex-col gap-4 md:w-2/3 md:gap-2 xl:gap-8">
          <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
            Start Your Dream Home Transformation Today
          </h2>
          <p className="sm:my-6">
            Contact us today to start your remodeling journey with Kitts
            Remodeling. Whether you're planning a small update or a major
            renovation, we're here to help you every step of the way.
          </p>
          <div className="flex items-center gap-4 md:gap-8">
            <ConsultationButton title="Request a Free Consultation" />
          </div>
        </div>
        <div className="relative hidden h-full items-start sm:w-1/2 md:flex md:items-center">
          <div className="relative flex h-full">
            <Image
              src="/kitchens/image1-during.jpg"
              alt="Gutted Kitchen Remodel"
              width="640"
              height="400"
              className="w-fill rounded-md object-cover sm:h-[330px] 2xl:h-[430px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
