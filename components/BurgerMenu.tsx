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
    <div className=" lg:hidden">
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
        className={`absolute top-[100%] left-0 right-0 h-0 overflow-hidden bg-black  transition-all duration-300 ease
          ${isOpen ? "h-lvh max-h-lvh" : ""}`}
      >
        {isOpen && (
          <nav className="py-4 h-full ">
            <ul className="shadow-lg space-y-4 font-[spartan] flexEnd flex-col p-2">
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
