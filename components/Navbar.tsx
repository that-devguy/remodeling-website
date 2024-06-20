import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <nav className="max-container padding-container z-30 flex justify-between bg-white px-2 py-5 sm:px-10">
      <Link href="/" className="hidden sm:flex sm:w-1/3">
        <Image
          src="/kitts-blue-logo.png"
          alt="logo"
          height={67.03}
          width={300}
        ></Image>
      </Link>
      <Link href="/" className="flex sm:hidden">
        <Image
          src="/kitts-small-blue-logo.png"
          alt="logo"
          height={75}
          width={75}
        ></Image>
      </Link>

      <div className="my-auto hidden justify-between gap-4 lg:flex xl:gap-12">
        <ul className="text-md font-base my-auto hidden h-full gap-4 lg:flex xl:gap-12">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer text-black/50 transition-all hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </ul>
        <Button type="button" title="Get a Free Estimate" />
      </div>

      {/* mobile nav menu */}
      <FontAwesomeIcon
        icon={faBars}
        className="mx-3 w-7 justify-center text-[#116ed1] lg:hidden"
      />
    </nav>
  );
};

export default Navbar;
