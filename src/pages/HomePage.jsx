// src/pages/HomePage.jsx

import React from "react";
import { NavLink } from "react-router-dom";

const HomePage = () => {
  return (
    // Section container - Căn giữa nội dung và chiếm gần hết chiều cao màn hình
    <section className="flex items-center min-h-[calc(100vh-160px)] py-12">
      <div className="container mx-auto">
        {/* Container cho bố cục 2 cột */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16">
          {/* Cột 1: Nội dung chữ */}
          <div className="md:w-1/2 lg:w-2/5 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-text-main mb-4 leading-tight">
              Khám Phá Chiều Sâu
              <br />
              <span className="text-primary">Tư Tưởng Mác - Lênin</span>
            </h1>
            <p className="text-lg text-text-secondary max-w-xl mx-auto md:mx-0 mb-8">
              Một nền tảng tương tác, hiện đại để tiếp cận các khái niệm cốt lõi
              của Chủ nghĩa Duy vật biện chứng và Lịch sử.
            </p>
            <NavLink
              to="/chuong-2"
              className="inline-block bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-glow-primary hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              Bắt đầu tìm hiểu
            </NavLink>
          </div>

          {/* Cột 2: Hình ảnh */}
          <div className="md:w-1/2 lg:w-2/5">
            <img
              // Đảm bảo ảnh của bạn tên là 'hero-banner.jpg' và nằm trong thư mục /public
              src="/hero-banner.jpg"
              alt="Minh họa tư tưởng triết học Mác - Lênin"
              className="w-full h-auto rounded-lg shadow-2xl shadow-surface transform hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
