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
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Kitchens
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Bathrooms
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Backyards
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Basements
          </Link>
        </ul>
        <ul className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Contact</p>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            (800) 555‑0100
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            hello@kittsremodeling.com
          </Link>
        </ul>
      </div>
      <div className="flex flex-col justify-between gap-10 lg:w-1/3">
        <p className="hidden py-4 text-white lg:flex">
          With over 25 years of experience, we deliver expert craftsmanship with
          an honest work ethic. From kitchen makeovers and bathroom renovations
          to complete home additions, our family-owned business brings your
          vision to life.
        </p>
        <div>
          <Link href="/" className="">
            <Image
              src="/kitts-logo-white.png"
              alt="logo"
              height={67.03}
              width={300}
            ></Image>
          </Link>
          <p className="text-sm text-white">
            Copyright &#169; 2001 - 2024 Kitts Remodeling. All rights reserved.
          </p>
        </div>
      </div>
      <div className="hidden w-2/3 justify-end gap-16 p-4 lg:flex xl:gap-32">
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
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Kitchens
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Bathrooms
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Backyards
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            Basements
          </Link>
        </ul>
        <ul className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Contact</p>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            (800) 555‑0100
          </Link>
          <Link
            href="/"
            className="px-1 text-sm text-white/50 hover:text-white"
          >
            hello@kittsremodeling.com
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
