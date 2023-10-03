// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
          'back': "url('../public/images/erkhmee.png')",
          'back1': "url('https://octagon.mn/assets/new/static/home-header.svg')",
      },
    },
    fontFamily: {
      'Roboto': 'Roboto',
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};