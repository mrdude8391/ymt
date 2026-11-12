import Image from "next/image";
import type { ClientLogo as ClientLogoType } from "@/constants";

type Props = {
  logo: ClientLogoType;
  className?: string;
  // "eager" for logos that move into view by CSS transform (the marquee):
  // native lazy loading only re-checks visibility on scroll/layout, so
  // lazy images there stay blank until something like a mouse move.
  loading?: "lazy" | "eager";
};

// A white tile keeps dark logos readable on the site's black background
// and evens out logos that arrive with their own white backgrounds.
const ClientLogo = ({ logo, className = "", loading = "lazy" }: Props) => (
  <div
    className={`relative flex items-center justify-center bg-white rounded-lg p-0 ${className}`}
    title={logo.name}
  >
    <div className="relative w-full h-full">
      <Image
        src={logo.image}
        alt={logo.name}
        fill
        sizes="160px"
        loading={loading}
        className="object-contain rounded-none"
      />
    </div>
  </div>
);

export default ClientLogo;
