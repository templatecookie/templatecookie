const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "app.vue",
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  theme: {
    fontFamily: {
      lexend: ["'Lexend', sans-serif"],
      opensans: ["'Open Sans', sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hireus-banner": "url('/images/hire-us.png')",
      },
      colors: {
        primary: "#0B63E5",
        secondary: "#7534FF",
        dark: "#061C3D",
        warning: "#dc2626",
        warn1ng: "#fef2f2",
        "dark-gray": "#42526B",
        "gray-f0": "#F0F5FF",
        "dark-e6": "#E6E8EC",
        "blue-ce": "#CEE0FA",
        "purple-e3": "#E3D6FF",
        "green-e7": "#E7F5E8",
        "blue-18": "1877F214",
        "pink-ea": "#EA4C8914",
        "gray-900": "#061C3D",
        "gray-700": "#42526B",
        "gray-200": "#CDD2D8",
        "gray-50": "#F5F6F7",
        "primary-500": "#0B63E5",
        "red-600": colors.red[600],
        "red-50": colors.red[50],
      },
      fontSize: {
        "heading-40": ["40px", "48px"],
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
  safelist: [
    {
      pattern:
        /(bg|text|border)-(transparent|current|white|purple|green|blue|midnight|metal|tahiti|silver|bermuda)/,
    },
  ],
};
