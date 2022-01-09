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
        button: ["14px", "44px"],
      },
      maxWidth: {
        1320: "1320px",
        536: "536px",
      },
      borderWidth: {
        1.5: "1.5px",
      },
      spacing: {
        72: "72px",
      },
      height: {
        190: "190px",
        296: "296px",
      },
      margin: {
        72: "72px",
      },
      padding: {
        124: "124px",
      },
      letterSpacing: {
        ls02: '-0.02em',
        ls01: ' -0.015em',
      },
      borderRadius: {
        7: "7px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
