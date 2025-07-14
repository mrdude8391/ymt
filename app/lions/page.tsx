import React from "react";
import { LIONS, LEDLIONS } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-16 my-10">
      <h1 className="bold-32 text-gold-100">Meet the Lions</h1>
      <section className="mb-10">
        <div>
          <h2 className="bold-20">Main Lions</h2>
          <ul>
            {LIONS.map((lion) => (
              <div>
                <Image
                  src={lion.image}
                  alt="lion picture"
                  width={100}
                  height={100}
                />
                <span>{lion.name}. </span>
                <span>{lion.colors}</span>
              </div>
            ))}
          </ul>
          <h2 className="bold-20">LED Lions</h2>
          <ul>
            {LEDLIONS.map((lion) => (
              <div>
                <Image
                  src={lion.image}
                  alt="lion picture"
                  width={100}
                  height={100}
                />
                <span>{lion.name}. </span>
                <span>{lion.colors}</span>
              </div>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default page;
