/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['var(--font-montserrat)', 'sans-serif'], 
        syne: ['var(--font-syne)', 'sans-serif'], 
      },
      colors: {
        background: "#151312",  
        orangeShade: '#cd5225',               
        darkSecondary: '#353334',
        primaryText: '#8c8383',
      },
      flex: {
        '2': '2 2 0%', 
        '3': '3 3 0%',
        '4': '4 4 0%',
      }
    },
  },
  plugins: [],
};
