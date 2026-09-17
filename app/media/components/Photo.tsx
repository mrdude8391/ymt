import React from "react";

interface PhotoProps {
  src: string;
  alt?: string;
  key?: string;
}
const Photo = ({ src, alt = "", key = "" }: PhotoProps) => {
  return (
    <div>
      <img src={src} alt={alt} className="h-[50vh] object-cover"></img>
    </div>
  );
};

export default Photo;
