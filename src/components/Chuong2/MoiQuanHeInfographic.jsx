// src/components/Chuong2/MoiQuanHeInfographic.jsx
import React from "react";

const MoiQuanHeInfographic = () => {
  return (
    // Container chính với bố cục flex, có khoảng trống lớn giữa các phần
    <div className="flex flex-col md:flex-row items-center justify-center gap-x-8 gap-y-6">
      {/* KHỐI 1: VẬT CHẤT */}
      <div className="flex-1 text-center md:text-right">
        <h4 className="text-3xl font-bold text-primary mb-2">VẬT CHẤT</h4>
        <p className="text-text-secondary leading-relaxed max-w-md ml-auto">
          Là cái có trước, tồn tại khách quan, là nguồn gốc và quyết định toàn
          bộ sự vận động của ý thức.
        </p>
      </div>

      {/* KHỐI 2: CÁC MŨI TÊN TỐI GIẢN */}
      <div className="flex md:flex-col items-center justify-center gap-x-8 gap-y-4">
        {/* Mũi tên Quyết định */}
        <div className="relative group">
          <svg
            className="w-12 h-12 text-primary transform md:-rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 -top-6 md:top-1/2 md:-translate-y-1/2 md:-left-24 text-primary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            QUYẾT ĐỊNH
          </span>
        </div>

        {/* Mũi tên Tác động trở lại */}
        <div className="relative group">
          <svg
            className="w-10 h-10 text-text-secondary opacity-80 transform rotate-180 md:-rotate-90"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.5}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
          <span className="absolute left-1/2 -translate-x-1/2 -bottom-6 md:bottom-1/2 md:-translate-y-1/2 md:-right-36 text-text-secondary font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            TÁC ĐỘNG TRỞ LẠI
          </span>
        </div>
      </div>

      {/* KHỐI 3: Ý THỨC */}
      <div className="flex-1 text-center md:text-left">
        <h4 className="text-3xl font-bold text-text-main mb-2">Ý THỨC</h4>
        <p className="text-text-secondary leading-relaxed max-w-md mr-auto">
          Ra đời sau, do vật chất quyết định, nhưng có tính độc lập và tác động
          ngược trở lại vật chất qua thực tiễn.
        </p>
      </div>
    </div>
  );
};

export default MoiQuanHeInfographic;
