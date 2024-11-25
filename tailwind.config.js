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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#8F71E1", // Set your custom primary color here
          secondary: "#7E53D4", // Custom secondary color
          accent: "#EEECFB",
          neutral: "#F6F5FD",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};
