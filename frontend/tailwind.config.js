/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        wave: "wave 2s ease-in-out infinite",
      },
      keyframes: {
        wave: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-5px)" },
        },
      },
      boxShadow: {
        "auth-page":
          " 0 4px 10px 0 rgba(0, 0, 0, 0.19), 0 6px 20px 0 rgba(0, 0, 0, 0.08)",
      },
    },
  },
  plugins: [require("daisyui")],
};
