import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Test {
  id: number;
  testName: string;
  subject: string;
  difficulty: string;
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

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">
          Dashboard
        </h1>

        <button
          onClick={() => navigate("/create-test")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Create Test
        </button>
      </div>

      {tests.length === 0 ? (
        <div className="bg-white p-6 rounded shadow">
          No Tests Created Yet
        </div>
      ) : (
        <div className="grid gap-4">
          {tests.map((test) => (
            <div
              key={test.id}
              className="bg-white rounded-xl shadow p-5"
            >
              <h2 className="text-xl font-semibold">
                {test.testName}
              </h2>

              <p>
                Subject: {test.subject}
              </p>

              <p>
                Difficulty: {test.difficulty}
              </p>

              <span className="inline-block mt-2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded">
                {test.status}
              </span>

              <div className="flex gap-2 mt-4">
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                  View
                </button>

                <button
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