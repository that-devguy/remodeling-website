import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className="flex justify-between max-container padding-container z-30 py-5 px-10 bg-white">
      <Link href="/" className="">
        <Image
          src="/kitts-blue-logo.png"
          alt="logo"
          height={100}
          width={300}
        ></Image>
      </Link>

      <div className="lg:flex justify-between my-auto hidden gap-12">
        <ul className="hidden h-full gap-12 lg:flex my-auto text-md font-base">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="text-black/50 cursor-pointer transition-all hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Button type="button" title="Get a Free Estimate" />
      </div>
    </nav>
  );
};

export default Navbar;
