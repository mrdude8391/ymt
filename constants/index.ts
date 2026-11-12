export const NAV_LINKS = [
  { href: "/", key: "home", label: "Home" },
  { href: "/booking", key: "booking ", label: "Booking " },
  { href: "/about", key: "about_us", label: "About Us" },
  { href: "/lions", key: "lions", label: "Meet the Lions" },
  { href: "/media", key: "media", label: "Media" },
  {
    href: "https://forms.gle/XpGNWQ5CCeqXA3ci9",
    key: "join",
    label: "Join Us",
  },
  // { href: '/schedule', key: 'schedule', label: 'Schedule' },
];

export const MEDIA_ICONS = [
  {
    name: "instagram",
    icon: "./socials/ig.svg",
    link: "https://www.instagram.com/ymtliondance/",
  },
  {
    name: "youtube",
    icon: "./socials/youtube.svg",
    link: "https://www.youtube.com/@ymtliondance",
  },
  {
    name: "tiktok",
    icon: "./socials/tiktok.svg",
    link: "https://www.tiktok.com/@ymtliondance",
  },
  {
    name: "linkedin",
    icon: "./socials/linkedin.svg",
    link: "https://www.linkedin.com/company/ymt-lion-dance",
  },
];

export const MEDIA_VIDEOS = [
  {
    title: "YMT Lion Dance - CNY 2025 YEAR OF THE 🐍 RECAP",
    src: "https://www.youtube.com/embed/HXlENiEkwgY?si=TWUn8pBjede0sGfD",
  },
  {
    title: "Toronto Lion Dance, Wai Mo Promo 2024 | 加拿大威武醒獅團",
    src: "https://www.youtube.com/embed/gxz5X_cH26Q?si=iSglglQkQ6ko3KXH",
  },
  {
    title:
      "Canadian National Lion Dance Championships 2024 加拿大全國舞獅錦標賽",
    src: "https://www.youtube.com/embed/QP8lCNFtHm4?si=WZgbW1ub7wkm0t9h",
  },
];

// export const LIONS = [

//   { name: 'A' , colors: "Red/Silver", image: '/YMT Lions/LionProfiles/red_silver.jpg'},
//   { name: 'B' , colors: "Red/Gold", image: '/YMT Lions/LionProfiles/red_gold.jpeg'},
//   { name: 'C' , colors: "Red/Gold + Black", image: '/YMT Lions/LionProfiles/red_gold_black.png'},
//   { name: 'D' , colors: "Yellow/Gold", image: '/YMT Lions/LionProfiles/yellow_gold.jpeg'},
//   { name: 'E' , colors: "Yellow/Gold + Black", image: '/YMT Lions/LionProfiles/yellow_gold_black.png'},
//   { name: 'F' , colors: "White/Gold", image: '/YMT Lions/LionProfiles/white_gold.jpeg'},
//   { name: 'G' , colors: "White/Purple", image: '/YMT Lions/LionProfiles/white_purple.jpeg'},
//   { name: 'H' , colors: "Black/Gold", image: '/YMT Lions/LionProfiles/black_yellow.jpeg'},

// ]

// export const LEDLIONS = [
//   { name: 'L1', colors: 'White/Blue', image: '/YMT Lions/LionProfiles/LED_white_blue.png'},
//   { name: 'L2', colors: 'White/Green', image: '/YMT Lions/LionProfiles/LED_white_green.jpg'}
// ]

export const HEADSHOTS = [
  {
    name: "A",
    colors: "Red/Silver",
    image: "/YMT Lions/headshots/red_silver.jpg",
  },
  { name: "B", colors: "Red/Gold", image: "/YMT Lions/headshots/red_gold.jpg" },
  {
    name: "C",
    colors: "Red/Gold + Black",
    image: "/YMT Lions/headshots/red_gold_black.jpg",
  },
  {
    name: "D",
    colors: "Yellow/Gold",
    image: "/YMT Lions/headshots/yellow_gold.jpg",
  },
  {
    name: "E",
    colors: "Yellow/Gold + Black",
    image: "/YMT Lions/headshots/yellow_gold_black.jpg",
  },
  {
    name: "F",
    colors: "White/Gold",
    image: "/YMT Lions/headshots/white_gold.jpg",
  },
  {
    name: "G",
    colors: "White/Purple",
    image: "/YMT Lions/headshots/white_purple.jpg",
  },
  {
    name: "H",
    colors: "Black/Gold",
    image: "/YMT Lions/headshots/yellow_gold_black.jpg",
  },
];

export const HEADSHOTS_LED = [
  {
    name: "L1",
    colors: "White/Blue",
    image: "/YMT Lions/headshots/white_blue.jpg",
  },
  {
    name: "L2",
    colors: "White/Green",
    image: "/YMT Lions/headshots/white_green.jpg",
  },
];

export const CLIENT_CATEGORIES = [
  "Corporate & Brands",
  "Malls & Retail",
  "Schools & Universities",
  "Media & Culture",
  "Community & Restaurants",
] as const;

