/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-black': '#121214',
        'custom-purple': '#846AFF',
        'custom-white': '#F8F8FF'
      },
    },
  },
  plugins: [],
}

