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
    alert("Test Published Successfully");

    navigate("/dashboard");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Preview Test
      </h1>

      {questions.length === 0 ? (
        <div className="bg-white p-4 rounded shadow">
          No questions added yet.
        </div>
      ) : (
        questions.map((q, index) => (
          <div
            key={index}
            className="border rounded p-4 mb-4 bg-white shadow"
          >
            <h2 className="font-semibold text-lg mb-3">
              {index + 1}. {q.question}
            </h2>

            <p>A. {q.option1}</p>
            <p>B. {q.option2}</p>
            <p>C. {q.option3}</p>
            <p>D. {q.option4}</p>

            <p className="text-green-600 mt-3">
              <strong>Correct Answer:</strong>{" "}
              {q.correctOption}
            </p>

            <p>
              <strong>Difficulty:</strong>{" "}
              {q.difficulty}
            </p>

            <p>
              <strong>Topic:</strong>{" "}
              {q.topic}
            </p>

            <p>
              <strong>Sub Topic:</strong>{" "}
              {q.subTopic}
            </p>

            <p>
              <strong>Explanation:</strong>{" "}
              {q.explanation}
            </p>

            {q.mediaUrl && (
              <p>
                <strong>Media URL:</strong>{" "}
                <a
                  href={q.mediaUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 underline"
                >
                  Open Media
                </a>
              </p>
            )}
          </div>
        ))
      )}

      {questions.length > 0 && (
        <button
          onClick={handlePublish}
          className="bg-green-600 text-white px-5 py-2 rounded mt-4"
        >
          Publish Test
        </button>
      )}
    </div>
  );
}