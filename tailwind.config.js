/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#1a1d24", // Xám than đá
        surface: "#232730", // Nền cho các card, panel
        primary: "#c0392b", // Đỏ sẫm làm màu chính
        accent: "#d39e4a", // Vàng-đồng làm điểm nhấn
        "text-main": "#e0e0e0", // Màu chữ chính (off-white)
        "text-secondary": "#a0a0a0", // Màu chữ phụ
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Đặt Inter làm font mặc định
      },
      boxShadow: {
        "glow-primary": "0 0 15px 5px rgba(192, 57, 43, 0.2)", // Hiệu ứng glow đỏ
        "glow-accent": "0 0 15px 5px rgba(211, 158, 74, 0.15)", // Hiệu ứng glow vàng
      },
      animation: {
        "fade-in": "fade-in 0.5s ease-in-out",
      },
    },
  },
  plugins: [],
};
