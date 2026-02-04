"use client";
import { useFadeInRightDelay } from "@/constants/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { SCHEDULE } from "@/constants/schedule";

const page = () => {
  return (
    <AnimatePresence>
      <motion.div
        variants={useFadeInRightDelay(0.1)}
        initial="hidden"
        animate="show"
        className="max-container padding-container flex flex-col gap-16 my-10"
      >
        <h1 className="bold-32 text-gold-100">Schedule</h1>
        <section className="flexCenter flex-col gap-10 mb-10">
          <div className="container">
            <h3 className="mb-4">2026 Lunar New Year Performances Schedule</h3>
            <div className="container-inner">
              <ul className="day-list flex flex-col gap-4">
                {SCHEDULE.map((day) => (
                  <li
                    key={day.date}
                    className="day-container py-2 border-t-white border-t"
                  >
                    <h4 className="mb-8">{day.date}</h4>
                    <ul className="events-list">
                      {day.events.map((event) => (
                        <Event key={event.time} event={event} />
                      ))}
                    </ul>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;

interface Event {
  date: string;
  time: string;
  location: string;
  address: string;
}

const Event = (props: { event: Event }) => {
  const { event } = props;
  const date = new Date(event.date);

  return (
    <>
      {/* Desktop Screens > lg size */}
      <li className="hidden lg:grid grid-cols-2 lg:grid-cols-5 event-container border-t border-t-gray-90 pt-2 pb-4 font-[spartan] ">
        <p className="text-2xl col-span-2">{event.location}</p>
        <p className="text-lg font-light">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="text-lg font-light">{event.time}</p>
        <p className="text-lg">{event.address}</p>
      </li>

      {/* Mobile Screens < lg size */}
      <li className="grid grid-cols-3 lg:hidden event-container border-t border-t-gray-90 pt-2 pb-4 font-[spartan] ">
        <div className="col-span-2">
          <h4 className="font-semibold">{event.location}</h4>
          <p className="text-lg">{event.address}</p>
        </div>
        <div>
          <p className="text-md text-end">
            {date.toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
            })}
          </p>
          <p className="text-md text-end">{event.time}</p>
        </div>
      </li>
    </>
  );
};
