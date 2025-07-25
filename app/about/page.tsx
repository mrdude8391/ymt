"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useFadeInRightDelay } from "@/constants/motionVariants";

const about = () => {
  return (
    <AnimatePresence>
      <div className="max-container padding-container flex flex-col gap-16 my-10">
        <motion.h1
          variants={useFadeInRightDelay(0.1)}
          initial="hidden"
          animate="show"
          className="bold-32 text-gold-100"
        >
          About YMT
        </motion.h1>
        <section>
          <motion.div
            variants={useFadeInRightDelay(0.25)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            <h2 className="bold-20 text-gold-100">
              YMT Lion Dance – Introduction & History
            </h2>
            <p className="text-justify regular-18">
              YMT Lion Dance is dedicated to preserving the rich tradition of
              lion dance while embracing creativity and innovation. With a focus
              on precision, athleticism, and storytelling, YMT delivers
              captivating performances that celebrate both culture and sport.
            </p>
          </motion.div>
        </section>

        <section>
          <motion.div
            variants={useFadeInRightDelay(0.5)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            <h2 className="bold-20 text-gold-100">Our History</h2>
            <p className="text-justify regular-18">
              Founded in 2024, YMT Lion Dance is built on a strong foundation of
              over 25 years of combined experience in performance and
              competition. The team was formed with a vision to promote lion
              dance through high-quality performances, structured training, and
              community engagement. In its first year, YMT achieved a
              significant milestone by securing 3rd place at the Canada National
              Lion Dance Competition and continues to strive for excellence in
              both performance and competition.
            </p>
          </motion.div>
        </section>

        <section>
          <motion.div
            variants={useFadeInRightDelay(0.75)}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-5"
          >
            <p className="text-justify regular-18">
              YMT operates with a well-organized approach, ensuring long-term
              growth and development. The team values teamwork, inclusivity,
              innovation, and discipline, creating an environment where members
              can grow and thrive. Through performances, outreach, and continued
              dedication, YMT aims to further the recognition of lion dance in
              North America while staying true to its cultural roots.
            </p>
            <p className="text-justify regular-18">
              Looking ahead, YMT remains committed to honouring tradition,
              evolving its craft, and inspiring future generations to carry the
              art of lion dance forward.
            </p>
          </motion.div>
        </section>
      </div>
    </AnimatePresence>
  );
};

export default about;
