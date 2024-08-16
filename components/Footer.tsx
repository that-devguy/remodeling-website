import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container padding-container z-30 flex flex-col justify-between bg-brand-primary px-4 py-5 pb-20 pt-10 sm:px-10 lg:flex-row">
      <div className="mb-6 flex flex-col justify-start gap-2 py-4 md:flex-row md:gap-32 lg:hidden">
        <ul className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Company</p>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            About
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Our Process
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            FAQ
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Careers
          </Link>
        </ul>
        <ul className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Services</p>
          <Link
            href="/services/kitchen-remodeling"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Kitchen Remodeling
          </Link>
          <Link
            href="/services/bathroom-remodeling"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Bathroom Remodeling
          </Link>
          <Link
            href="/services/home-renovations"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Home Renovations
          </Link>
          <Link
            href="/services/interior-painting"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Interior Painting
          </Link>
        </ul>
        <ul className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Contact</p>
          <p className="px-1 text-sm text-white">(216) 417-9100</p>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            kittsremodeling@gmail.com
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-between gap-10 lg:w-1/3">
        <p className="hidden py-4 text-white lg:flex">
          With over 25 years of experience, we deliver expert craftsmanship with
          an honest work ethic. From kitchen makeovers and bathroom renovations
          to custom built-ins, our family-owned business brings your vision to
          life.
        </p>
        <div className="mt-6">
          <p className="flex text-sm text-white lg:hidden">
            Disclaimer: All images used on this website are for design concept
            purposes only. We do not own the rights to these images. If you are
            the owner of any of these images and wish for them to be removed,
            please contact us.
          </p>
        </div>
        <div>
          <Link href="/" className="">
            <Image
              src="/KittsRemodelingLogoWhite.png"
              alt="logo"
              height={67.03}
              width={200}
            ></Image>
          </Link>
          <p className="pt-4 text-sm text-white">
            Copyright &#169; 2001 - 2024 Kitts Remodeling. All rights reserved.
          </p>
        </div>
      </div>
      <div className="hidden w-2/3 justify-between gap-16 p-4 pb-0 lg:flex lg:flex-col">
        <div className="hidden justify-end lg:flex lg:gap-20 xl:gap-32">
          <ul className="flex flex-col gap-2 text-white">
            <p className="text-lg font-bold">Company</p>
            <Link
              href="/"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              About
            </Link>
            <Link
              href="/"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              Our Process
            </Link>
            <Link
              href="/"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              FAQ
            </Link>
            <Link
              href="/"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              Careers
            </Link>
          </ul>
          <ul className="flex flex-col gap-2 text-white">
            <p className="text-lg font-bold">Services</p>
            <Link
              href="/services/kitchen-remodeling"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              Kitchen Remodeling
            </Link>
            <Link
              href="/services/bathroom-remodeling"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              Bathroom Remodeling
            </Link>
            <Link
              href="/services/home-renovations"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              Home Renovations
            </Link>
            <Link
              href="/services/interior-painting"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              Interior Painting
            </Link>
          </ul>
          <ul className="flex flex-col gap-2 text-white">
            <p className="text-lg font-bold">Contact</p>
            <p className="px-1 text-sm text-white">(216) 417-9100</p>
            <Link
              href="/"
              className="px-1 text-sm text-white/50 hover:text-white"
            >
              kittsremodeling@gmail.com
            </Link>
          </ul>
        </div>
        <div className="ml-auto flex w-2/3 text-sm text-white">
          <p>
            Disclaimer: All images used on this website are for design concept
            purposes only. We do not own the rights to these images. If you are
            the owner of any of these images and wish for them to be removed,
            please contact us.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
