import animations from "@midudev/tailwind-animations";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "#2B3059",
        secondary: "#CB6D61",
        "cheffify-orange": "#E27F3E",
        "cheffify-aqua": "#355E74",
        "cheffify-aqua-light": "#8096a5",
        "cheffify-orange-light": "#ffbe80",
        "cheffify-green": "#1CC447",
        "cheffify-gray-dark": "#646477",
        "cheffify-gray-light": "#C2C2CE",
        "cheffify-gray-ultra-dark": "#80808B",
        "cheffify-gray-ultra-light": "#EDEDED",
        gray: "#7F7F89",
        grayLight: "#E0E0EB",
        grayUltraLight: "#BCBCC7",
        borderWsp: "#19822F",
        borderPlatos: "#E7E7EF",
      },
      backgroundImage: {
        "hero-pattern": "url(/hero-pattern.webp)",
        "shadow-item": "url(/bg-shadow.svg)",
        "banner-cotizar": "url(/banner-cotizar.webp)",
      },
      boxShadow: {
        "cheffify-card": "0px 0px 8px #CB6D6166",
      },
    },
  },
  plugins: [animations],
};
