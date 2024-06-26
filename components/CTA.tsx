import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const CTA = () => {
  return (
    <section className="flex flex-col items-center bg-slate-100">
      <div className="flex max-w-[1920px] flex-col items-center justify-between gap-8 overflow-hidden p-4 py-10 sm:flex-row sm:px-10 lg:py-24 xl:gap-12">
        <div className="flex flex-col gap-4 sm:w-1/2 md:gap-2 xl:gap-8">
          <h2 className="title mr-auto text-2xl font-bold uppercase italic text-brand-primary sm:text-2xl lg:text-4xl 2xl:text-5xl">
            Start Your Dream Home Transformation Today
          </h2>
          <p className="sm:my-6">
            Contact us today to start your remodeling journey with Kitts
            Remodeling. Whether you're planning a small update or a major
            renovation, we're here to help you every step of the way.
          </p>
          <div className="flex items-center gap-4 md:gap-8">
            <Button type="button" title="Request a Free Consultation" />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 mr-auto sm:justify-between sm:mr-0">
          <div className="flex flex-col gap-4 sm:w-1/2">
            <div>
              <h5 className="font-medium sm:text-lg">Email</h5>
              <p className="text-sm text-black/50">hello@kittsremodeling.com</p>
            </div>
            <div>
              <h5 className="font-medium sm:text-lg">Phone</h5>
              <p className="text-sm text-black/50">(800) 555‑0100</p>
            </div>
            <div>
              <h5 className="font-medium sm:text-lg">Service Area</h5>
              <p className="text-sm text-black/50">Lakewood</p>
              <p className="text-sm text-black/50">Westlake</p>
              <p className="text-sm text-black/50">Avon Lake</p>
              <p className="text-sm text-black/50">Bay Village</p>
              <p className="text-sm text-black/50">Rocky River</p>
              <p className="text-sm text-black/50">Fairview Park</p>
              <p className="text-sm text-black/50">North Olmsted</p>
              <p className="text-sm text-black/50">North Ridgeville</p>
            </div>
          </div>
          <div className="flex flex-col sm:w-1/2">
            <h5 className="font-medium sm:text-lg">Office Hours</h5>
            <div className="flex justify-between lg:gap-8">
              <p className="text-sm text-black/50">Mon</p>
              <p className="text-sm text-black/50">8am - 6pm</p>
            </div>
            <div className="flex justify-between lg:gap-8">
              <p className="text-sm text-black/50">Tues</p>
              <p className="text-sm text-black/50">8am - 6pm</p>
            </div>
            <div className="flex justify-between lg:gap-8">
              <p className="text-sm text-black/50">Wed</p>
              <p className="text-sm text-black/50">8am - 6pm</p>
            </div>
            <div className="flex justify-between lg:gap-8">
              <p className="text-sm text-black/50">Thu</p>
              <p className="text-sm text-black/50">8am - 6pm</p>
            </div>
            <div className="flex justify-between lg:gap-8">
              <p className="text-sm text-black/50">Fri</p>
              <p className="text-sm text-black/50">8am - 6pm</p>
            </div>
            <div className="flex justify-between lg:gap-8">
              <p className="text-sm text-black/50">Sat</p>
              <p className="text-sm text-black/50">8am - 6pm</p>
            </div>
            <div className="flex justify-between lg:gap-8">
              <p className="text-sm text-black/50">Sun</p>
              <p className="text-sm text-black/50">8am - 6pm</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
