// src/components/Footer.jsx

import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-surface text-text-secondary border-t border-gray-700/50 mt-auto">
      <div className="container mx-auto px-6 py-5 text-center">
        <p>
          &copy; {currentYear} Nhóm 1 - MLN111 - SE1714. All Rights Reserved.
        </p>
        <p className="text-sm mt-1">
          Sản phẩm sáng tạo thuộc học phần Triết học Mác-Lênin.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
