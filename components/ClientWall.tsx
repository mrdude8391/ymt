import { CLIENT_CATEGORIES, LOGOS } from "@/constants";
import ClientLogo from "@/components/ClientLogo";

// All past clients, grouped by the kind of event they booked.
const ClientWall = () => {
  return (
    <section id="clients" className="flex flex-col gap-10 scroll-mt-28">
      <div className="flex flex-col gap-3">
        <h2 className="bold-20 text-gold-100">Who We&apos;ve Performed For</h2>
        <p className="regular-18">
          From corporate celebrations to grand openings and school assemblies,
          we&apos;ve brought the lion dance to {LOGOS.length}+ organizations
          across the GTA.
        </p>
      </div>

      {CLIENT_CATEGORIES.map((category) => {
        const logos = LOGOS.filter((logo) => logo.category === category);
        if (logos.length === 0) return null;
        return (
          <div key={category} className="flex flex-col gap-4">
            <h3 className="text-2xl text-white">{category}</h3>
            <ul className="grid grid-cols-2 xs:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {logos.map((logo) => (
                <li key={logo.image}>
                  <ClientLogo logo={logo} className="h-24 w-full" />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </section>
  );
};

export default ClientWall;
