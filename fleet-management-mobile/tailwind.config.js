/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    // "./App.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bgGrayApp: "#1E1E1E",
        LightGrayApp: "#8CC63F",
        DarkGrayApp: "#2A5C43",
        whiteApp: "#F9F9F9",
        redApp: "#FF1C18",
        yellowApp: "#D9E021"
      }
    },
  },
  plugins: [],
};
