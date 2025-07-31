import { MEDIA_ICONS, NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flexCenter mb-8">
        <div className="max-container padding-container flex w-full  flex-col gap-8">
          {/* Line break */}
          <hr className=" shadow " />
          <div className="flex justify-between items-center flex-row  z-10 gap-5 ">
            {/* YMT logo link to home*/}
            <div className="flex">
              <Link href="/">
                <div className="flexCenter gap-2">
                  <Image
                    src="/ymt-logo.png"
                    alt="logo"
                    width={29}
                    height={29}
                  />
                  <p className="regular-14 text-gray-50 transition-all hover:font-bold">
                    YMT Lion Dance
                  </p>
                </div>
              </Link>
            </div>
            {/* Media Icons */}
            <ul className="flex flex-row gap-2 flexCenter ">
              {MEDIA_ICONS.map((media) => (
                <div className="bg-gray-50 p-[0.8px] rounded-lg">
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
          {/* Navigation Links */}
          <div className="flex flexStart p ">
            <ul
              className="h-full gap-3
             flex flex-col lg:flex-row "
            >
              {NAV_LINKS.map((link) => (
                <Link
                  href={link.href}
                  key={link.key}
                  className="regular-16 text-gray-50 flex transition-all hover:font-bold"
                >
                  {link.label}
                </Link>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-2 text-gray-50">
            <p className="font-bold bold-18">Contact Us</p>
            <div className="flex flex-col gap-2 lg:gap-5 lg:flex-row ">
              <p>+1 (416) 230-3443</p>
              <p className="hidden lg:inline">|</p>
              <p>ymtliondance@outlook.com</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
