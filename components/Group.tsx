"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { LOGOS } from "@/constants";
import {
  staggerContainer,
  fadeInUp,
  useFadeInUpDelay,
} from "@/constants/motionVariants";

const Group = () => {
  return (
    <section>
      <AnimatePresence>
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="show"
          className=" max-container padding-container flexCenter flex-col gap-10 py-5 pb-24 md:gap-10 lg:py-10"
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
          <motion.div variants={fadeInUp} className="max-w-3xl">
            <h2 className="pb-10 bold-32 text-center text-gold-100">
              YMT Toronto Lion Dance
            </h2>
            <p className="text-justify regular-18">
              YMT Toronto Lion Dance – Yi Mo Tong is a team with a rich legacy
              in the art of lion dance, building on over 25 years of experience.
              For the past decade, we established a blend of athleticism and
              artistry, aimed at spreading cultural awareness and inspiring new
              generations to embrace this ancient tradition. We celebrated a
              major milestone by securing 3rd place at the prestigious 2024
              Canada National Competition. As we look to the future, our sights
              are set on competing internationally and to elevate both the sport
              and the cultural significant of Lion Dance in Canada.
            </p>
          </motion.div>

          {/* Book Button */}
          <motion.div variants={fadeInUp} className="flexCenter mb-10 py-5">
            <Link href="/booking">
              <button className="px-16 pt-4 py-2 regular-32 shadow-md bg-gold-100 text-white rounded-lg hover:bg-gold-120 font-[spartan]">
                Book Now ↗
              </button>
            </Link>
          </motion.div>

          {/* Previous Clients */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col gap-10 mb-10"
          >
            <p className="mb-5 regular-18 text-center text-gold-100">
              Join our satisfied clients
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-3 ">
              {LOGOS.map((link, idx) => (
                <div
                  key={idx}
                  className="relative h-12 w-auto my-5 flex items-center justify-center"
                >
                  <Image
                    width={100}
                    height={100}
                    src={link.image}
                    alt={link.name}
                    onLoadingComplete={(img) => {
                      const imageRatio = img.naturalWidth / img.naturalHeight;
                      img.style.width = `${Math.pow(imageRatio, 0.525) * 60}px`;
                    }}
                  ></Image>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Group Photo */}
          <motion.div
            variants={useFadeInUpDelay(0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-75px" }}
          >
            <img src="/group.jpg" alt="group photo"></img>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Group;
