import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png.svg";
import adminAvatar from "../../assets/admin-avatar.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import questionIcon from "../../assets/question.svg";
import trackingIcon from "../../assets/tracking.svg";
import bellIcon from "../../assets/bell.svg";

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: string;
  explanation: string;
  difficulty: string;
  topic: string;
  subTopic: string;
  mediaUrl: string;
}

export default function PreviewPublish() {
  const navigate = useNavigate();

  const questions: Question[] = JSON.parse(
    localStorage.getItem("questions") || "[]"
  );

  const handlePublish = () => {
    alert("Test Published Successfully");
    navigate("/dashboard");
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty.toLowerCase()) {
      case "easy":
        return "bg-green-100 text-green-700";
      case "medium":
        return "bg-yellow-100 text-yellow-700";
      case "hard":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="min-h-screen bg-[#F7FBFF] flex">
      {/* Sidebar */}
      <div className="w-[260px] bg-white border-r border-gray-200 flex flex-col">
        <div className="p-6 border-b">
          <img
            src={logo}
            alt="logo"
            className="h-10"
          />
        </div>

        <div className="p-4 space-y-2">
          <button
            onClick={() => navigate("/dashboard")}
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100"
          >
            <img
              src={dashboardIcon}
              alt=""
              className="w-5 h-5"
            />
            Dashboard
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-50 text-indigo-600 font-medium">
            <img
              src={questionIcon}
              alt=""
              className="w-5 h-5"
            />
            Test Creation
          </button>

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100">
            <img
              src={trackingIcon}
              alt=""
              className="w-5 h-5"
            />
            Test Tracking
          </button>
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <div className="h-20 bg-white border-b flex items-center justify-end px-8 gap-6">
          <img
            src={bellIcon}
            alt="bell"
            className="w-6 h-6"
          />

          <div className="flex items-center gap-3">
            <img
              src={adminAvatar}
              alt="admin"
              className="w-11 h-11 rounded-full"
            />

            <div>
              <p className="font-semibold text-gray-800">
                Shivam Mahajan
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>
          </div>
        </div>

        {/* Page */}
        <div className="p-8">

          <p className="text-sm text-gray-400 mb-4">
            Test Creation / Preview & Publish
          </p>

          <h1 className="text-3xl font-semibold text-[#344054] mb-6">
            Preview & Publish
          </h1>

          {/* Summary */}
          <div className="grid md:grid-cols-3 gap-5 mb-8">

            <div className="bg-white border rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                Total Questions
              </p>

              <h2 className="text-4xl font-bold text-indigo-600 mt-2">
                {questions.length}
              </h2>
            </div>

            <div className="bg-white border rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                Status
              </p>

              <h2 className="text-2xl font-semibold text-orange-500 mt-2">
                Draft
              </h2>
            </div>

            <div className="bg-white border rounded-2xl p-6">
              <p className="text-gray-500 text-sm">
                Ready
              </p>

              <h2 className="text-2xl font-semibold text-green-600 mt-2">
                Yes
              </h2>
            </div>

          </div>

          {questions.length === 0 ? (
            <div className="bg-white rounded-2xl border p-16 text-center">
              <h2 className="text-2xl font-semibold">
                No Questions Added
              </h2>

              <button
                onClick={() =>
                  navigate("/add-questions")
                }
                className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-xl"
              >
                Add Questions
              </button>
            </div>
          ) : (
            <>
              <div className="space-y-6">

                {questions.map((q, index) => (
                  <div
                    key={index}
                    className="bg-white border rounded-2xl overflow-hidden"
                  >
                    <div className="bg-gray-50 border-b px-6 py-4 flex justify-between">
                      <h3 className="font-semibold">
                        Question {index + 1}
                      </h3>

                      <span
                        className={`px-3 py-1 rounded-full text-sm ${getDifficultyColor(
                          q.difficulty
                        )}`}
                      >
                        {q.difficulty}
                      </span>
                    </div>

                    <div className="p-6">

                      <h4 className="text-lg font-medium mb-5">
                        {q.question}
                      </h4>

                      <div className="grid md:grid-cols-2 gap-4">

                        <div className="border rounded-xl p-4">
                          A. {q.option1}
                        </div>

                        <div className="border rounded-xl p-4">
                          B. {q.option2}
                        </div>

                        <div className="border rounded-xl p-4">
                          C. {q.option3}
                        </div>

                        <div className="border rounded-xl p-4">
                          D. {q.option4}
                        </div>

                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mt-5">

                        <div className="bg-blue-50 p-4 rounded-xl">
                          <p className="text-xs text-gray-500">
                            Topic
                          </p>

                          <p>{q.topic}</p>
                        </div>

                        <div className="bg-purple-50 p-4 rounded-xl">
                          <p className="text-xs text-gray-500">
                            Sub Topic
                          </p>

                          <p>{q.subTopic}</p>
                        </div>

                        <div className="bg-green-50 p-4 rounded-xl">
                          <p className="text-xs text-gray-500">
                            Correct Answer
                          </p>

                          <p className="text-green-700 font-medium">
                            {q.correctOption}
                          </p>
                        </div>

                      </div>

                      {q.explanation && (
                        <div className="bg-gray-50 rounded-xl p-4 mt-5">
                          <h4 className="font-medium mb-2">
                            Explanation
                          </h4>

                          <p>{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}

              </div>

              <div className="bg-white border rounded-2xl p-8 mt-8">
                <div className="flex justify-end gap-4">

                  <button
                    onClick={() =>
                      navigate("/add-questions")
                    }
                    className="px-8 py-3 border rounded-xl"
                  >
                    Back
                  </button>

                  <button
                    onClick={handlePublish}
                    className="px-8 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-700"
                  >
                    Publish Test
                  </button>

                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}