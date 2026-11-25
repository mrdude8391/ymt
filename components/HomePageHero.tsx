"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import LogoMarquee from "@/components/LogoMarquee";
import {
  staggerContainer,
  fadeInUp,
  useFadeInUpDelay,
} from "@/constants/motionVariants";

const HomePageHero = () => {
  const groupPhotoLink = "/Sep_2026/GrandOpening-GroupPhoto.JPG";

  return (
    <section>
      <AnimatePresence>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className=" max-container padding-container flexCenter flex-col gap-8 py-4 pb-24 md:gap-8 lg:py-12"
        >
          <motion.div variants={fadeInUp}>
            {/* Logo */}
            <Image
              width={200}
              height={200}
              src="/ymt-logo.png"
              alt="YMT Logo"
            ></Image>
          </motion.div>

          {/* Intro Message */}
          <motion.div
            variants={fadeInUp}
            className="max-w-3xl flex flex-col items-center"
          >
            {/* 2026 Schedule */}
            {/* <Link href="/schedule">
              <button className="px-8 py-2 text-2xl mb-8 shadow-md rounded-lg text-white bg-gold-100 hover:bg-gold-120 ">
                2026 Lunar New Year Performance Schedule
              </button>
            </Link> */}
            <h2 className="pb-8  text-center text-gold-100">
              YMT Toronto Lion Dance
            </h2>

            <p className="text-justify ">
              Yi Mo Tong (YMT) Lion Dance brings together over 25 years of
              combined experience, blending Chinese tradition with athleticism
              and artistry. In 2026, we secured 2nd place at the Canadian
              National Lion Dance Championship and in 2024 secured 3rd. We are
              passionate about elevating lion dance as both a competitive sport
              and a vital part of Canada's multicultural heritage. From grand
              openings and corporate events to weddings and cultural
              celebrations, YMT brings energy, tradition, and good fortune to
              every occasion. 
              <br/>Competitions:
              <br/>2024 - 3rd Place Canada National Competition
              <br/>2026 - 2nd Place Canada National Competition
              <br/>2026 - 4th Place Can-American International Championship
              <br/>2026 - 6th Place Pan-American International Competition
            </p>
          </motion.div>

          {/* Book Button */}
          <motion.div variants={fadeInUp} className="flexCenter mb-8 py-4">
            <Link href="/booking">
              <button className="px-16 pt-4 py-2 text-4xl shadow-md bg-gold-100 text-white rounded-lg hover:bg-gold-120 font-[spartan]">
                Book Now ↗
              </button>
            </Link>
          </motion.div>

          {/* Previous Clients */}
          <motion.div variants={fadeInUp} className="w-full mb-8">
            <LogoMarquee />
          </motion.div>

          {/* Group Photo */}
          <motion.div
            variants={useFadeInUpDelay(0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-75px" }}
          >
            <img src={groupPhotoLink} alt="group photo"></img>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default HomePageHero;
