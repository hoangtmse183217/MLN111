import React, { useState } from "react";
import { FaCheckCircle, FaTimesCircle, FaRedo } from "react-icons/fa";

// --- DỮ LIỆU CÂU HỎI TRẮC NGHIỆM ---
const quizData = [
  {
    id: 1,
    question:
      "Theo định nghĩa của V.I. Lênin, thuộc tính chung nhất và cơ bản nhất của vật chất là gì?",
    options: [
      "Tự vận động và biến đổi không ngừng",
      "Tồn tại khách quan, độc lập với ý thức",
      "Là thực tại được cấu thành từ nguyên tử",
      "Tồn tại vĩnh viễn, không được sinh ra và không mất đi",
    ],
    correctAnswer: 1,
    explanation:
      "Lênin định nghĩa: 'Vật chất là một phạm trù triết học dùng để chỉ thực tại khách quan...'. Do đó, 'tồn tại khách quan' là thuộc tính cơ bản nhất, dùng để phân biệt vật chất với ý thức.",
  },
  {
    id: 2,
    question:
      "Theo quan điểm của Chủ nghĩa duy vật biện chứng, yếu tố nào giữ vai trò quyết định trực tiếp cho sự ra đời của ý thức?",
    options: [
      "Bộ óc người và khả năng phản ánh của nó",
      "Sự tác động của thế giới tự nhiên",
      "Lao động và ngôn ngữ",
      "Sự phát triển của các loài linh trưởng",
    ],
    correctAnswer: 2,
    explanation:
      "Trong khi bộ óc và thế giới khách quan là nguồn gốc tự nhiên (điều kiện cần), thì lao động và ngôn ngữ mới là nguồn gốc xã hội, giữ vai trò quyết định trực tiếp sự hình thành và phát triển của ý thức.",
  },
  {
    id: 3,
    question:
      "Luận điểm nào sau đây thể hiện đúng nhất mối quan hệ giữa vật chất và ý thức?",
    options: [
      "Ý thức là sản phẩm của vật chất nhưng hoàn toàn thụ động.",
      "Vật chất và ý thức tồn tại song song, không liên quan đến nhau.",
      "Vật chất quyết định ý thức, và ý thức có thể tác động trở lại vật chất.",
      "Ý thức quyết định vật chất, tạo ra thế giới vật chất.",
    ],
    correctAnswer: 2,
    explanation:
      "Đây là nguyên tắc cốt lõi của CNDVBC. Vật chất là cái có trước và quyết định ý thức. Tuy nhiên, ý thức không thụ động mà có tính độc lập tương đối, có thể tác động trở lại vật chất thông qua hoạt động thực tiễn của con người.",
  },
  {
    id: 4,
    question:
      "Quy luật nào của phép biện chứng duy vật chỉ ra 'cách thức' của sự vận động và phát triển?",
    options: [
      "Quy luật Mâu thuẫn",
      "Quy luật Phủ định của Phủ định",
      "Quy luật Lượng - Chất",
      "Nguyên lý về mối liên hệ phổ biến",
    ],
    correctAnswer: 2,
    explanation:
      "Quy luật Lượng - Chất chỉ ra cách thức của sự phát triển: sự thay đổi về lượng dần dần sẽ dẫn đến sự thay đổi về chất tại một điểm nút. Quy luật Mâu thuẫn chỉ ra 'nguồn gốc', còn quy luật Phủ định của Phủ định chỉ ra 'khuynh hướng'.",
  },
  {
    id: 5,
    question:
      "Quan điểm nào sau đây thể hiện đúng nhất nội dung của Nguyên lý về mối liên hệ phổ biến?",
    options: [
      "Mọi sự vật, hiện tượng đều tồn tại trong sự tác động, ràng buộc, chuyển hóa lẫn nhau, không có gì tồn tại biệt lập tuyệt đối.",
      "Mỗi sự vật, hiện tượng tồn tại biệt lập, tách rời, không có sự liên quan hoặc chỉ có liên quan bề ngoài, ngẫu nhiên.",
      "Sự liên hệ giữa các sự vật là do một lực lượng siêu nhiên hay ý niệm tuyệt đối quy định.",
      "Chỉ những sự vật, hiện tượng cùng một lĩnh vực mới có mối liên hệ trực tiếp với nhau.",
    ],
    correctAnswer: 0,
    explanation:
      "Nguyên lý này khẳng định tính phổ biến của các mối liên hệ; xem xét thế giới như một chỉnh thể thống nhất, trong đó các sự vật, hiện tượng vừa tác động qua lại, vừa chuyển hóa lẫn nhau. Các quan điểm khác hoặc là của chủ nghĩa duy tâm (C), hoặc là của tư duy siêu hình (B), hoặc là phiến diện, không thấy được tính phổ biến của mối liên hệ (D).",
  },
  {
    id: 6,
    question:
      "Phép biện chứng duy vật khác về cơ bản so với phép biện chứng cổ đại ở điểm nào?",
    options: [
      "Thừa nhận thế giới vận động và biến đổi.",
      "Được xây dựng trên nền tảng khoa học và thực tiễn.",
      "Chỉ tập trung vào các yếu tố bên ngoài.",
      "Mang tính chất tự phát, ngây thơ, trực quan.",
    ],
    correctAnswer: 1,
    explanation:
      "Cả hai đều thừa nhận sự vận động, nhưng phép biện chứng cổ đại mang tính tự phát, trực quan. Phép biện chứng duy vật được xây dựng trên cơ sở tổng kết những thành tựu của khoa học tự nhiên và thực tiễn xã hội, do đó có tính khoa học và hệ thống.",
  },
  {
    id: 7,
    question:
      "Theo quy luật Mâu thuẫn, nguồn gốc, động lực của sự phát triển là gì?",
    options: [
      "Sự tác động từ bên ngoài sự vật.",
      "Sự thống nhất và đấu tranh của các mặt đối lập trong bản thân sự vật.",
      "Ý muốn chủ quan của con người.",
      "Sự loại bỏ hoàn toàn các mâu thuẫn.",
    ],
    correctAnswer: 1,
    explanation:
      "Quy luật Mâu thuẫn (hay quy luật thống nhất và đấu tranh của các mặt đối lập) được coi là 'hạt nhân' của phép biện chứng. Nó chỉ ra rằng chính mâu thuẫn nội tại trong lòng mỗi sự vật là nguồn gốc, động lực cho sự vận động và phát triển của nó.",
  },
  {
    id: 8,
    question:
      "Nguyên lý về sự phát triển cho rằng khuynh hướng chung của sự vật, hiện tượng là gì?",
    options: [
      "Vận động theo một vòng tròn lặp lại y hệt.",
      "Đi lên theo đường thẳng tắp.",
      "Vận động theo đường xoáy trôn ốc, có kế thừa và phát triển.",
      "Chỉ vận động mà không có sự phát triển thực sự.",
    ],
    correctAnswer: 2,
    explanation:
      "Sự phát triển không phải là một đường thẳng mà là một đường xoáy trôn ốc. Nó thể hiện tính chu kỳ (dường như lặp lại) nhưng ở một trình độ cao hơn, đồng thời thể hiện tính kế thừa (cái mới ra đời trên cơ sở cái cũ) và tính tiến lên của sự vận động.",
  },
  {
    id: 9,
    question:
      "Thực tiễn đóng vai trò gì đối với nhận thức theo quan điểm của CNDVBC?",
    options: [
      "Là nguồn gốc, động lực của nhận thức.",
      "Là mục đích của nhận thức.",
      "Là tiêu chuẩn để kiểm tra chân lý.",
      "Tất cả các phương án trên.",
    ],
    correctAnswer: 3,
    explanation:
      "Thực tiễn là cơ sở, động lực (con người cần nhận thức để cải tạo thế giới), là mục đích (nhận thức để phục vụ thực tiễn) và là tiêu chuẩn cao nhất để kiểm tra tính đúng đắn của tri thức. Một lý thuyết chỉ được coi là chân lý khi nó được thực tiễn kiểm nghiệm.",
  },
  {
    id: 10,
    question: "Đặc trưng cơ bản của phép biện chứng duy vật được thể hiện qua:",
    options: [
      "Hai nguyên lý, sáu cặp phạm trù, ba quy luật cơ bản.",
      "Quan điểm siêu hình, máy móc.",
      "Chủ nghĩa duy tâm khách quan.",
      "Thuyết không thể biết (bất khả tri).",
    ],
    correctAnswer: 0,
    explanation:
      "Cấu trúc của phép biện chứng duy vật được cấu thành từ hai nguyên lý cơ bản (về mối liên hệ phổ biến và về sự phát triển), sáu cặp phạm trù (cái riêng - cái chung, nguyên nhân - kết quả,...) và ba quy luật cơ bản (Lượng - Chất, Mâu thuẫn, Phủ định của Phủ định).",
  },
];

