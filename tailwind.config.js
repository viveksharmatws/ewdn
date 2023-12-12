/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./app/**/*.{js,jsx}",
    "./src/**/*.{js,jsx}",
    "./elements/**/*.{js,jsx}",
  ],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        xs: "450px ",
        sm: "480px",
        md: "768px",
        lg: "976px",
        xl: "1440px",
      },
    },
    lineClamp: {
      // Defaults to these values
      1: 1,
      2: 2,
      3: 3,
    },
    listStyleType: {
      disc: "disc",
      decimal: "decimal",
      square: "square",
      colors: "#333",
    },
    extend: {
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.9s ease-out",
        "accordion-up": "accordion-up 0.9s ease-out",
      },

      layers: {
        components: ["utilities"],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        marquee2: {
          "0%": { transform: "translateX(200%)" },
          "100%": { transform: "translateX(0%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 25s linear infinite",
        marquee2: "marquee2 25s linear infinite",
      },
    },
  },
  colors: {
    red: "#FF0000",
    black: "#000000",
    white: "#ffffff",
    gray: "#cfcfcf",
    blue: "#0000ff",
    gray_two: "#666",
    footer_gray: "#B2B2B2",
  },
  plugins: [require("tailwindcss-animate")],
};
