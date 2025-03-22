"use client";
import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BurgerMenu } from "./BurgerMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav className="sticky w-full top-0 left-0 z-30">
        <div className="flexBetween relative max-container padding-container z-30 py-3 bg-white">
          <Link href="/" onClick={closeMenu}>
            <div className="flexCenter gap-5">
              <Image src="/ymt-logo.png" alt="logo" width={54} height={54} />
              <p className="regular-16 text-gray-50 flexCenter transition-all hover:font-bold">
                YMT Lion Dance
              </p>
            </div>
          </Link>

          <ul className="hidden h-full gap-12 lg:flex">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-50 flexCenter  transition-all hover:font-bold"
                onClick={closeMenu}
              >
                {link.label}
              </Link>
            ))}
          </ul>
          <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
