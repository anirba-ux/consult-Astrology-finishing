/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        title: ['Caveat', 'cursive'],
        serif: ['Merriweather', ...defaultTheme.fontFamily.serif],
      },
      screens: {
        'galaxy-tab-s7': '800px',
        'galaxy-tab-s7-landscape': '1280px',
      },
    },
  },
  plugins: [],
};
