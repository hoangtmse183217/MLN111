// src/pages/PhuLucAIPage.jsx
import React from "react";
import { FaEye, FaShieldAlt, FaLightbulb, FaBook } from "react-icons/fa";

// Component con cho mỗi card nguyên tắc để code gọn gàng hơn
const PrincipleCard = ({ icon, title, description }) => (
  <div className="bg-surface p-6 rounded-lg border border-gray-700/50 flex flex-col items-start gap-4 h-full">
    <div className="bg-primary/10 p-3 rounded-full">{icon}</div>
    <div>
      <h3 className="text-xl font-bold text-accent mb-2">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </div>
  </div>
);

const PhuLucAIPage = () => {
  return (
    <div className="space-y-12">
      {/* --- PHẦN MỞ ĐẦU --- */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-text-main">
          <span className="text-primary">Phụ Lục:</span> Ứng Dụng AI
        </h1>
        <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
          Cam kết về việc sử dụng Trí tuệ Nhân tạo một cách có trách nhiệm trong
          quá trình thực hiện sản phẩm này.
        </p>
      </div>

      {/* --- CAM KẾT LIÊM CHÍNH --- */}
      <div className="bg-surface border-l-4 border-accent p-6 rounded-r-lg shadow-md">
        <h2 className="text-2xl font-semibold text-text-main mb-2">
          Cam kết Liêm chính Học thuật
        </h2>
        <p className="text-text-secondary">
          Chúng tôi khẳng định AI chỉ đóng vai trò là một{" "}
          <span className="font-semibold text-accent">công cụ hỗ trợ</span>,
          không phải là người thực hiện. Toàn bộ nội dung cuối cùng đều đã được
          kiểm chứng, biên soạn và chịu trách nhiệm bởi các thành viên trong
          nhóm.
        </p>
      </div>

      {/* --- CÁC NGUYÊN TẮC SỬ DỤNG --- */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
        <PrincipleCard
          icon={<FaEye size={24} className="text-primary" />}
          title="Minh bạch"
          description="Liệt kê rõ ràng các công cụ AI đã sử dụng (ChatGPT, Gemini) và mục đích chính: hỗ trợ tóm tắt, tìm kiếm ví dụ, và tạo hình ảnh minh họa."
        />
        <PrincipleCard
          icon={<FaShieldAlt size={24} className="text-primary" />}
          title="Trách nhiệm"
          description="Mọi thông tin do AI tạo ra đều được kiểm chứng chéo với giáo trình và các văn kiện chính thống. Chúng tôi chịu trách nhiệm hoàn toàn về tính chính xác của sản phẩm."
        />
        <PrincipleCard
          icon={<FaLightbulb size={24} className="text-primary" />}
          title="Sáng tạo"
          description="AI được dùng để tự động hóa các công việc ban đầu, giúp nhóm dành nhiều thời gian hơn cho việc thiết kế trải nghiệm tương tác và đào sâu nội dung học thuật."
        />
        <PrincipleCard
          icon={<FaBook size={24} className="text-primary" />}
          title="Liêm chính"
          description="Tuyệt đối không sử dụng AI để viết thay toàn bộ nội dung. Luôn có sự phân định rõ ràng giữa kết quả thô từ AI và sản phẩm cuối cùng do nhóm biên soạn."
        />
      </div>

      {/* --- VÍ DỤ PROMPT --- */}
      <div>
        <h3 className="text-2xl font-bold text-accent mb-4 text-center">
          Ví dụ về cách sử dụng Prompt
        </h3>
        <blockquote className="bg-background p-6 rounded-lg border-l-4 border-primary text-text-secondary italic">
          <p>
            "Hãy tóm tắt nội dung của Quy luật Lượng - Chất trong triết học Mác
            - Lênin thành các gạch đầu dòng chính"
          </p>
        </blockquote>
      </div>
    </div>
  );
};

export default PhuLucAIPage;
