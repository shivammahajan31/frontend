// 
import api from "../../api/axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Test {
  id: number;
  testName: string;
  subject: string;
  difficulty: string;
  testType: string;
  totalTime: number;
  totalMarks: number;
  positiveMarks: number;
  negativeMarks: number;
  unattemptMarks: number;
  topics: string;
  subTopics: string;
  status: string;
}

export default function Dashboard() {
  const navigate = useNavigate();

  const [tests, setTests] = useState<Test[]>([]);

  useEffect(() => {
  fetchTests();
}, []);

const fetchTests = async () => {
  try {
    const response = await api.get("/tests");

    setTests(response.data.data);
  } catch (error) {
    console.error(error);
  }
};

  const handleDelete = (id: number) => {
    const updatedTests = tests.filter(
      (test) => test.id !== id
    );

    setTests(updatedTests);

    localStorage.setItem(
      "tests",
      JSON.stringify(updatedTests)
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const publishedCount = tests.filter(
    (test) => test.status === "Published"
  ).length;

  const draftCount = tests.length - publishedCount;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 p-6 md:p-10">
      {/* Header */}
      <div className="bg-white rounded-3xl shadow-lg p-6 md:p-8 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-5">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">
              Dashboard
            </h1>

            <p className="text-gray-500 mt-2">
              Manage, edit and publish your tests
            </p>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() =>
                navigate("/create-test")
              }
              className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:scale-105 transition-all duration-300"
            >
              + Create Test
            </button>

            <button
              onClick={handleLogout}
              className="bg-red-500 text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:bg-red-600 transition"
            >
              Logout
            </button>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-5 mb-8">
        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-gray-500">
            Total Tests
          </p>

          <h2 className="text-4xl font-bold text-blue-600 mt-2">
            {tests.length}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-gray-500">
            Published Tests
          </p>

          <h2 className="text-4xl font-bold text-green-600 mt-2">
            {publishedCount}
          </h2>
        </div>

        <div className="bg-white rounded-3xl shadow-lg p-6">
          <p className="text-gray-500">
            Draft Tests
          </p>

          <h2 className="text-4xl font-bold text-orange-500 mt-2">
            {draftCount}
          </h2>
        </div>
      </div>

      {/* Empty State */}
      {tests.length === 0 ? (
        <div className="bg-white rounded-3xl shadow-lg p-16 text-center">
          <div className="text-7xl mb-5">
            📝
          </div>

          <h2 className="text-3xl font-bold text-gray-700">
            No Tests Created Yet
          </h2>

          <p className="text-gray-500 mt-3">
            Create your first test and start
            managing assessments.
          </p>

          <button
            onClick={() =>
              navigate("/create-test")
            }
            className="mt-8 bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Create First Test
          </button>
        </div>
      ) : (
        <div className="grid gap-6">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <div className="p-6">
                {/* Title */}
                <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-800">
                      {test.testName}
                    </h2>

                    <p className="text-gray-500 mt-1">
                      {test.subject}
                    </p>
                  </div>

                  <span
                    className={`px-4 py-2 rounded-full text-sm font-medium w-fit ${
                      test.status ===
                      "Published"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {test.status}
                  </span>
                </div>

                {/* Details */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-6">
                  <div>
                    <p className="text-gray-400 text-sm">
                      Difficulty
                    </p>

                    <p className="font-semibold">
                      {test.difficulty}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Test Type
                    </p>

                    <p className="font-semibold">
                      {test.testType}
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Duration
                    </p>

                    <p className="font-semibold">
                      {test.totalTime} mins
                    </p>
                  </div>

                  <div>
                    <p className="text-gray-400 text-sm">
                      Total Marks
                    </p>

                    <p className="font-semibold">
                      {test.totalMarks}
                    </p>
                  </div>
                </div>

                {/* Marks */}
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  <div className="bg-green-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                      Correct Answer
                    </p>

                    <p className="font-bold text-green-600">
                      +{test.positiveMarks}
                    </p>
                  </div>

                  <div className="bg-red-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                      Wrong Answer
                    </p>

                    <p className="font-bold text-red-600">
                      {test.negativeMarks}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500">
                      Unattempted
                    </p>

                    <p className="font-bold text-gray-600">
                      {test.unattemptMarks}
                    </p>
                  </div>
                </div>

                {/* Topics */}
                <div className="mb-4">
                  <p className="font-semibold text-gray-700 mb-3">
                    Topics
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {test.topics
                      ?.split(",")
                      .map(
                        (
                          topic,
                          index
                        ) => (
                          <span
                            key={index}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm"
                          >
                            {topic.trim()}
                          </span>
                        )
                      )}
                  </div>
                </div>

                {/* Sub Topics */}
                {test.subTopics && (
                  <div className="mb-4">
                    <p className="font-semibold text-gray-700 mb-2">
                      Sub Topics
                    </p>

                    <p className="text-gray-600">
                      {test.subTopics}
                    </p>
                  </div>
                )}
              </div>

              {/* Actions */}
              <div className="border-t bg-gray-50 p-4 flex flex-wrap gap-3">
                <button
                  onClick={() =>
                    navigate(
                      "/preview-publish"
                    )
                  }
                  className="flex-1 min-w-[120px] bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition"
                >
                  View
                </button>

                <button
                  onClick={() =>
                    navigate(
                      "/create-test"
                    )
                  }
                  className="flex-1 min-w-[120px] bg-green-600 text-white py-3 rounded-xl hover:bg-green-700 transition"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(
                      test.id
                    )
                  }
                  className="flex-1 min-w-[120px] bg-red-600 text-white py-3 rounded-xl hover:bg-red-700 transition"
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}