// --- COMPONENT CHÍNH CỦA TRANG BÀI TẬP ---
const BaiTapPage = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  const currentQuestion = quizData[currentQuestionIndex];

  const handleAnswerClick = (index) => {
    if (isAnswered) return; // Không cho chọn lại khi đã trả lời

    setSelectedAnswer(index);
    setIsAnswered(true);
    if (index === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quizData.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  // --- RENDER GIAO DIỆN ---

  if (showResults) {
    return (
      <div className="bg-surface p-8 rounded-lg border border-gray-700/50 text-center flex flex-col items-center">
        <h2 className="text-3xl font-bold text-accent mb-4">Hoàn thành!</h2>
        <p className="text-xl text-text-main mb-6">
          Bạn đã trả lời đúng {score} / {quizData.length} câu.
        </p>
        <button
          onClick={handleRestart}
          className="flex items-center gap-2 bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg shadow-glow-primary hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-300"
        >
          <FaRedo />
          Làm lại từ đầu
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-text-main text-center">
        <span className="text-primary">Bài Tập:</span> Vận Dụng Kiến Thức
      </h1>

      <div className="bg-surface p-6 md:p-8 rounded-lg border border-gray-700/50">
        {/* Progress Bar */}
        <div className="mb-6">
          <p className="text-sm font-semibold text-accent mb-2">
            Câu {currentQuestionIndex + 1} / {quizData.length}
          </p>
          <div className="w-full bg-background rounded-full h-2.5">
            <div
              className="bg-primary h-2.5 rounded-full transition-all duration-500"
              style={{
                width: `${
                  ((currentQuestionIndex + 1) / quizData.length) * 100
                }%`,
              }}
            ></div>
          </div>
        </div>

        {/* Question */}
        <h2 className="text-2xl font-semibold text-text-main mb-6">
          {currentQuestion.question}
        </h2>

        {/* Options */}
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => {
            const isSelected = selectedAnswer === index;
            const isCorrect = currentQuestion.correctAnswer === index;

            let buttonClass =
              "w-full text-left p-4 rounded-lg border-2 transition-all duration-300 flex items-center gap-4 text-lg ";
            if (isAnswered) {
              if (isCorrect) {
                buttonClass +=
                  "bg-green-500/20 border-green-500 text-text-main";
              } else if (isSelected && !isCorrect) {
                buttonClass += "bg-red-500/20 border-red-500 text-text-main";
              } else {
                buttonClass += "border-gray-600 opacity-60 cursor-not-allowed";
              }
            } else {
              buttonClass += isSelected
                ? "border-accent bg-accent/20"
                : "border-gray-600 hover:border-accent hover:bg-accent/10";
            }

            return (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                className={buttonClass}
                disabled={isAnswered}
              >
                {isAnswered && isCorrect && (
                  <FaCheckCircle className="text-green-500 flex-shrink-0" />
                )}
                {isAnswered && isSelected && !isCorrect && (
                  <FaTimesCircle className="text-red-500 flex-shrink-0" />
                )}
                <span>{option}</span>
              </button>
            );
          })}
        </div>

        {/* Explanation & Next Button */}
        {isAnswered && (
          <div className="mt-8 animate-fade-in">
            <div className="bg-background/50 border-l-4 border-accent p-4 rounded-r-lg">
              <h3 className="font-bold text-accent mb-2">Giải thích:</h3>
              <p className="text-text-secondary">
                {currentQuestion.explanation}
              </p>
            </div>
            <button
              onClick={handleNextQuestion}
              className="mt-6 w-full bg-primary text-white font-semibold py-3 px-8 rounded-lg shadow-lg hover:bg-red-600 transform hover:-translate-y-1 transition-all duration-300"
            >
              {currentQuestionIndex < quizData.length - 1
                ? "Câu tiếp theo"
                : "Xem kết quả"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default BaiTapPage;
