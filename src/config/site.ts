import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Aerix Labs",
  description:
    "Software development platform specialized in high-performance website and app development.",
  url: "https://aerixlabs.com",
  lang: "en",
  locale: "en_US",
  author: "Aerix Labs",
  twitter: "@AerixLabs",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com/aerixlabs",
    discord: "https://discord.gg/aerixlabs",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Contact", href: "/contact" },
  ],
};
