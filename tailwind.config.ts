import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  },
  daisyui: {
    themes: ['cupcake']
  },
  plugins: [
    daisyui
  ],
};
export default config;
