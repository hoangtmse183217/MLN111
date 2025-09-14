// src/components/Chuong2/NguonGocYThuc.jsx
import React from "react";
import {
  FaBrain,
  FaGlobeAmericas,
  FaTools,
  FaComments,
  FaPlus,
} from "react-icons/fa";

// Component con cho một "trạm" trong sơ đồ để tái sử dụng
const ProcessStep = ({ icon, title, description, tooltipText }) => (
  <div className="flex flex-col items-center group relative w-full">
    {/* Tooltip sẽ hiện ra khi hover */}
    <div className="absolute bottom-full mb-3 w-60 bg-primary text-white text-xs rounded py-2 px-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
      {tooltipText}
      <svg
        className="absolute text-primary h-2 w-full left-0 top-full"
        x="0px"
        y="0px"
        viewBox="0 0 255 255"
      >
        <polygon className="fill-current" points="0,0 127.5,127.5 255,0" />
      </svg>
    </div>
    {/* Nội dung chính của "trạm" */}
    <div className="bg-background/50 rounded-lg p-4 w-full text-center cursor-help">
      <div className="flex justify-center items-center gap-3">
        {icon}
        <span className="font-bold text-text-main">{title}</span>
      </div>
      {description && (
        <p className="text-sm text-text-secondary mt-1">{description}</p>
      )}
    </div>
  </div>
);

// Component con cho đường nối
const ConnectorLine = () => <div className="h-8 w-px bg-primary/50 my-1"></div>;

const NguonGocYThuc = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* CỘT 1: NGUỒN GỐC TỰ NHIÊN */}
      <div className="bg-surface p-6 rounded-lg border border-gray-700/50">
        <h4 className="text-xl font-semibold text-text-main text-center mb-6">
          a. Nguồn gốc Tự nhiên{" "}
          <span className="text-sm text-text-secondary font-normal">
            (Điều kiện cần)
          </span>
        </h4>
        <div className="flex flex-col items-center">
          <ProcessStep
            icon={<FaGlobeAmericas size={22} className="text-accent" />}
            title="Thế giới khách quan"
            tooltipText="Là đối tượng phản ánh, cung cấp 'dữ liệu' đầu vào cho ý thức."
          />
          <ConnectorLine />
          <ProcessStep
            icon={null} // Không cần icon
            title="Phản ánh"
            description="(Từ thấp đến cao)"
            tooltipText="Là thuộc tính chung của mọi dạng vật chất, phát triển từ phản ánh vật lý, hóa học, sinh học đến tâm lý."
          />
          <ConnectorLine />
          <ProcessStep
            icon={<FaBrain size={22} className="text-accent" />}
            title="Bộ óc người"
            tooltipText="Là cơ quan vật chất có tổ chức cao nhất, thực hiện chức năng phản ánh để tạo ra ý thức."
          />
        </div>
      </div>

      {/* CỘT 2: NGUỒN GỐC XÃ HỘI */}
      <div className="bg-surface p-6 rounded-lg border border-gray-700/50">
        <h4 className="text-xl font-semibold text-text-main text-center mb-6">
          b. Nguồn gốc Xã hội{" "}
          <span className="text-sm text-text-secondary font-normal">
            (Yếu tố quyết định)
          </span>
        </h4>
        <div className="flex flex-col items-center">
          <ProcessStep
            icon={<FaTools size={22} className="text-accent" />}
            title="Lao động"
            tooltipText="Hoạt động cải tạo thế giới, giúp con người khám phá quy luật khách quan và hoàn thiện chính bản thân."
          />
          {/* Thay thế dấu & bằng icon + */}
          <div className="flex items-center justify-center h-8 my-1">
            <FaPlus className="text-primary" />
          </div>
          <ProcessStep
            icon={<FaComments size={22} className="text-accent" />}
            title="Ngôn ngữ"
            tooltipText="Hệ thống tín hiệu vật chất, là 'cái vỏ' của tư duy, công cụ giao tiếp và trừu tượng hóa."
          />
          <div className="flex-grow"></div>{" "}
          {/* Đẩy nội dung lên trên để cân bằng chiều cao */}
        </div>
      </div>
    </div>
  );
};

export default NguonGocYThuc;
