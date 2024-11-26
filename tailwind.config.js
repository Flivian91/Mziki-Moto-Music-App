/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        secondary: "#0F0F0F",
        surface: "#1D1F1F",
        accent: "#00E4CB",
        text: "#666C6C",
        search: "#5F6666",
      },
    },
  },
  // plugins: [require("tailwind-scrollbar")]
};
