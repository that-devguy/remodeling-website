import Link from "next/link";
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex justify-between max-container padding-container z-30 pt-10 pb-20 px-10 bg-[#116ed1]">
      <div className="flex flex-col w-1/3 justify-between gap-10">
        <p className="p-4 text-white">
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
          <p className="text-white text-sm px-4">
            Copyright &#169; 2001 - 2024 Kitts Remodeling. All rights reserved.
          </p>
        </div>
      </div>
      <div className="flex justify-end gap-10 w-2/3 p-4">
        <ul className="flex flex-col text-white w-1/4 gap-4">
          <p className="font-bold text-lg">Company</p>
          <Link href="/" className="hover:underline">
            About
          </Link>
          <Link href="/" className="hover:underline">
            FAQ
          </Link>
          <Link href="/" className="hover:underline">
            Careers
          </Link>
        </ul>
        <ul className="flex flex-col text-white w-1/4 gap-4">
          <p className="font-bold text-lg">Services</p>
          <Link href="/" className="hover:underline">
            Kitchens
          </Link>
          <Link href="/" className="hover:underline">
            Bathrooms
          </Link>
          <Link href="/" className="hover:underline">
            Backyards
          </Link>
          <Link href="/" className="hover:underline">
            Basements
          </Link>
        </ul>
        <ul className="flex flex-col text-white w-1/4 gap-4">
          <p className="font-bold text-lg">Contact</p>
          <Link href="/" className="hover:underline">
            (800) 555‑0100
          </Link>
          <Link href="/" className="hover:underline">
            hello@kittsremodeling.com
          </Link>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
