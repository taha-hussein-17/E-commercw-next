/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",  // عشان Tailwind يشوف وين تستخدم الكلاسات
    "./app/**/*.{js,ts,jsx,tsx}",  // لو تستخدم app directory
  ],
  theme: {
    extend: {}, // هنا تقدر تضيف تعديلات على الثيم لو حابب
  },
  plugins: [],
}
