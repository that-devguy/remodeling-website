import React from "react";
import WhyUsTable from "@/components/WhyUsTable";

const WhyUs = () => {
  return (
    <section className="flex flex-col items-center bg-slate-100">
      <div className="flex w-full max-w-[1920px] flex-col gap-8 overflow-hidden p-4 py-10 sm:px-10 lg:py-24 xl:gap-12">
        <h2 className="title text-brand-primary mr-auto text-2xl font-bold uppercase italic sm:w-1/2 sm:text-2xl lg:text-4xl xl:w-1/3 2xl:text-5xl">
          Why choose Kitts over the other guys?
        </h2>
        <WhyUsTable />
      </div>
    </section>
  );
};

export default WhyUs;
