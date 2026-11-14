import Link from "next/link";
import { LOGOS } from "@/constants";
import ClientLogo from "@/components/ClientLogo";

// Infinite sideways scroll of every client logo. The list is rendered twice
// and the track slides by -50%, so the loop is seamless. Hovering pauses it;
// with reduced motion the track stops and wraps into a static grid.
const LogoMarquee = () => {
  return (
    <div className="flex flex-col gap-6 w-full">
      <p className="font-semibold text-center text-gold-100">
        Join our satisfied clients!
      </p>

      <div className="group relative w-full overflow-hidden marquee-fade">
        <ul className="flex w-max gap-4 animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center">
          {[...LOGOS, ...LOGOS].map((logo, idx) => {
            const isDuplicate = idx >= LOGOS.length;
            return (
              <li
                key={`${logo.image}-${idx}`}
                aria-hidden={isDuplicate || undefined}
                className={isDuplicate ? "motion-reduce:hidden" : undefined}
              >
                <ClientLogo logo={logo} className="h-16 w-32" loading="eager" />
              </li>
            );
          })}
        </ul>
      </div>

      <Link
        href="/about#clients"
        className="self-center text-gold-100 hover:text-gold-120 underline underline-offset-4"
      >
        See all our clients →
      </Link>
    </div>
  );
};

export default LogoMarquee;
