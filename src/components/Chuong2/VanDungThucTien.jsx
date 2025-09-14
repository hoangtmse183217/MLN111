// src/components/Chuong2/VanDungThucTien.jsx
import React, { useState } from "react";
import { FaBalanceScale, FaChartLine, FaProjectDiagram } from "react-icons/fa";

// --- COMPONENT PHỤ ---

// Component KeyTerm để làm nổi bật thuật ngữ
const KeyTerm = ({ children }) => (
  <span className="font-semibold text-accent">{children}</span>
);

// Component RuleAnalysis để trình bày phân tích một quy luật
const RuleAnalysis = ({ icon, ruleName, children }) => (
  <div className="relative pl-8">
    <div className="absolute left-0 top-1 text-primary">{icon}</div>
    <p>
      <strong>• {ruleName}:</strong> {children}
    </p>
  </div>
);

// --- DỮ LIỆU & LOGIC CỦA TABS ---
const tabs = [
  { id: "vietnam", label: "Bối cảnh Việt Nam", image: "/doi-moi.jpg" },
  { id: "kinhte", label: "Kinh tế", image: "/kinh-te.jpg" },
  { id: "marketing", label: "Marketing", image: "/marketing.jpg" },
  { id: "cntt", label: "Công nghệ thông tin", image: "/cntt.jpg" },
];

const TabContent = ({ activeTab }) => {
  // Tìm thông tin của tab hiện tại, bao gồm cả ảnh
  const currentTab = tabs.find((tab) => tab.id === activeTab);
  if (!currentTab) return null;

  const renderContent = () => {
    switch (activeTab) {
      case "vietnam":
        return (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-text-main">
              Phân tích Công cuộc Đổi Mới (1986)
            </h4>
            <RuleAnalysis
              icon={<FaBalanceScale size={20} />}
              ruleName="Vật chất quyết định ý thức"
            >
              Tình hình kinh tế-xã hội khủng hoảng trầm trọng (thực tại{" "}
              <KeyTerm>vật chất</KeyTerm>) đã trở thành yếu tố quyết định, buộc
              Đảng và Nhà nước phải thay đổi tư duy, đường lối lãnh đạo (thay
              đổi <KeyTerm>ý thức</KeyTerm>), từ bỏ mô hình kế hoạch hóa tập
              trung, quan liêu, bao cấp.
            </RuleAnalysis>
            <RuleAnalysis
              icon={<FaChartLine size={20} />}
              ruleName="Quy luật Lượng - Chất"
            >
              Sự tích lũy của các thử nghiệm "xé rào" trong nông nghiệp, công
              nghiệp ở nhiều địa phương (tích lũy về <KeyTerm>lượng</KeyTerm>)
              đã đạt đến giới hạn, dẫn đến sự ra đời của đường lối Đổi Mới toàn
              diện tại Đại hội VI (bước nhảy vọt về <KeyTerm>chất</KeyTerm>).
            </RuleAnalysis>
          </div>
        );
      case "kinhte":
        return (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-text-main">
              Vận động của Thị trường
            </h4>
            <RuleAnalysis
              icon={<FaBalanceScale size={20} />}
              ruleName="Quy luật Mâu thuẫn"
            >
              Mâu thuẫn biện chứng giữa hai mặt đối lập{" "}
              <KeyTerm>Cung và Cầu</KeyTerm> chính là động lực nội tại. Sự đấu
              tranh giữa chúng (người bán muốn giá cao, người mua muốn giá thấp)
              không triệt tiêu nhau mà dẫn đến một thể thống nhất mới -{" "}
              <KeyTerm>giá cả thị trường</KeyTerm>, và thúc đẩy sản xuất không
              ngừng phát triển.
            </RuleAnalysis>
          </div>
        );
      case "marketing":
        return (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-text-main">
              Chiến dịch Marketing Hiện đại
            </h4>
            <RuleAnalysis
              icon={<FaChartLine size={20} />}
              ruleName="Quy luật Lượng - Chất"
            >
              Một chiến dịch cần tích lũy đủ <KeyTerm>lượng</KeyTerm> (tần suất
              quảng cáo, số người tiếp cận, tương tác) đến một "điểm bùng phát"
              (điểm nút). Khi đó, nhận thức của công chúng sẽ thay đổi đột ngột,
              tạo ra hiệu ứng lan truyền (viral) - một sự thay đổi về{" "}
              <KeyTerm>chất</KeyTerm>.
            </RuleAnalysis>
          </div>
        );
      case "cntt":
        return (
          <div className="space-y-4">
            <h4 className="text-xl font-bold text-text-main">
              Phát triển Phần mềm
            </h4>
            <RuleAnalysis
              icon={<FaProjectDiagram size={20} />}
              ruleName="Quy luật Phủ định của Phủ định"
            >
              Vòng đời phát triển theo <KeyTerm>mô hình xoáy trôn ốc</KeyTerm>{" "}
              là một ví dụ điển hình. Mỗi vòng lặp (prototype 1, 2, 3...) là một
              lần <KeyTerm>phủ định</KeyTerm> phiên bản trước. Nó không xóa bỏ
              hoàn toàn mà <KeyTerm>kế thừa</KeyTerm> những gì đã có và phát
              triển nó ở một mức độ hoàn thiện hơn, phức tạp hơn, theo một
              khuynh hướng đi lên.
            </RuleAnalysis>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Cột hình ảnh */}
      <div className="w-full h-64 md:h-full rounded-lg overflow-hidden">
        <img
          src={currentTab.image}
          alt={currentTab.label}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Cột nội dung */}
      <div className="text-text-main leading-relaxed">{renderContent()}</div>
    </div>
  );
};

// --- COMPONENT CHÍNH ---
const VanDungThucTien = () => {
  const [activeTab, setActiveTab] = useState("vietnam");

  return (
    <div className="bg-surface rounded-lg border border-gray-700/50">
      {/* Thanh điều hướng Tab */}
      <div className="flex flex-wrap border-b border-gray-700">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-3 px-5 font-semibold transition-colors duration-300 outline-none relative after:absolute after:bottom-[-1px] after:left-0 after:h-[2px] after:w-full after:bg-primary after:scale-x-0 after:transition-transform after:duration-300 ${
              activeTab === tab.id
                ? "text-primary after:scale-x-100"
                : "text-text-secondary hover:text-text-main"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Nội dung Tab */}
      <div className="p-6">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
  );
};

export default VanDungThucTien;
