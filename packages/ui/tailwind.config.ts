/*
 * This file is not used for any compilation purpose, it is only used
 * for Tailwind Intellisense & Autocompletion in the source files
 */
import type { Config } from "tailwindcss";

import baseConfig from "@jua/tailwind-config/web";

export default {
  content: ["././**/*.tsx"],
  presets: [baseConfig],
} satisfies Config;
