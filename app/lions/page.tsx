import React from "react";
import { LIONS, LEDLIONS } from "@/constants";
import Image from "next/image";

const page = () => {
  return (
    <div className="max-container padding-container flex flex-col gap-16 my-10">
      <h1 className="bold-32 text-gold-100">Meet the Lions</h1>
      <section className="mb-10">
        <div className="flex flex-col gap-16 my-10">
          <div className="flexCenter flex-col">
            <h2 className="bold-32">Main Lions</h2>
            <div className="flex flex-col flex-initial justify-center">
              <ul className="flex justify-evenly flex-col flex-wrap lg:flex-row gap-16 my-10">
                {LIONS.map((lion) => (
                  <div>
                    <Image
                      src={lion.image}
                      alt="lion picture"
                      width={700}
                      height={400}
                    />
                    <span>{lion.name}. </span>
                    <span>{lion.colors}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <hr className=" shadow " />
          <div className="flexCenter flex-col">
            <h2 className="bold-32">LED Lions</h2>
            <div className="flex flex-col flex-initial justify-center">
              <ul className="flex justify-evenly flex-col flex-wrap lg:flex-row gap-16 my-10">
                {LEDLIONS.map((lion) => (
                  <div>
                    <Image
                      src={lion.image}
                      alt="lion picture"
                      width={700}
                      height={400}
                    />
                    <span>{lion.name}. </span>
                    <span>{lion.colors}</span>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
