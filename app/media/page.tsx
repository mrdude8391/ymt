"use client";
import YTVideo from "@/components/YTVideo";
import { MEDIA_VIDEOS, PHOTOS_2026 } from "@/constants";
import { useFadeInRightDelay } from "@/constants/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import Photo from "./components/Photo";

const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={useFadeInRightDelay(0.1)}
        initial="hidden"
        animate="show"
        className="max-container padding-container flex flex-col gap-16 mt-10 mb-32"
      >
        <h1 className="bold-32 text-gold-100">Media</h1>
        <section className="flexCenter flex-col gap-10 mb-10">
          {/* 2026 Photos */}
          <div className="w-full">
            <h2 className="text-gold-100">2026 Photos</h2>
            <ul className="flex flex-wrap gap-4 justify-center">
              {PHOTOS_2026.map((photo) => (
                <li key={photo.src}>
                  <Photo src={photo.src} alt={photo.alt} />
                </li>
              ))}
            </ul>
          </div>
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