export type ClientCategory = (typeof CLIENT_CATEGORIES)[number];

export type ClientLogo = {
  name: string;
  image: string;
  category: ClientCategory;
};

// Past clients, shown in the homepage marquee and the grouped wall on /about.
// Order within a category is the display order.
export const LOGOS: ClientLogo[] = [
  // Corporate & Brands
  { name: "Google", image: "/logos/google.png", category: "Corporate & Brands" },
  { name: "Salesforce", image: "/logos/salesforce.png", category: "Corporate & Brands" },
  { name: "Rogers", image: "/logos/rogers.png", category: "Corporate & Brands" },
  { name: "Snapchat", image: "/logos/snapchat.png", category: "Corporate & Brands" },
  { name: "Cozey", image: "/logos/Cozey.png", category: "Corporate & Brands" },
  { name: "Plexcon", image: "/logos/Plexcon.png", category: "Corporate & Brands" },
  { name: "Quintessentially", image: "/logos/quintessentially.png", category: "Corporate & Brands" },
  { name: "Ascend", image: "/logos/ascend.png", category: "Corporate & Brands" },
  { name: "JSTDRMN", image: "/logos/jstdrmn.png", category: "Corporate & Brands" },
  { name: "AMPM", image: "/logos/AMPM.png", category: "Corporate & Brands" },

  // Malls & Retail
  { name: "Yorkdale", image: "/logos/Yorkdale.png", category: "Malls & Retail" },
  { name: "Oxford Properties", image: "/logos/oxford.png", category: "Malls & Retail" },
  { name: "The Well", image: "/logos/the_well.png", category: "Malls & Retail" },
  { name: "Gerrard Square", image: "/logos/Gerrard_Square.png", category: "Malls & Retail" },
  { name: "Hillcrest Mall", image: "/logos/Hillcrest.png", category: "Malls & Retail" },
  { name: "Times Square", image: "/logos/times_square.png", category: "Malls & Retail" },
  { name: "Shoppes on Parkway", image: "/logos/shoppes_parkway.png", category: "Malls & Retail" },
  { name: "Hudson's Bay", image: "/logos/bay.jpg", category: "Malls & Retail" },
  { name: "LCBO", image: "/logos/lcbo.png", category: "Malls & Retail" },
  { name: "No Frills", image: "/logos/no_frills.png", category: "Malls & Retail" },
  { name: "President's Choice", image: "/logos/PC.png", category: "Malls & Retail" },

  // Schools & Universities
  { name: "University of Toronto", image: "/logos/UofT.png", category: "Schools & Universities" },
  { name: "TDSB", image: "/logos/TDSB.png", category: "Schools & Universities" },
  { name: "DDSB", image: "/logos/ddsb_logo.png", category: "Schools & Universities" },
  { name: "Upper Canada", image: "/logos/UpperCanada.png", category: "Schools & Universities" },

  // Media & Culture
  { name: "CBC", image: "/logos/CBC.png", category: "Media & Culture" },
  { name: "CP24", image: "/logos/CP24_black_logo.png", category: "Media & Culture" },
  { name: "Royal Ontario Museum", image: "/logos/ROM.png", category: "Media & Culture" },
  { name: "Casino Rama", image: "/logos/casino_rama.png", category: "Media & Culture" },

  // Community & Restaurants
  { name: "Chinatown BIA", image: "/logos/Chinatown_bia.png", category: "Community & Restaurants" },
  { name: "Chinese Cultural Centre", image: "/logos/CCC.png", category: "Community & Restaurants" },
  { name: "Ching Kwok", image: "/logos/Ching_Kwok.png", category: "Community & Restaurants" },
  { name: "Sugar Cafe", image: "/logos/sugar_cafe.png", category: "Community & Restaurants" },
  { name: "Asian Dragon Buffet", image: "/logos/asian_dragon_buffet.png", category: "Community & Restaurants" },
];

export const PHOTOS_2026 = [
  { src: "/Sep_2026/1.jpg", alt: "Photo 1" },
  { src: "/Sep_2026/2.jpg", alt: "Photo 2" },
  { src: "/Sep_2026/3.jpg", alt: "Photo 3" },
  { src: "/Sep_2026/4.jpg", alt: "Photo 4" },
  { src: "/Sep_2026/5.jpg", alt: "Photo 5" },
  { src: "/Sep_2026/6.jpg", alt: "Photo 6" },
  { src: "/Sep_2026/7.jpg", alt: "Photo 7" },
  { src: "/Sep_2026/8.jpg", alt: "Photo 8" },
  { src: "/Sep_2026/9-TheWell.jpg", alt: "Photo 9" },
  { src: "/Sep_2026/10-StacktMarket-0.jpg", alt: "Photo 10" },
  { src: "/Sep_2026/11-StacktMarket-1.jpg", alt: "Photo 11" },
];
