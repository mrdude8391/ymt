"use client";
import YTVideo from "@/components/YTVideo";
import { MEDIA_VIDEOS } from "@/constants";
import { useFadeInRightDelay } from "@/constants/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={useFadeInRightDelay(0.1)}
        initial="hidden"
        animate="show"
        className="max-container padding-container flex flex-col gap-16 my-10"
      >
        <h1 className="bold-32 text-gold-100">Media</h1>
        <section className="flexCenter flex-col gap-10 mb-10">
          <ul className="max-container padding-container flex flex-col gap-16 my-10 ">
            {MEDIA_VIDEOS.map((video) => (
              <YTVideo title={video.title} src={video.src} />
            ))}
          </ul>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
