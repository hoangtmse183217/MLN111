import React, { useState } from "react";

const FlippingCard = ({
  frontImage,
  frontTitle,
  frontDescription,
  backContent,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Style cho mặt trước có ảnh nền
  const frontStyle = {
    backgroundImage: `url(${frontImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
  };

  return (
    // Tăng chiều cao để chứa thêm nội dung
    <div
      className="w-full h-80 [perspective:1000px] cursor-pointer group"
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
          isFlipped ? "[transform:rotateY(180deg)]" : ""
        }`}
      >
        {/* --- MẶT TRƯỚC --- */}
        <div
          style={frontStyle}
          className="absolute w-full h-full [backface-visibility:hidden] rounded-lg overflow-hidden flex flex-col justify-end"
        >
          {/* Lớp phủ gradient để chữ dễ đọc trên nền ảnh */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>

          <div className="relative p-4 text-white">
            <h3 className="text-xl font-bold text-accent">{frontTitle}</h3>
            <p className="text-sm mt-1">{frontDescription}</p>
          </div>
        </div>

        {/* --- MẶT SAU --- */}
        <div className="absolute w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-surface text-text-secondary rounded-lg flex flex-col justify-center p-6 border-2 border-primary">
          <h4 className="text-lg font-bold text-primary mb-3 text-center">
            {frontTitle}
          </h4>
          <p className="text-center text-sm leading-relaxed">{backContent}</p>
        </div>
      </div>
    </div>
  );
};

export default FlippingCard;
