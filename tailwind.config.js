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
      colors: {
        "blue-0b": "#0B63E5",
        "pink-75": "#7534FF",
        "dark-06": "#061C3D",
        "dark-42": "#42526B",
        "gray-f5": "#F5F6F7",
        "gray-b4": "#B4BBC5",
        "gray-83": "#838E9E",
        "gray-24": "#243752",
        "gray-e6": "#E6E8EC",
        "gray-f0": "#F0F5FF",
        "blue-ce": "#CEE0FA",
        "pink-fc": "#FCDBF4",
        "pink-f2": "#F249C8",
        "purple-e3": "#E3D6FF",
        "green-of": "#0F9918",
        "green-cf": "#CFEBD",
        "orange-ff": "#FFF4DE",
        "pink-f1": "#F1EBFF",
        "green-e7": "#E7F5E8",
        "yellow-ff": "#FFF9EE",
        "pink-fe": "#FEEDFA",
        "gray-cd": "#CDD2D8",
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      fontSize: {
        heading: ["72px", "80px"],
        "heading-80": ["80px", "88px"],
        "heading-56": ["56px", "60px"],
        "heading-40": ["40px", "48px"],
        title: ["48px", "56px"],
        button: ["14px", "44px"],
        "button-17": ["17px", "56px"],
        body: ["18px", "26px"],
        "body-16": ["16px", "24px"],
        "body-17": ["17px", "24px"],
        "body-24": ["24px", "32px"],
        "body-17": ["17px", "24px"],
        "body-20": ["20px", "28px"],
        "body-14": ["14px", "14px"],
        "body-10": ["10px", "10px"],
      },
      width: {
        76: "76px",
      },
      maxWidth: {
        1320: "1320px",
        536: "536px",
        680: "680px",
        872: "872px",
      },
      height: {
        76: "76px",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      spacing: {
        72: "72px",
      },
      width: {
        76: "76px",
      },
      height: {
        190: "190px",
        296: "296px",
        76: "76px",
        48: "48px",
      },
      margin: {
        72: "72px",
      },
      padding: {
        124: "124px",
      },
      letterSpacing: {
        ls01: " -0.015em",
        ls02: "-0.02em",
        ls03: " -0.012em",
        ls04: " 0.01em",
      },
      borderRadius: {
        7: "7px",
        5: "5px",
      },
      boxShadow: {
        bs8: "0px 12px 32px rgba(6, 28, 61, 0.08)",
        bs08: "0px 16px 72px rgba(6, 28, 61, 0.08)",
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
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
