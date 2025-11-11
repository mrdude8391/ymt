"use client";
import React from "react";
import { LIONS, LEDLIONS } from "@/constants";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useFadeInRightDelay } from "@/constants/motionVariants";

const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={useFadeInRightDelay(0.1)}
        initial="hidden"
        animate="show"
        className="max-container padding-container flex flex-col gap-16 my-10"
      >
        <h1 className="bold-32 text-gold-100">Meet the Lions</h1>
        <section className="mb-10">
          <div className="flex flex-col gap-16 my-10">
            <div className="flexCenter flex-col">
              <h2 className="bold-32">Main Lions</h2>
              <div className="flex flex-col flex-initial justify-center">
                <ul className="flex justify-evenly flex-col flex-wrap lg:grid-cols-1 gap-16 my-10">
                  {LIONS.map((lion) => (
                    <div>
                      <Image
                        src={lion.image}
                        alt="lion picture"
                        width={400}
                        height={400}
                      />
                      <span>{lion.name}. </span>
                      <span>{lion.colors}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
            <hr className=" shadow " />
            <div className="flexCenter flex-col">
              <h2 className="bold-32">LED Lions</h2>
              <div className="flex flex-col flex-initial justify-center">
                <ul className="flex justify-evenly flex-col flex-wrap lg:grid-cols-1 gap-16 my-10">
                  {LEDLIONS.map((lion) => (
                    <div>
                      <Image
                        src={lion.image}
                        alt="lion picture"
                        width={400}
                        height={400}
                      />
                      <span>{lion.name}. </span>
                      <span>{lion.colors}</span>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
