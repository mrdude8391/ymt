"use client";
import { useFadeInRightDelay } from "@/constants/motionVariants";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { ScheduleDay, SCHEDULE } from "@/constants/schedule";
import OpenInMapsButton from "@/components/OpenInMapsButton";

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
            <h2 className="mb-8">2026 Lunar New Year Performances Schedule</h2>
            <div className="container-inner">
              <ul className="day-list flex flex-col gap-4">
                {SCHEDULE.map((day: ScheduleDay) => (
                  <li
                    key={day.date.toLocaleDateString("en-US", {
                      month: "numeric",
                      day: "numeric",
                    })}
                    className="day-container py-2"
                  >
                    <div className="flex w-full">
                      {/* Desktop View */}
                      <h3 className="hidden lg:block mb-8">
                        {day.date.toLocaleDateString("en-US", {
                          month: "long",
                          day: "numeric",
                          weekday: "long",
                        })}
                      </h3>
                      {/* Mobile View */}
                      <h3 className="lg:hidden mb-8">
                        {day.date.toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                          weekday: "long",
                        })}
                      </h3>
                      <hr className="flex-grow m-3.5  bg-white"></hr>
                    </div>
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

interface EventProps {
  date: Date;
  time: string;
  location: string;
  address: string;
}

const Event = (props: { event: EventProps }) => {
  const { event } = props;
  const date = new Date(event.date);

  return (
    <>
      {/* Desktop Screens > lg size */}
      <li className="hidden lg:grid grid-cols-2 lg:grid-cols-5 event-container border-t border-t-white/10 pt-2 pb-4 font-[spartan] ">
        <p className="text-2xl col-span-2">{event.location}</p>
        <p className="text-lg font-light">
          {date.toLocaleDateString("en-US", {
            month: "short",
            day: "numeric",
          })}
        </p>
        <p className="text-lg font-light">{event.time}</p>
        <OpenInMapsButton address={event.address}></OpenInMapsButton>
        {/* <p className="text-lg">{event.address}</p> */}
      </li>

      {/* Mobile Screens < lg size */}
      <li className="grid grid-cols-3 lg:hidden event-container border-t border-t-gray-90 pt-2 pb-4 font-[spartan] ">
        <div className="col-span-2">
          <h4 className="font-semibold">{event.location}</h4>
          <OpenInMapsButton address={event.address}></OpenInMapsButton>
          {/* <p className="text-lg">{event.address}</p> */}
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
