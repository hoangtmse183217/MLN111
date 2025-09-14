// src/components/Chuong2/BaQuyLuat.jsx

import React, { useState } from "react";
import { FaSyncAlt } from "react-icons/fa";

// --- COMPONENT PHỤ ---
const KeyTerm = ({ children }) => (
  <span className="font-semibold text-accent">{children}</span>
);

// --- CÁC MÔ PHỎNG TƯƠNG TÁC ---

// 1. Mô phỏng Lượng - Chất
const LuongChatSim = () => {
  const [luong, setLuong] = useState(0);
  const isChatChanged = luong >= 100;

  return (
    <div className="bg-surface p-6 rounded-lg border border-gray-700/50 flex flex-col h-full">
      <h4 className="text-xl font-bold text-text-main text-center mb-2">
        1. Quy luật Lượng - Chất
      </h4>
      <p className="text-sm text-text-secondary text-center mb-4">
        Cách thức của sự vận động, phát triển
      </p>

      <p className="text-text-secondary mb-4">
        Sự thay đổi về <KeyTerm>lượng</KeyTerm> (từ từ, tiệm tiến) đến một giới
        hạn nhất định (điểm nút) sẽ dẫn đến sự thay đổi căn bản về{" "}
        <KeyTerm>chất</KeyTerm> (nhảy vọt).
      </p>
      <div className="mt-auto">
        <p className="text-center italic text-sm mb-2">
          Mô phỏng: Đun nước để thấy sự thay đổi
        </p>
        <div className="text-center">
          <p className="text-2xl font-bold my-2">{luong}°C</p>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={luong}
          onChange={(e) => setLuong(parseInt(e.target.value))}
          className="w-full h-2 bg-gray-600 rounded-lg appearance-none cursor-pointer accent-primary"
        />
        <div className="mt-4 h-20 relative flex items-center justify-center bg-background/50 rounded-md p-2">
          <div
            className={`absolute transition-opacity duration-500 ${
              !isChatChanged ? "opacity-100" : "opacity-0"
            }`}
          >
            💧 <span className="font-bold">Nước (Chất cũ)</span>
          </div>
          <div
            className={`absolute transition-opacity duration-500 text-2xl ${
              isChatChanged ? "opacity-100" : "opacity-0"
            }`}
          >
            💨 <span className="font-bold">Hơi nước (Chất mới)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// 2. Mô phỏng Mâu thuẫn
const MauThuanSim = () => (
  <div className="bg-surface p-6 rounded-lg border border-gray-700/50 flex flex-col h-full">
    <h4 className="text-xl font-bold text-text-main text-center mb-2">
      2. Quy luật Mâu thuẫn
    </h4>
    <p className="text-sm text-text-secondary text-center mb-4">
      Nguồn gốc, động lực của sự vận động
    </p>

    <p className="text-text-secondary mb-4">
      Mọi sự vật đều chứa đựng các mặt đối lập. Sự{" "}
      <KeyTerm>thống nhất và đấu tranh</KeyTerm> giữa các mặt đối lập này chính
      là nguồn gốc, động lực bên trong của sự vận động và phát triển.
    </p>
    <div className="mt-auto text-center p-4 bg-background/50 rounded-md">
      <p className="italic text-sm mb-2">Ví dụ: Trong cơ thể sống</p>
      <div className="flex justify-around items-center text-2xl font-bold">
        <div className="text-green-400">Đồng hóa</div>
        <FaSyncAlt className="text-primary animate-spin" />
        <div className="text-red-400">Dị hóa</div>
      </div>
      <p className="mt-4 text-text-main">
        ➡️ Tạo ra <KeyTerm>Sự Sống</KeyTerm> (Vận động)
      </p>
    </div>
  </div>
);

// 3. Mô phỏng Phủ định của Phủ định
const PhuDinhSim = () => (
  <div className="bg-surface p-6 rounded-lg border border-gray-700/50 flex flex-col h-full">
    <h4 className="text-xl font-bold text-text-main text-center mb-2">
      3. Quy luật Phủ định của Phủ định
    </h4>
    <p className="text-sm text-text-secondary text-center mb-4">
      Khuynh hướng của sự phát triển
    </p>

    <p className="text-text-secondary mb-4">
      Sự phát triển diễn ra thông qua các lần{" "}
      <KeyTerm>phủ định biện chứng</KeyTerm>. Cái mới ra đời phủ định cái cũ,
      nhưng sau đó lại bị một cái mới hơn phủ định. Quá trình này có tính kế
      thừa và lặp lại ở trình độ cao hơn, tạo thành khuynh hướng phát triển theo
      đường <KeyTerm>xoáy trôn ốc</KeyTerm>.
    </p>
    <div className="mt-auto text-center p-4 bg-background/50 rounded-md">
      <p className="italic text-sm mb-2">
        Mô phỏng: Quá trình phát triển của cây
      </p>
      <div className="flex justify-around items-center text-xl font-bold">
        <span>🌰 (Hạt)</span>
        <span className="text-primary">→</span>
        <span>🌱 (Cây non - Phủ định lần 1)</span>
        <span className="text-primary">→</span>
        <span>🌳 (Cây trưởng thành ra hạt mới - Phủ định lần 2)</span>
      </div>
      <p className="mt-4 text-3xl">🌀</p>
    </div>
  </div>
);

// --- COMPONENT CHÍNH ---
const BaQuyLuat = () => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
    <LuongChatSim />
    <MauThuanSim />
    <PhuDinhSim />
  </div>
);

export default BaQuyLuat;
