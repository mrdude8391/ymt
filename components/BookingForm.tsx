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
        {/* Name */}
        <div>
          <label className="block font-semibold">
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name "
            required
            className="text-black w-full border p-2 rounded"
          />
        </div>

        {/* Email */}
        <div>
          <label className="block font-semibold">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="text-black w-full border p-2 rounded"
          />
        </div>

        {/* Phone */}
        <div>
          <label className="block font-semibold">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            inputMode="numeric"
            pattern="[0-9]{10,15}" // Allows 10 to 15 digits
            maxLength={15}
            placeholder="Phone"
            required
            className="text-black w-full border p-2 rounded"
          />
        </div>

        {/* Event Type */}
        <div>
          <label className="block font-semibold">
            Event Type <span className="text-red-500">*</span>
          </label>
          <select
            name="type"
            required
            className="text-black w-full border p-2 rounded"
          >
            <option value="">Select an event type</option>
            <option value="Wedding">Wedding</option>
            <option value="Corporate Celebration">Corporate Celebration</option>
            <option value="Birthday Party">Birthday Party</option>
            <option value="Cultural Festival">Cultural Festival</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Number of Lions */}
        <div>
          <label className="block font-semibold">
            Number of Lions <span className="text-red-500">*</span>
          </label>
          <select
            name="lions"
            required
            className="text-black w-full border p-2 rounded"
          >
            <option value="">Select a number</option>
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        {/* Date */}
        <div>
          <label className="block font-semibold">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            required
            className="text-black w-full border p-2 rounded"
          />
        </div>

        {/* Details (optional) */}
        <div>
          <label className="block font-semibold">
            Additional Details (optional)
          </label>
          <textarea
            name="message"
            className="text-black w-full border p-2 rounded"
            rows={4}
          />
        </div>

        <button
          className="px-16 py-2 regular-24 shadow-md bg-gold-100 text-white rounded-md hover:bg-gold-120"
          type="submit"
          value="Send"
        >
          Submit Booking
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
