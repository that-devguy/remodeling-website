"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
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

const Navbar = () => {
  return (
    <nav className="max-container padding-container z-30 flex justify-between bg-white px-2 py-5 sm:px-10">
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
              <Link href="/" legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Services</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                  <ListItem href="/docs" title="Kitchen Remodeling">
                    <p className="text-black/50">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </p>
                  </ListItem>
                  <ListItem href="/docs" title="Bathroom Remodeling">
                    <p className="text-black/50">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </p>
                  </ListItem>
                  <ListItem href="/docs" title="Carpentry">
                    <p className="text-black/50">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </p>
                  </ListItem>
                  <ListItem href="/docs" title="Decks + Railings">
                    <p className="text-black/50">
                      Re-usable components built using Radix UI and Tailwind
                      CSS.
                    </p>
                  </ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        {/* <ul className="font-base my-auto hidden h-full gap-4 text-sm lg:flex xl:gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer rounded-sm px-2 text-black/50 transition-all hover:text-black"
            >
              {link.label}
            </Link>
          ))}
        </ul> */}
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
