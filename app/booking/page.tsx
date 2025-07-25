"use client";
import BookingForm from "@/components/BookingForm";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useFadeInRightDelay } from "@/constants/motionVariants";

const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={useFadeInRightDelay(0.1)}
        initial="hidden"
        animate="show"
        className="max-container padding-container flex flex-col my-10"
      >
        <h1 className="bold-32 text-gold-100">Booking</h1>
        <section>
          <div className="max-container padding-container flexCenter  flex-col gap-16 my-10">
            <BookingForm />
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
