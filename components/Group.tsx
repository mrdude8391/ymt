"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, delay } from "framer-motion";
import { LOGOS } from "@/constants";

const Group = () => {
  return (
    <section>
      <div className=" max-container padding-container flexCenter flex-col gap-10 py-5 pb-24 md:gap-10 lg:py-10">
        <AnimatePresence>
          <motion.div
            animate={{
              y: 0,
              opacity: 1,
              transition: { delay: 0.5 },
            }}
            transition={{ duration: 1 }}
            initial={{ y: 20, opacity: 0 }}
          >
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
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.75 }}
            initial={{ y: 20, opacity: 0 }}
            className="max-w-3xl"
          >
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
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            initial={{ y: 20, opacity: 0 }}
            className="flexCenter mb-10 py-5"
          >
            <Link href="/booking">
              <button className="px-16 py-2 regular-32 shadow-md bg-gold-100 text-white rounded-lg hover:bg-gold-120">
                Book Now ↗
              </button>
            </Link>
          </motion.div>

          {/* Previous Clients */}
          <motion.div
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.25 }}
            initial={{ y: 20, opacity: 0 }}
            className="flex flex-col gap-10 mb-10"
          >
            <p className="mb-5 regular-18 text-center text-gold-100">
              Join our satisfied clients
            </p>
            <div className="grid grid-cols-3 lg:grid-cols-6 gap-12">
              {LOGOS.map((link, idx) => (
                <div
                  key={idx}
                  className="relative h-12 w-auto flex items-center "
                >
                  <Image
                    width={100}
                    height={100}
                    src={link.image}
                    alt={link.name}
                  ></Image>
                </div>
              ))}
            </div>
          </motion.div>
          {/* Group Photo */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0, transition: { delay: 0.2 } }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <img src="/group.jpg" alt="group photo"></img>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Group;
