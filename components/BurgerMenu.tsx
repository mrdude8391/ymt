import { NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

interface BurgerMenuProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export const BurgerMenu = ({ isOpen, setIsOpen }: BurgerMenuProps) => {
  return (
    <div className="relative lg:hidden">
      {/* menu button */}
      <button
        className="inline-block cursor-pointer lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? (
          <Image
            src="/x.svg"
            alt="x"
            width={24}
            height={24}
            className="inline-block cursor-pointer"
          ></Image>
        ) : (
          <Image
            src="/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="inline-block cursor-pointer"
          ></Image>
        )}
      </button>

      {/* menu */}
      <div
        className={`fixed bottom-0 left-0 top-16 mt-3 w-full h-full bg-black shadow-md transform ${
          isOpen ? "opacity-100  translate-y-0.5" : "opacity-0 translate-y-full"
        } transition-opacity duration-300 ease-in-out`}
      >
        {isOpen && (
          <nav className="py-4 ">
            <ul className="shadow-lg space-y-4  flexEnd flex-col p-2">
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-24 text-gray-10 hover:font-bold"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </div>
  );
};
