import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import ConsultationButton from "./ConsultationButton";
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
          width={200}
        ></Image>
      </Link>
      <Link href="/" className="flex sm:hidden pl-1">
        <Image
          src="/kitts-small-blue-logo.png"
          alt="logo"
          height={50}
          width={50}
        ></Image>
      </Link>

      <div className="my-auto ml-auto hidden justify-between gap-4 lg:flex xl:gap-12">
        <ul className="font-base my-auto hidden h-full gap-4 text-sm lg:flex xl:gap-12">
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
        <ConsultationButton title="Get a Consultation" />
      </div>

      {/* mobile nav menu */}
      <div className="flex items-center justify-center">
        <FontAwesomeIcon
          icon={faBars}
          className="mx-3 h-6 w-6 justify-center text-brand-primary lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
