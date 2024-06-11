import type { Config } from "tailwindcss";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    extend: {
      colors: {
        main: "#3492A2",
        mainDark: "#166D7B",
        dark: "#545867",
        white: "#fff",
        black: "#484747",
        gray: "#7B7A7A",
        red: "#D44A4A",
      },
    },
  },
} satisfies Config;
