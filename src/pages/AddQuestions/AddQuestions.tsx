import { useState } from "react";
import { useNavigate } from "react-router-dom";
export default function AddQuestions() {
  const navigate = useNavigate();
  const [question, setQuestion] = useState("");
const [option1, setOption1] = useState("");
const [option2, setOption2] = useState("");
const [option3, setOption3] = useState("");
const [option4, setOption4] = useState("");
const [correctOption, setCorrectOption] =
  useState("Option 1");

interface Question {
  question: string;
  option1: string;
  option2: string;
  option3: string;
  option4: string;
  correctOption: string;
}

const [questions, setQuestions] =
  useState<Question[]>([]);
  return (
    <div style={{ padding: "20px" }}>
      <h1>Add Questions</h1>

      <div style={{ marginBottom: "15px" }}>
        <label>Question</label>
        <br />
       <input
  type="text"
  placeholder="Enter Question"
  value={question}
  onChange={(e) =>
    setQuestion(e.target.value)
  }
  style={{
    width: "500px",
    padding: "8px",
  }}
/>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
  type="text"
  placeholder="Option 1"
  value={option1}
  onChange={(e) =>
    setOption1(e.target.value)
  }
  style={{
    width: "300px",
    padding: "8px",
  }}
/>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
  type="text"
  placeholder="Option 2"
  value={option2}
  onChange={(e) =>
    setOption2(e.target.value)
  }
  style={{
    width: "300px",
    padding: "8px",
  }}
/>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Option 3"
          value={option3}
          onChange={(e) =>
            setOption3(e.target.value)
          }
          style={{
            width: "300px",
            padding: "8px",
          }}
        />
      </div>

      <div style={{ marginBottom: "10px" }}>
        <input
          type="text"
          placeholder="Option 4"
          style={{ width: "300px", padding: "8px" }}
        />
      </div>

      <div style={{ marginBottom: "15px" }}>
        <label>Correct Option</label>
        <br />
        <select
  value={correctOption}
  onChange={(e) =>
    setCorrectOption(e.target.value)
  }
  style={{
    width: "200px",
    padding: "8px",
  }}
>
  <option value="Option 1">Option 1</option>
  <option value="Option 2">Option 2</option>
  <option value="Option 3">Option 3</option>
  <option value="Option 4">Option 4</option>
</select>
      </div>
      <button
  onClick={() => {
    const newQuestion = {
      question,
      option1,
      option2,
      option3,
      option4,
      correctOption,
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
  }}
  style={{
    marginRight: "10px",
  }}
>
  Add Question
</button>

<h2>Added Questions</h2>

{questions.map((q, index) => (
  <div
    key={index}
    style={{
      border: "1px solid gray",
      padding: "10px",
      marginBottom: "10px",
    }}
  >
    <strong>
      {index + 1}. {q.question}
    </strong>

    <p>{q.option1}</p>
    <p>{q.option2}</p>
    <p>{q.option3}</p>
    <p>{q.option4}</p>

    <p>
      Correct Answer:
      {q.correctOption}
    </p>
  </div>
))}

      <button
  onClick={() => {
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
  }}
>
  Save & Continue
</button>
    </div>
  );
}