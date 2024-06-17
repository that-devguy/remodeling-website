import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="max-container padding-container z-30 flex flex-col lg:flex-row justify-between bg-[#116ed1] px-2 py-5 sm:px-10 pb-20 pt-10">
      <div className="flex flex-col md:flex-row lg:hidden justify-start gap-4 mb-6 md:gap-32 p-4">
        <ul className="flex flex-col gap-2 text-white">
          <p className="text-lg font-bold">Company</p>
          <Link href="/" className="text-white/50 hover:text-white">
            About
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            FAQ
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            Careers
          </Link>
        </ul>
        <ul className="flex flex-col gap-4 text-white">
          <p className="text-lg font-bold">Services</p>
          <Link href="/" className="text-white/50 hover:text-white">
            Kitchens
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            Bathrooms
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            Backyards
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            Basements
          </Link>
        </ul>
        <ul className="flex flex-col gap-4 text-white">
          <p className="text-lg font-bold">Contact</p>
          <Link href="/" className="text-white/50 hover:text-white">
            (800) 555‑0100
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            hello@kittsremodeling.com
          </Link>
        </ul>
      </div>
      <div className="flex lg:w-1/3 flex-col justify-between gap-10">
        <p className="p-4 text-white hidden lg:flex">
          With over 25 years of experience, we deliver expert craftsmanship with
          an honest work ethic. From kitchen makeovers and bathroom renovations
          to complete home additions, our family-owned business brings your
          vision to life.
        </p>
        <div>
          <Link href="/" className="">
            <Image
              src="/kitts-white-logo.png"
              alt="logo"
              height={67.03}
              width={300}
            ></Image>
          </Link>
          <p className="px-4 text-sm text-white">
            Copyright &#169; 2001 - 2024 Kitts Remodeling. All rights reserved.
          </p>
        </div>
      </div>
      <div className="lg:flex hidden w-2/3 justify-end gap-16 xl:gap-32 p-4">
        <ul className="flex flex-col gap-4 text-white">
          <p className="text-lg font-bold">Company</p>
          <Link href="/" className="text-white/50 hover:text-white">
            About
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            FAQ
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            Careers
          </Link>
        </ul>
        <ul className="flex flex-col gap-4 text-white">
          <p className="text-lg font-bold">Services</p>
          <Link href="/" className="text-white/50 hover:text-white">
            Kitchens
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            Bathrooms
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            Backyards
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            Basements
          </Link>
        </ul>
        <ul className="flex flex-col gap-4 text-white">
          <p className="text-lg font-bold">Contact</p>
          <Link href="/" className="text-white/50 hover:text-white">
            (800) 555‑0100
          </Link>
          <Link href="/" className="text-white/50 hover:text-white">
            hello@kittsremodeling.com
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
