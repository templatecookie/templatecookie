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
      },
      fontFamily: {
        lexend: ["Lexend", "sans-serif"],
      },
      fontSize: {
        heading: ["72px", "80px"],
        "heading-40": ["40px", "48px"],
        title: ["48px", "56px"],
        body: ["18px", "26px"],
        "body-16": ["16px", "24px"],
        button: ["14px", "44px"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
