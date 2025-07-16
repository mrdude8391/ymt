import Link from "next/link";

const Group = () => {
  return (
    <section className=" max-container padding-container flexCenter flex-col gap-10 py-5 pb-24 md:gap-16 lg:py-20">
      <img src="/group.jpg" alt="group photo"></img>
      <div className="flexCenter py-5">
        <button className="px-16 py-2 regular-32 shadow-md bg-gold-100 text-white rounded-lg hover:bg-gold-120">
          <Link href="/booking">Book Now</Link>
        </button>
      </div>
      <h2 className="lg:px-40 bold-32 text-gold-100">YMT Toronto Lion Dance</h2>
      <div className="text-justify lg:px-40 regular-18">
        YMT Toronto Lion Dance – Yi Mo Tong is a team with a rich legacy in the
        art of lion dance, building on over 25 years of experience. For the past
        decade, we established a blend of athleticism and artistry, aimed at
        spreading cultural awareness and inspiring new generations to embrace
        this ancient tradition. We celebrated a major milestone by securing 3rd
        place at the prestigious 2024 Canada National Competition. As we look to
        the future, our sights are set on competing internationally and to
        elevate both the sport and the cultural significant of Lion Dance in
        Canada.
      </div>
    </section>
  );
};

export default Group;
