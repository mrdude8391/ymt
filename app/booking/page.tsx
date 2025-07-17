import BookingForm from "@/components/BookingForm";
import React from "react";

const page = () => {
  return (
    <div className="max-container padding-container flex flex-col my-10">
      <h1 className="bold-32 text-gold-100">Booking</h1>
      <section>
        <div className="max-container padding-container flexCenter  flex-col gap-16 my-10">
          <BookingForm />
        </div>
      </section>
    </div>
  );
};

export default page;
