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
      },
      backgroundImage: {
        "hero-pattern": "url(/hero-pattern.webp)",
      },
    },
  },
  plugins: [],
};
