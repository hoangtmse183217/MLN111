// src/App.jsx

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import Chuong2Page from "./pages/Chuong2Page";
import PhuLucAIPage from "./pages/PhuLucAIPage";
import BaiTapPage from "./pages/BaiTapPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-background text-text-main">
        <Header />
        <main className="flex-grow container mx-auto p-6 md:p-8">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/chuong-2" element={<Chuong2Page />} />
            <Route path="/phu-luc-ai" element={<PhuLucAIPage />} />
            <Route path="/bai-tap-van-dung" element={<BaiTapPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
