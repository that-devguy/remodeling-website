import React from "react";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faMinus } from "@fortawesome/free-solid-svg-icons";

const kittsPerks = [
  "Over 25 years of expertise",
  "Full range of remodeling services",
  "Transparent and fair pricing",
  "Tailored to your needs and style",
  "Attention to detail and quality",
  "Regular updates and clear communication",
  "Pet friendly"
];

const WhyUsTable = () => {
  return (
    <Table>
      <TableHeader>
        <TableRow className="">
          <TableHead></TableHead>
          <TableHead className="w-1/4">
            <Image
              src="/kitts-blue-logo.png"
              alt="logo"
              height={175}
              width={175}
              className="mx-auto hidden pb-3 md:flex"
            ></Image>
            <Image
              src="/kitts-small-blue-logo.png"
              alt="logo"
              height={75}
              width={75}
              className="mx-auto flex md:hidden"
            ></Image>
          </TableHead>
          <TableHead className="w-1/4 text-center">The Other Guy</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {kittsPerks.map((perk, index) => (
          <TableRow key={index}>
            <TableCell className="sm:text-base text-small font-medium">{perk}</TableCell>
            <TableCell className="text-center">
              <FontAwesomeIcon
                icon={faCircleCheck}
                className="text-brand-primary mx-auto w-5 h-5"
              />
            </TableCell>
            <TableCell className="text-center">
              <FontAwesomeIcon
                icon={faMinus}
                className="mx-auto w-3 text-black/50"
              />
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default WhyUsTable;
