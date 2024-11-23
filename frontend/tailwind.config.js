/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: { 
      colors: {
        'custom-gray': '#292D32',
        'custom-orange': '#FC6C04',
        'custom-grayli': '#929194',
      },
    },
  },
  plugins: [],
}

