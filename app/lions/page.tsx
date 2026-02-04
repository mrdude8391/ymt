"use client";
import React from "react";
import { HEADSHOTS, HEADSHOTS_LED } from "@/constants";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useFadeInRightDelay } from "@/constants/motionVariants";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

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
                  {HEADSHOTS.map((lion) => (
                    <LionPic key={lion.name} lion={lion} />
                  ))}
                </ul>
              </div>
            </div>
            <hr className=" shadow " />
            <div className="flexCenter flex-col">
              <h2 className="bold-32">LED Lions</h2>
              <div className="flex flex-col flex-initial justify-center">
                <ul className="flex justify-evenly flex-col flex-wrap lg:grid-cols-1 gap-16 my-10">
                  {HEADSHOTS_LED.map((lion) => (
                    <LionPic key={lion.name} lion={lion} />
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

const LionPic = (props: {
  lion: {
    name: string;
    colors: string;
    image: string;
  };
}) => {
  const { lion } = props;
  return (
    <div className="flex flex-col">
      <img
        src={lion.image}
        alt={`lion picture ${lion.name} ${lion.colors}`}
        width={400}
        height={"auto"}
      />
      <div className="font-[spartan]  p-4">
        <p className="text-start absolute justify-start">{lion.name}.</p>
        <p className="text-center">{lion.colors}</p>
      </div>
    </div>
  );
};
