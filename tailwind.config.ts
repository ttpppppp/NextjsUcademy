import type { Config } from "tailwindcss";

const config: Config = {
  // Specify where Tailwind should look for class names
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Add custom colors
      colors: {
        primary: "#7F27FF"
      },
      // Add custom font family
      fontFamily: {
        primary: ["var(--font-manrope)"]
      }
    },
  },
  // Add any plugins you need
  plugins: [],
};

export default config;
