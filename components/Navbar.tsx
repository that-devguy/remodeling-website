"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import React from "react";
import services from "@/public/data/services.json";
import ConsultationButton from "./ConsultationButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const Navbar = () => {
  return (
    <nav className="max-container padding-container z-30 flex justify-between bg-white px-2 py-6 sm:px-10">
      <Link
        href="/"
        className="hidden rounded-sm focus:border-neutral-200 focus:ring-0 focus-visible:outline-none focus-visible:ring-offset-2 sm:flex"
      >
        <Image
          src="/kitts-logo-blue.png"
          alt="logo"
          height={50}
          width={200}
        ></Image>
      </Link>
      <Link
        href="/"
        className="flex rounded-sm focus:border-neutral-200 focus:ring-0 focus-visible:outline-none focus-visible:ring-offset-2 sm:hidden"
      >
        <Image
          src="/kitts-small-blue-logo.png"
          alt="logo"
          height={50}
          width={50}
          className="ml-2"
        ></Image>
      </Link>

      <div className="my-auto ml-auto hidden justify-between gap-4 lg:flex xl:gap-8">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  {services.map((service) => (
                    <ListItem
                      key={service.id}
                      href={service.url}
                      title={service.name}
                      className="rounded-md hover:bg-slate-100"
                    >
                      <p className="text-black/50">{service.description}</p>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Link href="/portfolio" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Portfolio
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  <ListItem
                    href="/"
                    title="About Us"
                    className="rounded-md hover:bg-slate-100"
                  >
                    <p className="text-black/50">
                      Learn more about Kitts Remodeling, our history, and our
                      commitment to quality craftsmanship and honest work ethic.
                    </p>
                  </ListItem>
                  <ListItem
                    href="/"
                    title="Our Process"
                    className="rounded-md hover:bg-slate-100"
                  >
                    <p className="text-black/50">
                      Discover our straightforward and transparent remodeling
                      process, designed to ensure a smooth experience from start
                      to finish.
                    </p>
                  </ListItem>
                  <ListItem
                    href="/"
                    title="FAQ"
                    className="rounded-md hover:bg-slate-100"
                  >
                    <p className="text-black/50">
                      Find answers to common questions about our services,
                      pricing, and project timelines.
                    </p>
                  </ListItem>
                  <ListItem
                    href="/"
                    title="Careers"
                    className="rounded-md hover:bg-slate-100"
                  >
                    <p className="text-black/50">
                      Explore exciting career opportunities at Kitts Remodeling
                      and join our team of skilled professionals.
                    </p>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[1fr_1fr]">
                  {services.map((service) => (
                    <ListItem
                      key={service.id}
                      href={service.pricingUrl}
                      title={service.pricingName}
                      className="rounded-md hover:bg-slate-100"
                    >
                      <p className="text-black/50">
                        {service.pricingDescription}
                      </p>
                    </ListItem>
                  ))}
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <p className="flex items-center text-sm font-medium">(800) 555‑0100</p>
        <ConsultationButton title="Get A Quote" />
      </div>

      {/* mobile nav menu */}
      <div className="flex items-center justify-center lg:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center justify-center">
            <FontAwesomeIcon
              icon={faBars}
              className="mx-3 h-5 w-5 text-brand-primary lg:hidden"
            />
          </SheetTrigger>
          <SheetContent className="lg:hidden">
            <SheetHeader>
              <SheetTitle>
                <a
                  href="/"
                  className="ml-3 flex w-[160px] rounded-sm focus:border-neutral-200 focus:ring-0 focus-visible:outline-none focus-visible:ring-offset-2 sm:w-[200px]"
                >
                  <Image
                    src="/kitts-logo-blue.png"
                    alt="logo"
                    height={50}
                    width={160}
                    className="flex pt-1 sm:hidden"
                  ></Image>
                  <Image
                    src="/kitts-logo-blue.png"
                    alt="logo"
                    height={50}
                    width={200}
                    className="hidden sm:flex"
                  ></Image>
                </a>
              </SheetTitle>
              <SheetDescription>
                <NavigationMenu orientation="vertical">
                  <NavigationMenuList className="flex-col items-start space-x-0 pt-4">
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Services</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[220px] p-4 text-left md:w-[300px] lg:w-[500px] lg:grid-cols-[1fr_1fr] lg:gap-3 lg:p-6">
                          {services.map((service) => (
                            <ListItem
                              key={service.id}
                              href={service.url}
                              title={service.name}
                              className="rounded-md hover:bg-slate-100"
                            >
                              <p className="text-black/50">
                                {service.description}
                              </p>
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <a href="/portfolio">
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                        >
                          Portfolio
                        </NavigationMenuLink>
                      </a>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>About Us</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[220px] p-4 text-left md:w-[300px] lg:w-[500px] lg:grid-cols-[1fr_1fr] lg:gap-3 lg:p-6">
                          <ListItem
                            href="/"
                            title="About Us"
                            className="rounded-md hover:bg-slate-100"
                          >
                            <p className="text-black/50">
                              Learn more about Kitts Remodeling, our history,
                              and our commitment to quality craftsmanship and
                              honest work ethic.
                            </p>
                          </ListItem>
                          <ListItem
                            href="/"
                            title="Our Process"
                            className="rounded-md hover:bg-slate-100"
                          >
                            <p className="text-black/50">
                              Discover our straightforward and transparent
                              remodeling process, designed to ensure a smooth
                              experience from start to finish.
                            </p>
                          </ListItem>
                          <ListItem
                            href="/"
                            title="FAQ"
                            className="rounded-md hover:bg-slate-100"
                          >
                            <p className="text-black/50">
                              Find answers to common questions about our
                              services, pricing, and project timelines.
                            </p>
                          </ListItem>
                          <ListItem
                            href="/"
                            title="Careers"
                            className="rounded-md hover:bg-slate-100"
                          >
                            <p className="text-black/50">
                              Explore exciting career opportunities at Kitts
                              Remodeling and join our team of skilled
                              professionals.
                            </p>
                          </ListItem>
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Pricing</NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[220px] p-4 text-left md:w-[300px] lg:w-[500px] lg:grid-cols-[1fr_1fr] lg:gap-3 lg:p-6">
                          {services.map((service) => (
                            <ListItem
                              key={service.id}
                              href={service.pricingUrl}
                              title={service.pricingName}
                              className="rounded-md hover:bg-slate-100"
                            >
                              <p className="text-black/50">
                                {service.pricingDescription}
                              </p>
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  </NavigationMenuList>
                </NavigationMenu>
                <p className="flex items-center px-4 py-2 text-sm font-medium">
                  (800) 555‑0100
                </p>
              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
