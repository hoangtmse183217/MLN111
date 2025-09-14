// src/components/Header.jsx

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClass = ({ isActive }) =>
    `relative py-2 transition-colors duration-300 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 hover:after:scale-x-100 ${
      isActive
        ? "text-text-main font-semibold after:scale-x-100"
        : "text-text-secondary hover:text-text-main"
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block py-4 px-6 text-center transition-colors duration-300 ${
      isActive
        ? "bg-surface text-primary font-bold"
        : "text-text-main hover:bg-surface"
    }`;

  return (
    <header className="bg-background/70 backdrop-blur-lg shadow-lg sticky top-0 z-50 border-b border-surface/50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink
          to="/"
          className="text-2xl font-bold text-text-main hover:text-primary transition-colors duration-300"
        >
          Triết Học<span className="text-primary">.</span>
        </NavLink>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-8">
          <li>
            <NavLink to="/" className={linkClass} end>
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink to="/chuong-2" className={linkClass}>
              CNDV Biện Chứng
            </NavLink>
          </li>
          {/* MỚI: Thêm link Bài Tập Vận Dụng cho desktop */}
          <li>
            <NavLink to="/bai-tap-van-dung" className={linkClass}>
              BT Vận Dụng
            </NavLink>
          </li>
          <li>
            <NavLink to="/phu-luc-ai" className={linkClass}>
              Phụ Lục AI
            </NavLink>
          </li>
        </ul>

        {/* Nút Hamburger */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-text-main focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      <div
        className={`transition-all duration-300 ease-in-out md:hidden ${
          isOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <ul className="flex flex-col bg-surface/90">
          <li>
            <NavLink
              to="/"
              className={mobileLinkClass}
              onClick={toggleMenu}
              end
            >
              Trang Chủ
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/chuong-2"
              className={mobileLinkClass}
              onClick={toggleMenu}
            >
              Chủ Nghĩa Duy Vật Biện Chứng
            </NavLink>
          </li>
          {/* MỚI: Thêm link Bài Tập Vận Dụng cho mobile */}
          <li>
            <NavLink
              to="/bai-tap-van-dung"
              className={mobileLinkClass}
              onClick={toggleMenu}
            >
              Bài Tập Vận Dụng
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/phu-luc-ai"
              className={mobileLinkClass}
              onClick={toggleMenu}
            >
              Phụ Lục AI
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
