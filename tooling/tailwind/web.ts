import type { Config } from "tailwindcss";
import animate from "tailwindcss-animate";

import base from "./base";

export default {
  content: base.content,
  presets: [base],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
 
      colors: {
        primary: {
          main: "#11556A",
          default: "#447E91",
          stroke: "#77A2AF",
          active: "#CFF9FF",
          gray: "#7C8FAC",
        },
        secondary: {
          black: "#00202B",
          gray: "#2F5666",
          white: "#FFFFFF",
        },
        alternative: {
          main: "#751515",
        },
      },
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
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      backgroundSize: {
        "size-200": "200% 200%",
      },
      backgroundPosition: {
        "pos-tl": "0% 0%",
        "pos-bl": "0% 100%",
        "pos-center": "50% 50%",
        "pos-tr": "100% 0%",
        "pos-br": "100% 100%",
      },
    },
  },
  plugins: [animate],
} satisfies Config;
