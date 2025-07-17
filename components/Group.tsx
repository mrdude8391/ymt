import Image from "next/image";
import Link from "next/link";

const Group = () => {
  return (
    <section>
      <div className=" max-container padding-container flexCenter flex-col gap-10 py-5 pb-24 md:gap-10 lg:py-10">
        {/* Logo */}
        <Image
          width={200}
          height={200}
          src="/ymt-logo.png"
          alt="YMT Logo"
        ></Image>

        {/* Intro Message */}
        <div className="max-w-3xl">
          <h2 className="pb-10 bold-32 text-center text-gold-100">
            YMT Toronto Lion Dance
          </h2>
          <p className="text-justify regular-18">
            YMT Toronto Lion Dance – Yi Mo Tong is a team with a rich legacy in
            the art of lion dance, building on over 25 years of experience. For
            the past decade, we established a blend of athleticism and artistry,
            aimed at spreading cultural awareness and inspiring new generations
            to embrace this ancient tradition. We celebrated a major milestone
            by securing 3rd place at the prestigious 2024 Canada National
            Competition. As we look to the future, our sights are set on
            competing internationally and to elevate both the sport and the
            cultural significant of Lion Dance in Canada.
          </p>
        </div>

        {/* Book Button */}
        <div className="flexCenter mb-20 py-5">
          <Link href="/booking">
            <button className="px-16 py-2 regular-32 shadow-md bg-gold-100 text-white rounded-lg hover:bg-gold-120">
              Book Now ↗
            </button>
          </Link>
        </div>
        {/* Group Photo */}
        <img src="/group.jpg" alt="group photo"></img>
      </div>
    </section>
  );
};

export default Group;
