import ogImage from "@/assets/og-image.png";

export const siteConfig = {
  name: "Aerix Labs",
  description:
    "Aerix Labs - Leading the future of web development and digital solutions.",
  url: "https://aerixlabs.com",
  lang: "en",
  locale: "en_US",
  author: "Aerix Labs",
  twitter: "@AerixLabs",
  ogImage: ogImage,
  socialLinks: {
    twitter: "https://twitter.com/aerixlabs",
    github: "https://github.com/AerixLabs",
    discord: "https://discord.gg/aerixlabs",
  },
  navLinks: [
    { text: "Home", href: "/" },
    { text: "About", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Blog", href: "/blog" },
    { text: "Contact", href: "/contact" },
    { text: "Widgets", href: "/widgets" },
  ],
};
