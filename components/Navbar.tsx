"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav>
        <div className="flexBetween max-container padding-container relative z-30 py-5 ">
          <Link href="/">
            <Image src="/ymt-logo.png" alt="logo" width={74} height={74} />
          </Link>
          <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>

          <Image
            src="/menu.svg"
            alt="menu"
            width={32}
            height={32}
            className="inline-block cursor-pointer lg:hidden"
            onClick={() => setOpen(!open)}
          ></Image>
        </div>

        <div hidden={!open}>
          <ul className="shadow-lg bg-gray-200 flexEnd flex-col px-2">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-32 text-gray-50 hover:font-bold"
              >
                {link.label}
              </Link>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
