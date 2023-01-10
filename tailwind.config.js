module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  mode: "jit",
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: {
        'hireus-banner': "url('/images/hire-us.png')",
      },
      colors: {
        primary: "#0B63E5",
        secondary: "#7534FF",
        dark: "#061C3D",
        "dark-gray": "#42526B",
        "gray-f0": "#F0F5FF",
        "dark-e6": " #E6E8EC",
        "blue-ce": "#CEE0FA",
        "purple-e3": "#E3D6FF",
        "green-e7": "#E7F5E8",
        "blue-18": " #1877F214",
        "pink-ea": " #EA4C8914 ",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
      fontSize: {
        "heading-40": ["40px", "48px"],
      },

      maxWidth: {
        1320: "1320px",
        536: "536px",
        680: "680px",
        872: "872px",
        232: "232px",
        200: "200px",
        100: "100px",
        300: "300px",
      },

      borderWidth: {
        1.5: "1.5px",
      },
      spacing: {
        72: "72px",
      },
      height: {
        680: "680px",
      },
      minHeight: {
        840: "750px",
        600: "600px",
      },
      margin: {
        72: "72px",
      },
      padding: {
        18: "18px",
        72: "72px",
        124: "124px",
        140: "140px",
        156: "156px",
        200: "200px",
        216: "216px",
        230: "230px",
        222: "222px",
        300: "300px",
      },
      letterSpacing: {
        01: " 0.015em",
        ls02: "0.02em",
        ls03: " 0.012em",
        ls04: " 0.01em",
      },
      borderRadius: {
        7: "7px",
        5: "5px",
        20: "20px",
      },
      boxShadow: {
        bs8: "0px 12px 32px rgba(6, 28, 61, 0.08)",
        bs08: "0px 16px 72px rgba(6, 28, 61, 0.08)",
        bs12: "0px 0px 24px rgba(6, 28, 61, 0.12)",
        bs012: "0px 16px 88px rgba(0, 0, 0, 0.12)",
        bs013: "0px -1px 0px 0px #E6E8EC inset",
      },
      gridTemplateColumns: {
        16: "repeat(16, minmax(0,1fr))",
      },
      gridColumnStart: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      gridColumnEnd: {
        13: "13",
        14: "14",
        15: "15",
        16: "16",
        17: "17",
      },
      screens: {
        "ex-small": "480px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
