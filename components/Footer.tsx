import { MEDIA_ICONS, NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-gray-90 text-gray-20 flexCenter py-8">
        <div className="max-container padding-container flex w-full flex-col gap-10">
          {/* Line break 
          <hr className="shadow" />
          
          */}

          {/* Footer Elements */}
          <div className="flex flex-col lg:flex-row w-full justify-between gap-8">
            {/* YMT logo link to home*/}
            <div className="flex flex-col items-start gap-2">
              <Link href="/">
                <div className="flex flex-row items-center gap-2">
                  <Image
                    src="/ymt-logo.png"
                    alt="logo"
                    width={50}
                    height={50}
                  />
                  <h3 className="text-gray-10 transition-all hover:font-bold">
                    YMT Lion Dance
                  </h3>
                </div>
              </Link>
              <p className="text-sm font-light">
                © 2025 YMT Lion Dance. All rights reserved.
              </p>
            </div>

            {/* Navigation Menu */}
            <div className="regular-16 flex flex-col gap-2">
              <p className="font-bold text-2xl text-gray-10 mb-1">Menu</p>
              <ul className="h-full gap-3 flex flex-col ">
                {NAV_LINKS.map((link) => (
                  <Link
                    href={link.href}
                    key={link.key}
                    className="text-lg flex transition-all hover:font-bold"
                  >
                    {link.label}
                  </Link>
                ))}
              </ul>
            </div>

            {/* Media Icons */}
            <div className="flex flex-col gap-2 regular-16 ">
              <p className="text-2xl font-bold text-gray-10 mb-1">Follow Us</p>
              <ul className="flex flex-row gap-2 ">
                {MEDIA_ICONS.map((media) => (
                  <div className="bg-gray-10 p-[1px] rounded-lg">
                    <Link href={media.link}>
                      <Image
                        src={media.icon}
                        alt={media.name}
                        width={28}
                        height={28}
                      ></Image>
                    </Link>
                  </div>
                ))}
              </ul>
            </div>

            {/* Contact Information */}
            <div className="flex flex-col gap-2">
              <p className="text-2xl font-bold text-gray-10 mb-1">Contact</p>
              <div className="flex flex-col gap-2">
                <p className="text-lg">📞 +1 (416) 230-3443</p>
                <p className="text-lg">📧 ymtliondance@outlook.com</p>
              </div>
            </div>
          </div>
          <hr className="opacity-20" />
          <div className="self-ad w-full flex items-center justify-center ">
            <p>
              Website designed and built by{" "}
              <span>
                <a
                  href="https://jrcheehu.vercel.app/"
                  target="_blank"
                  className="underline"
                >
                  Jr-Chee Hu
                </a>
              </span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
