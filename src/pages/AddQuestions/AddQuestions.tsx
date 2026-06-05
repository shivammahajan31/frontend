import { useState } from "react";
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

export default function AddQuestions() {
  const navigate = useNavigate();

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");

  const [correctOption, setCorrectOption] =
    useState("Option 1");

  const [explanation, setExplanation] =
    useState("");

  const [difficulty, setDifficulty] =
    useState("Easy");

  const [topic, setTopic] = useState("");

  const [subTopic, setSubTopic] =
    useState("");

  const [mediaUrl, setMediaUrl] =
    useState("");

  const [questions, setQuestions] =
    useState<Question[]>([]);

  const addQuestion = () => {
    if (!question) {
      alert("Please enter question");
      return;
    }

    const newQuestion: Question = {
      question,
      option1,
      option2,
      option3,
      option4,
      correctOption,
      explanation,
      difficulty,
      topic,
      subTopic,
      mediaUrl,
    };

    setQuestions([
      ...questions,
      newQuestion,
    ]);

    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setExplanation("");
    setTopic("");
    setSubTopic("");
    setMediaUrl("");
    setDifficulty("Easy");
    setCorrectOption("Option 1");
  };

  const deleteQuestion = (
    indexToDelete: number
  ) => {
    const updatedQuestions =
      questions.filter(
        (_, index) =>
          index !== indexToDelete
      );

    setQuestions(updatedQuestions);
  };

  const saveQuestions = () => {
    if (questions.length === 0) {
      alert(
        "Please add at least one question"
      );
      return;
    }

    localStorage.setItem(
      "questions",
      JSON.stringify(questions)
    );

    navigate("/preview-publish");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Add Questions
      </h1>

      <div className="space-y-3">

        <input
          type="text"
          placeholder="Question"
          value={question}
          onChange={(e) =>
            setQuestion(e.target.value)
          }
          className="border p-3 rounded w-full"
        />

        <input
          type="text"
          placeholder="Option 1"
          value={option1}
          onChange={(e) =>
            setOption1(e.target.value)
          }
          className="border p-3 rounded w-full"
        />

        <input
          type="text"
          placeholder="Option 2"
          value={option2}
          onChange={(e) =>
            setOption2(e.target.value)
          }
          className="border p-3 rounded w-full"
        />

        <input
          type="text"
          placeholder="Option 3"
          value={option3}
          onChange={(e) =>
            setOption3(e.target.value)
          }
          className="border p-3 rounded w-full"
        />

        <input
          type="text"
          placeholder="Option 4"
          value={option4}
          onChange={(e) =>
            setOption4(e.target.value)
          }
          className="border p-3 rounded w-full"
        />

        <select
          value={correctOption}
          onChange={(e) =>
            setCorrectOption(
              e.target.value
            )
          }
          className="border p-3 rounded w-full"
        >
          <option value="Option 1">
            Option 1
          </option>
          <option value="Option 2">
            Option 2
          </option>
          <option value="Option 3">
            Option 3
          </option>
          <option value="Option 4">
            Option 4
          </option>
        </select>

        <textarea
          placeholder="Explanation"
          value={explanation}
          onChange={(e) =>
            setExplanation(
              e.target.value
            )
          }
          className="border p-3 rounded w-full"
        />

        <select
          value={difficulty}
          onChange={(e) =>
            setDifficulty(
              e.target.value
            )
          }
          className="border p-3 rounded w-full"
        >
          <option value="Easy">
            Easy
          </option>
          <option value="Medium">
            Medium
          </option>
          <option value="Hard">
            Hard
          </option>
        </select>

        <input
          type="text"
          placeholder="Topic"
          value={topic}
          onChange={(e) =>
            setTopic(e.target.value)
          }
          className="border p-3 rounded w-full"
        />

        <input
          type="text"
          placeholder="Sub Topic"
          value={subTopic}
          onChange={(e) =>
            setSubTopic(
              e.target.value
            )
          }
          className="border p-3 rounded w-full"
        />

        <input
          type="text"
          placeholder="Media URL"
          value={mediaUrl}
          onChange={(e) =>
            setMediaUrl(
              e.target.value
            )
          }
          className="border p-3 rounded w-full"
        />

        <button
          onClick={addQuestion}
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Add Question
        </button>
      </div>

      <h2 className="text-2xl font-bold mt-8 mb-4">
        Added Questions
      </h2>

      {questions.map((q, index) => (
        <div
          key={index}
          className="border rounded p-4 mb-4"
        >
          <h3>
            {index + 1}. {q.question}
          </h3>

          <p>A. {q.option1}</p>
          <p>B. {q.option2}</p>
          <p>C. {q.option3}</p>
          <p>D. {q.option4}</p>

          <p>
            <strong>
              Correct:
            </strong>{" "}
            {q.correctOption}
          </p>

          <p>
            <strong>
              Difficulty:
            </strong>{" "}
            {q.difficulty}
          </p>

          <p>
            <strong>
              Topic:
            </strong>{" "}
            {q.topic}
          </p>

          <p>
            <strong>
              Sub Topic:
            </strong>{" "}
            {q.subTopic}
          </p>

          <button
            onClick={() =>
              deleteQuestion(index)
            }
            className="bg-red-600 text-white px-3 py-1 rounded mt-2"
          >
            Delete
          </button>
        </div>
      ))}

      <button
        onClick={saveQuestions}
        className="bg-green-600 text-white px-5 py-2 rounded mt-4"
      >
        Save & Continue
      </button>
    </div>
  );
}