// src/pages/Chuong2Page.jsx

import React from "react";

// Import các component con
import Section from "../components/Chuong2/Section";
import FlippingCard from "../components/Chuong2/FlippingCard";
import NguonGocYThuc from "../components/Chuong2/NguonGocYThuc"; // MỚI
import MoiQuanHeInfographic from "../components/Chuong2/MoiQuanHeInfographic"; // MỚI
import BaQuyLuat from "../components/Chuong2/BaQuyLuat";
import VanDungThucTien from "../components/Chuong2/VanDungThucTien";

const Chuong2Page = () => {
  return (
    <div className="space-y-16">
      {/* --- PHẦN MỞ ĐẦU --- */}
      <div className="text-center pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-text-main">
          <span className="text-primary">Chương 2:</span> Chủ Nghĩa Duy Vật Biện
          Chứng
        </h1>
        <p className="mt-4 text-lg text-text-secondary max-w-3xl mx-auto">
          Khám phá những nguyên lý nền tảng về thế giới quan và phương pháp luận
          khoa học của triết học Mác - Lênin.
        </p>
      </div>

      {/* --- PHẦN 1: VẬT CHẤT & Ý THỨC --- */}
      <Section
        title="Vật chất & Ý thức"
        subtitle="Nền tảng của nhận thức và tư duy"
      >
        <div className="space-y-12">
          {/* Sơ đồ tương tác Nguồn gốc của Ý thức */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6 text-center">
              2.1. Nguồn gốc của Ý thức
            </h3>
            <NguonGocYThuc />
          </div>

          {/* Các thẻ lật Bản chất của Ý thức */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6 text-center">
              2.2. Bản chất của Ý thức
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              <FlippingCard
                frontImage="/ban-chat-phan-anh.jpg"
                frontTitle="Tính Phản Ánh Năng Động, Sáng Tạo"
                frontDescription="Ý thức không chỉ sao chép mà còn 'tái tạo' lại hiện thực."
                backContent="Đây là sự phản ánh có chọn lọc, định hướng, gắn liền với hoạt động thực tiễn. Ý thức không chỉ phản ánh cái đã có mà còn có thể tạo ra tri thức mới, dự báo tương lai, và sáng tạo ra những cái chưa từng có trong hiện thực."
              />
              <FlippingCard
                frontImage="/ban-chat-chu-quan.jpg"
                frontTitle="Hình Ảnh Chủ Quan Của Thế Giới Khách Quan"
                frontDescription="Nội dung của ý thức là khách quan, nhưng hình thức là chủ quan."
                backContent="Thế giới khách quan là nguồn gốc và quy định nội dung của ý thức. Tuy nhiên, hình ảnh đó khi được 'di chuyển' vào đầu óc đã được cải biến và mang đậm dấu ấn cá nhân, kinh nghiệm, cảm xúc, và điều kiện xã hội của chủ thể nhận thức."
              />
              <FlippingCard
                frontImage="/ban-chat-xa-hoi.jpg"
                frontTitle="Là Một Hiện Tượng Xã Hội - Lịch Sử"
                frontDescription="Ý thức ra đời và phát triển trong môi trường xã hội."
                backContent="Ý thức chỉ thực sự hình thành khi có sự tác động của lao động và ngôn ngữ. Nội dung và phương thức tư duy của con người ở mỗi thời đại đều chịu sự chi phối của các điều kiện tồn tại xã hội của thời đại đó."
              />
            </div>
          </div>

          {/* Infographic động Mối quan hệ Vật chất - Ý thức */}
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6 text-center">
              2.3. Mối quan hệ Vật chất - Ý thức
            </h3>
            <MoiQuanHeInfographic />
          </div>
        </div>
      </Section>

      {/* --- PHẦN 2: PHÉP BIỆN CHỨNG DUY VẬT --- */}
      <Section
        title="Phép Biện chứng Duy vật"
        subtitle="Phương pháp của sự vận động và phát triển"
      >
        {/* Nội dung chi tiết về Nguyên lý và Quy luật sẽ ở đây */}
        <div className="space-y-12">
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6 text-center">
              Hai Nguyên lý Cơ bản
            </h3>
            {/* Có thể phát triển thành component Slider/Carousel sau */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-surface p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-text-main mb-2">
                  1. Nguyên lý về Mối liên hệ phổ biến
                </h4>
                <p className="text-text-secondary">
                  Cho rằng mọi sự vật, hiện tượng trong thế giới đều tồn tại
                  trong sự tác động, ràng buộc, chuyển hóa lẫn nhau, không có sự
                  vật nào tồn tại biệt lập tuyệt đối. Ví dụ: Mối liên hệ giữa
                  kinh tế và chính trị, giữa cá nhân và xã hội.
                </p>
              </div>
              <div className="bg-surface p-6 rounded-lg">
                <h4 className="text-xl font-semibold text-text-main mb-2">
                  2. Nguyên lý về Sự phát triển
                </h4>
                <p className="text-text-secondary">
                  Cho rằng phát triển là một quá trình vận động đi lên từ thấp
                  đến cao, từ đơn giản đến phức tạp. Nguồn gốc của sự phát triển
                  nằm ngay trong bản thân sự vật, đó là quá trình giải quyết mâu
                  thuẫn nội tại.
                </p>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-accent mb-6 text-center">
              Ba Quy luật Cơ bản
            </h3>
            <BaQuyLuat />
          </div>
        </div>
      </Section>

      {/* --- PHẦN 3: VẬN DỤNG THỰC TIỄN --- */}
      <Section title="Vận dụng Thực tiễn" subtitle="Triết học không xa vời">
        <VanDungThucTien />
      </Section>
    </div>
  );
};

export default Chuong2Page;
