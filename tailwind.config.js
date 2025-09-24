/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Vazir', 'ui-sans-serif', 'system-ui'], // جایگزین فونت پیش‌فرض
      },
    },
  },
  plugins: [],
}
