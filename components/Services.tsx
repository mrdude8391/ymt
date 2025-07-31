"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useFadeInUpDelay } from "@/constants/motionVariants";

const Services = () => {
  return (
    <section className=" max-container padding-container mb-10">
      <AnimatePresence>
        <motion.div className="flexCenter flex-col gap-10 py-5 px-5">
          <motion.h1
            variants={useFadeInUpDelay(0.25)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="bold-52 text-gold-100"
          >
            Our Services
          </motion.h1>
          {/* Title - Image Card - Caption */}
          <div className="flex flex-col lg:flex-row">
            <motion.div
              variants={useFadeInUpDelay(0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-75px" }}
              className="flex flex-col justify-between gap-10 py-5 px-5"
            >
              <h2 className="text-center regular-32 text-gold-100 ">
                Weddings
              </h2>
              <div className="flexCenter flex-col gap-5">
                <img
                  src="/wedding.jpeg"
                  alt="wedding"
                  className="h-96 w-96 object-cover"
                ></img>
                <p className="text-center p-5 md:regular-24 ">
                  Make your special day unforgettable!
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={useFadeInUpDelay(0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-75px" }}
              className="flex flex-col justify-between gap-10 py-5 px-5"
            >
              <h2 className="text-center regular-32 text-gold-100">
                Special Celebrations
              </h2>
              <div className="flexCenter flex-col gap-5">
                <img
                  src="/celebrations.jpg"
                  alt="special"
                  className="h-96 w-96 object-cover"
                ></img>
                <p className="text-center p-5 md:regular-24">
                  Add excitement to your party!
                </p>
              </div>
            </motion.div>
            <motion.div
              variants={useFadeInUpDelay(0.25)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-75px" }}
              className="flex flex-col justify-between gap-10 py-5 px-5"
            >
              <h2 className="text-center regular-32 text-gold-100">
                Corporate Events
              </h2>
              <div className="flexCenter flex-col gap-5">
                <img
                  src="/corporate.jpeg"
                  alt="corporate events"
                  className="h-96 w-96 object-cover"
                ></img>
                <p className="text-center p-5 md:regular-24">
                  Impress clients and boost morale!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default Services;
