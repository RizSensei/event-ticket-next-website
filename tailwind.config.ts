import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'light-black':'#222222',
        'dark-black':'#0F0F0F',
        'grayish-black':'#404040',
        'paragraph':'#6B7280',
        'error':'#ef4444'
      },
    },
  },
  plugins: [],
};
export default config;
