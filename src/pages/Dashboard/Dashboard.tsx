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
    const savedTests = JSON.parse(
      localStorage.getItem("tests") || "[]"
    ) as Test[];

    setTests(savedTests);
  }, []);

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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <div className="flex gap-3">
          <button
            onClick={() => navigate("/create-test")}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Create Test
          </button>

          <button
            onClick={handleLogout}
            className="bg-red-600 text-white px-4 py-2 rounded-lg"
          >
            Logout
          </button>
        </div>
      </div>

      {tests.length === 0 ? (
        <div className="bg-white p-8 rounded-xl shadow text-center">
          <h2 className="text-xl font-semibold">
            No Tests Created Yet
          </h2>
        </div>
      ) : (
        <div className="grid gap-4">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow p-5"
            >
              <h2 className="text-xl font-semibold mb-3">
                {test.testName}
              </h2>

              <p>
                <strong>Subject:</strong>{" "}
                {test.subject}
              </p>

              <p>
                <strong>Difficulty:</strong>{" "}
                {test.difficulty}
              </p>

              <p>
                <strong>Test Type:</strong>{" "}
                {test.testType}
              </p>

              <p>
                <strong>Topics:</strong>{" "}
                {test.topics}
              </p>

              <p>
                <strong>Sub Topics:</strong>{" "}
                {test.subTopics}
              </p>

              <p>
                <strong>Total Time:</strong>{" "}
                {test.totalTime} mins
              </p>

              <p>
                <strong>Total Marks:</strong>{" "}
                {test.totalMarks}
              </p>

              <p>
                <strong>Correct Marks:</strong>{" "}
                {test.positiveMarks}
              </p>

              <p>
                <strong>Wrong Marks:</strong>{" "}
                {test.negativeMarks}
              </p>

              <p>
                <strong>Unattempt Marks:</strong>{" "}
                {test.unattemptMarks}
              </p>

              <span className="inline-block mt-3 bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                {test.status}
              </span>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() =>
                    navigate("/preview-publish")
                  }
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View
                </button>

                <button
                  onClick={() =>
                    navigate("/create-test")
                  }
                  className="bg-green-500 text-white px-3 py-1 rounded"
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    handleDelete(test.id)
                  }
                  className="bg-red-500 text-white px-3 py-1 rounded"
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