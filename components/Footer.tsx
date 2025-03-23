import { MEDIA_ICONS, NAV_LINKS } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="flexCenter mb-16">
        <div className="max-container padding-container flex w-full  flex-col gap-5">
          <hr className=" shadow " />
          <div className="flex items-center flex-row  z-30 gap-5 ">
            <div className="flex flex-grow">
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

            <ul className="flex flex-row gap-2 flexCenter ">
              {MEDIA_ICONS.map((media) => (
                <div>
                  <Image
                    src={media.icon}
                    alt={media.site}
                    width={28}
                    height={28}
                  ></Image>
                </div>
              ))}
            </ul>
          </div>
          <div className="hidden lg:flex flex-row flexStart pl-2 ">
            <ul className="h-full gap-10 flex flex-row ">
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
        </div>
      </footer>
    </>
  );
};

export default Footer;
