import { MEDIA_VIDEOS } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-16 my-10">
      <h1 className="bold-32 text-gold-100">Media</h1>
      <section className="flexCenter flex-col gap-10 mb-10">
        <h2 className="bold-20">
          Heart of The Lion - YMT Lion Dance Documentary, Toronto
        </h2>
        <div className="w-full max-w-[854px] max-h-[480px] mx-auto aspect-video">
          <iframe
            src="https://www.youtube.com/embed/KaubRCbi7Bc?si=VCsVydF_4hL6SFlm"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="w-full h-full"
          />
        </div>
      </section>
    </div>
  );
};

export default page;
