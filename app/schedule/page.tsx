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
          <Schedule />
        </section>
      </motion.div>
    </AnimatePresence>
  );
};

export default page;

const Schedule = () => {
  return (
    <div className="container">
      <h1 className="text-2xl mb-4">
        2026 Lunar New Year Performances Schedule
      </h1>
      <div className="container-inner">
        <ul className="day-list flex flex-col gap-4">
          {SCHEDULE.map((day) => (
            <li
              key={day.date}
              className="day-container py-2 border-t-white border-t"
            >
              <h2 className="mb-8 text-xl">{day.date}</h2>
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
  );
};

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
    <li className="event-container border-t border-t-gray-90 pt-2 pb-4 font-[spartan] grid grid-cols-5">
      <h3 className="text-lg col-span-2">{event.location}</h3>
      <p className="text-sm">
        {date.toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
        })}
      </p>
      <p className="text-sm">{event.time}</p>
      <p className="text-sm">{event.address}</p>
    </li>
  );
};
