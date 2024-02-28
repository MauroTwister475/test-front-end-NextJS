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
        white: {
          100: '#fff',
        },
        mygreen: {
          200: '#5F8D4E',
          800: '#285430',
        },
        black: {
          500: '#181C32',
        }, 
        mygray: {
          100: '#FAFAFA',
          500: '#C9C9C9',
        } 
      },
      textColor: {
        mygreen: {
          800: '#285430',
        },
        white: {
          100: '#fff',
        }
      }
    },
  },
  plugins: [],
};
export default config;
