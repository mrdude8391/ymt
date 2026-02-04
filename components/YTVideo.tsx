import React from "react";

interface YTVProps {
  title: string;
  src: string;
}

const YTVideo = ({ title, src }: YTVProps) => {
  return (
    <div className="mb-14 max-w-[854px]">
      <h3 className="mb-10 text-gold-100">{title}</h3>
      <div className="w-full max-w-[854px] max-h-[480px] mx-auto aspect-video">
        <iframe
          src={src}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    </div>
  );
};

export default YTVideo;
