"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const BookingForm = () => {
  const form = useRef<HTMLFormElement>(null);

  const serviceId = process.env.NEXT_PUBLIC_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_KEY;

  if (!serviceId) {
    throw new Error("Missing EmailJS Service ID environment variables.");
  }
  if (!templateId) {
    throw new Error("Missing EmailJS template ID environment variables.");
  }
  if (!publicKey) {
    throw new Error("Missing EmailJS key environment variables.");
  }

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
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
    <div className="flex flex-col w-full max-w-2xl ">
      <form ref={form} onSubmit={sendEmail}>
        <div className="flex gap-4 flex-col">
          {/* Name */}
          <div>
            <label className="form-label">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Name "
              required
              className="form-input"
            />
          </div>

          {/* Email */}
          <div>
            <label className="form-label">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              required
              className="form-input"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="form-label">
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
              className="form-input"
            />
          </div>

          {/* Event Type */}
          <div>
            <label className="form-label">
              Event Type <span className="text-red-500">*</span>
            </label>
            <select name="type" required className="form-input">
              <option value="">Select an event type</option>
              <option value="Wedding">Wedding</option>
              <option value="Corporate Celebration">
                Corporate Celebration
              </option>
              <option value="Birthday Party">Birthday Party</option>
              <option value="Cultural Festival">Cultural Festival</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/* Number of Lions */}
          <div>
            <label className="form-label">
              Number of Lions <span className="text-red-500">*</span>
            </label>
            <select name="lions" required className="form-input">
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
            <label className="form-label">
              Date <span className="text-red-500">*</span>
            </label>
            <input type="date" name="date" required className="form-input" />
          </div>

          {/* Details (optional) */}
          <div>
            <label className="form-label">Additional Details (optional)</label>
            <textarea
              name="message"
              className="text-black w-full border p-3 rounded-xl"
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
    </div>
  );
};

export default BookingForm;
