import { useNavigate } from "react-router-dom";

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: string;
}

export default function PreviewPublish() {
  const navigate = useNavigate();

  const questions: Question[] = JSON.parse(
    localStorage.getItem("questions") || "[]"
  );

  const handlePublish = () => {
    alert("Test Published Successfully");

    localStorage.removeItem("questions");

    navigate("/dashboard");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Preview Test
      </h1>

      {questions.length === 0 ? (
        <p>No questions added yet.</p>
      ) : (
        questions.map((q, index) => (
          <div
            key={index}
            className="border rounded p-4 mb-4"
          >
            <h2 className="font-semibold">
              {index + 1}. {q.question}
            </h2>

            <p>A. {q.option1}</p>
            <p>B. {q.option2}</p>
            <p>C. {q.option3}</p>
            <p>D. {q.option4}</p>

            <p className="text-green-600 mt-2">
              Correct Answer: {q.correctOption}
            </p>
          </div>
        ))
      )}

      <button
        onClick={handlePublish}
        className="bg-green-600 text-white px-5 py-2 rounded mt-4"
      >
        Publish Test
      </button>
    </div>
  );
}