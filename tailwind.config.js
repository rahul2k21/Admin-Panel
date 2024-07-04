/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      sidebar:{
        active: "#6b32ec",
        background: "#f5f5ff",
        iconColor: "#636c80",
        
      },
    },
  },
  plugins: [],
};
