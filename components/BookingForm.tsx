"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { EMAILJS } from "@/constants";

const BookingForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(EMAILJS.SERVICE_ID, EMAILJS.TEMPLATE_ID, form.current, {
        publicKey: EMAILJS.KEY,
      })
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent!");
          form.current?.reset();
        },
        (error) => {
          console.log("FAILED...", error.text);
          console.log(form.current);
          alert("Failed to send message. Try again later.");
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="flex flex-col gap-4">
        <label>Name</label>
        <input
          className="text-black"
          type="text"
          name="name"
          placeholder="Name"
        />
        <label>Email</label>
        <input
          className="text-black"
          type="email"
          name="email"
          placeholder="Email"
        />
        <label>Phone Number</label>
        <input
          className="text-black"
          type="tel"
          name="phone"
          placeholder="Phone"
        />
        <label>Event Type</label>
        <input
          className="text-black"
          type="text"
          name="type"
          placeholder="Event Type"
        />
        <label>Number of Lions</label>
        <input
          className="text-black"
          type="number"
          name="lions"
          placeholder="Number of lions"
        />
        <label>Details (Optional)</label>
        <textarea
          className="text-black"
          name="message"
          placeholder="Details (Optional)"
        />
        <input type="submit" value="Send" />
      </div>
    </form>
  );
};

export default BookingForm;
