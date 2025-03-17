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
      <nav className="sticky w-full top-0 left-0 z-30">
        <div className="flexBetween relative max-container padding-container z-30 py-3 bg-white">
          <Link href="/">
            <div className="flexCenter gap-5">
              <Image src="/ymt-logo.png" alt="logo" width={54} height={54} />
              <p className="">YMT Lion Dance</p>
            </div>
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
            width={24}
            height={24}
            className="inline-block cursor-pointer lg:hidden"
            onClick={() => setOpen(!open)}
          ></Image>
        </div>

        {open && (
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
        )}
      </nav>
    </>
  );
};

export default Navbar;
