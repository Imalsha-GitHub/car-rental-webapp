/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        "primary-dull": "var(--color-primary-dull)",
        light: "var(--color-light)",
        borderColor: "var(--color-borderColor)",
      },
    },
  },
  plugins: [],
};
