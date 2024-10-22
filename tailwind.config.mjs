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
        "cheffify-green": "#1CC447",
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
    },
  },
  plugins: [animations],
};
