import { MEDIA_VIDEOS } from "@/constants";
import React from "react";

const page = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-16 my-10">
      <h1 className="bold-32 text-gold-100">Media</h1>
      <section className="flexCenter flex-col gap-10 mb-10">
        <ul className="flexCenter flex-col gap-20">
          {MEDIA_VIDEOS.map((video) => (
            <video width={512} height={768} muted controls preload="auto">
              <source src={video.src} type={video.type} />
              Your browser does not support the video tag.
            </video>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default page;
