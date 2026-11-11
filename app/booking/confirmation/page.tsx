"use client";
import React from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useFadeInRightDelay } from "@/constants/motionVariants";

const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={useFadeInRightDelay(0.1)}
        initial="hidden"
        animate="show"
        className="max-container padding-container flex flex-col my-12"
      >
        <h1 className="bold-32 text-gold-100">Booking Request Sent</h1>
        <section className="flex flex-col gap-5 my-12 max-w-2xl">
          <p className="regular-18">
            Thank you! Your booking request has been sent successfully. A YMT
            member will follow up with you as soon as possible.
          </p>
          <p className="regular-18">
            Please keep an eye on your inbox for our reply, and be sure to check
            your junk or spam folder in case it ends up there.
          </p>
          <p className="regular-18">
            We typically respond within <strong>48 hours</strong>.
          </p>
          <div>
            <Link
              href="/"
              className="inline-block mt-4 px-10 py-2 text-xl shadow-md bg-gold-100 text-white rounded-md hover:bg-gold-120"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;
