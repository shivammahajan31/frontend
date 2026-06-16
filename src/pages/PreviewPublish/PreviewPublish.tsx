// 
import { useNavigate } from "react-router-dom";

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
    alert("🎉 Test Published Successfully");
    navigate("/dashboard");
  };

  const getDifficultyColor = (
    difficulty: string
  ) => {
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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 md:p-10">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Preview Test
            </h1>

            <p className="text-gray-500 mt-2">
              Review all questions before
              publishing the test.
            </p>
          </div>

          <button
            onClick={() =>
              navigate("/dashboard")
            }
            className="bg-gray-200 hover:bg-gray-300 px-5 py-3 rounded-xl font-medium transition"
          >
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="bg-white rounded-3xl shadow-lg p-6 mb-8">
        <p className="text-gray-500">
          Total Questions
        </p>

        <h2 className="text-4xl font-bold text-blue-600 mt-2">
          {questions.length}
        </h2>
      </div>

      {/* Empty State */}
      {questions.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
          <div className="text-7xl mb-5">
            📚
          </div>

          <h2 className="text-3xl font-bold text-gray-700">
            No Questions Added
          </h2>

          <p className="text-gray-500 mt-3">
            Add questions before previewing
            your test.
          </p>

          <button
            onClick={() =>
              navigate("/create-test")
            }
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Create Questions
          </button>
        </div>
      ) : (
        <>
          <div className="space-y-6">
            {questions.map(
              (q, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
                >
                  {/* Card Header */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-5">
                    <div className="flex justify-between items-center flex-wrap gap-3">
                      <h2 className="text-xl font-semibold">
                        Question{" "}
                        {index + 1}
                      </h2>

                      <span
                        className={`px-4 py-1 rounded-full text-sm font-medium ${getDifficultyColor(
                          q.difficulty
                        )}`}
                      >
                        {q.difficulty}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-5">
                      {q.question}
                    </h3>

                    {/* Options */}
                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div
                        className={`p-4 rounded-xl border ${
                          q.correctOption ===
                          q.option1
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200"
                        }`}
                      >
                        <strong>
                          A.
                        </strong>{" "}
                        {q.option1}
                      </div>

                      <div
                        className={`p-4 rounded-xl border ${
                          q.correctOption ===
                          q.option2
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200"
                        }`}
                      >
                        <strong>
                          B.
                        </strong>{" "}
                        {q.option2}
                      </div>

                      <div
                        className={`p-4 rounded-xl border ${
                          q.correctOption ===
                          q.option3
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200"
                        }`}
                      >
                        <strong>
                          C.
                        </strong>{" "}
                        {q.option3}
                      </div>

                      <div
                        className={`p-4 rounded-xl border ${
                          q.correctOption ===
                          q.option4
                            ? "border-green-500 bg-green-50"
                            : "border-gray-200"
                        }`}
                      >
                        <strong>
                          D.
                        </strong>{" "}
                        {q.option4}
                      </div>
                    </div>

                    {/* Metadata */}
                    <div className="grid md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">
                          Topic
                        </p>

                        <p className="font-semibold">
                          {q.topic}
                        </p>
                      </div>

                      <div className="bg-purple-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">
                          Sub Topic
                        </p>

                        <p className="font-semibold">
                          {q.subTopic}
                        </p>
                      </div>

                      <div className="bg-green-50 rounded-xl p-4">
                        <p className="text-sm text-gray-500">
                          Correct Answer
                        </p>

                        <p className="font-semibold text-green-600">
                          {
                            q.correctOption
                          }
                        </p>
                      </div>
                    </div>

                    {/* Explanation */}
                    <div className="bg-gray-50 rounded-xl p-5">
                      <h4 className="font-semibold text-gray-800 mb-2">
                        Explanation
                      </h4>

                      <p className="text-gray-600">
                        {q.explanation}
                      </p>
                    </div>

                    {/* Media */}
                    {q.mediaUrl && (
                      <div className="mt-5">
                        <a
                          href={
                            q.mediaUrl
                          }
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-xl hover:bg-blue-200 transition"
                        >
                          📎 Open
                          Attached
                          Media
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              )
            )}
          </div>

          {/* Publish Section */}
          <div className="mt-10 bg-white rounded-3xl shadow-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">
              Ready to Publish?
            </h2>

            <p className="text-gray-500 mb-6">
              Your test contains{" "}
              {
                questions.length
              }{" "}
              questions and is ready
              for students.
            </p>

            <button
              onClick={handlePublish}
              className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-10 py-4 rounded-2xl text-lg font-semibold shadow-lg hover:scale-105 transition-all duration-300"
            >
              🚀 Publish Test
            </button>
          </div>
        </>
      )}
    </div>
  );
}