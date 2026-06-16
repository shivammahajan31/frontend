import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png.svg";
import adminAvatar from "../../assets/admin-avatar.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import questionIcon from "../../assets/question.svg";
import trackingIcon from "../../assets/tracking.svg";
import bellIcon from "../../assets/bell.svg";
import chapterIcon from "../../assets/chapter-icon.svg";
import mcqIcon from "../../assets/mcq.svg";
import csvIcon from "../../assets/csv.svg";

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

  const [questions, setQuestions] = useState<Question[]>([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);

  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [correctOption, setCorrectOption] =
    useState("Option 1");
  const [explanation, setExplanation] =
    useState("");

  const clearForm = () => {
    setQuestion("");
    setOption1("");
    setOption2("");
    setOption3("");
    setOption4("");
    setCorrectOption("Option 1");
    setExplanation("");
    setEditingIndex(null);
  };

  const addQuestion = () => {
    if (
      !question.trim() ||
      !option1.trim() ||
      !option2.trim() ||
      !option3.trim() ||
      !option4.trim()
    ) {
      alert("Please fill all fields");
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
      difficulty: "Easy",
      topic: "Grammar",
      subTopic: "Application",
      mediaUrl: "",
    };

    if (editingIndex !== null) {
      const updated = [...questions];
      updated[editingIndex] = newQuestion;
      setQuestions(updated);
    } else {
      setQuestions([...questions, newQuestion]);
    }

    clearForm();
  };

  const editQuestion = (index: number) => {
    const q = questions[index];

    setQuestion(q.question);
    setOption1(q.option1);
    setOption2(q.option2);
    setOption3(q.option3);
    setOption4(q.option4);
    setCorrectOption(q.correctOption);
    setExplanation(q.explanation);

    setEditingIndex(index);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const deleteQuestion = (index: number) => {
    const updated = questions.filter(
      (_, i) => i !== index
    );

    setQuestions(updated);

    if (editingIndex === index) {
      clearForm();
    }
  };

  const saveQuestions = () => {
    if (questions.length === 0) {
      alert("Add at least one question");
      return;
    }

    localStorage.setItem(
      "questions",
      JSON.stringify(questions)
    );

    navigate("/preview-publish");
  };

  return (
    <div className="min-h-screen bg-[#F7F9FC] flex">
      {/* Sidebar */}
      <div className="w-[250px] bg-white border-r">
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

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-50 text-indigo-600">
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
      <div className="flex-1">
        {/* Topbar */}
        <div className="h-20 bg-white border-b flex justify-end items-center px-8 gap-5">
          <img
            src={bellIcon}
            alt=""
            className="w-5 h-5"
          />

          <div className="flex items-center gap-3">
            <img
              src={adminAvatar}
              alt=""
              className="w-12 h-12 rounded-full"
            />

            <div>
              <p className="font-semibold">
                Shivam Mahajan
              </p>
              <p className="text-xs text-gray-500">
                Admin
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Chapter Card */}
          <div className="bg-white border rounded-2xl p-6 mb-8">
            <div className="inline-flex bg-[#0F1558] text-white text-sm px-4 py-1 rounded-full mb-4">
              Chapter Wise
            </div>

            <div className="flex justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <img
                    src={chapterIcon}
                    alt=""
                    className="w-5 h-5"
                  />

                  <h2 className="text-xl font-bold">
                    Chapter 1
                  </h2>

                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs">
                    Easy
                  </span>
                </div>

                <p className="mt-3 text-gray-600">
                  Subject : English
                </p>

                <p className="mt-2 text-gray-600">
                  Topic :
                  <span className="ml-2 text-orange-500">
                    Grammar
                  </span>
                </p>

                <p className="mt-2 text-gray-600">
                  Sub Topic :
                  <span className="ml-2 text-orange-500">
                    Application
                  </span>
                </p>
              </div>

              <div className="flex gap-6 text-gray-500 items-end">
                <span>60 Min</span>
                <span>50 Q's</span>
                <span>250 Marks</span>
              </div>
            </div>
          </div>

          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-2xl font-bold">
              Question Form
            </h2>

            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <img
                  src={mcqIcon}
                  alt=""
                  className="w-4 h-4"
                />
                MCQ
              </button>

              <button className="flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-lg">
                <img
                  src={csvIcon}
                  alt=""
                  className="w-4 h-4"
                />
                CSV
              </button>
            </div>
          </div>

          {/* Form */}
          <div className="bg-white border rounded-2xl p-6">
            <textarea
              value={question}
              onChange={(e) =>
                setQuestion(e.target.value)
              }
              placeholder="Enter Question"
              className="w-full h-40 border rounded-xl p-4"
            />

            <div className="grid md:grid-cols-2 gap-4 mt-6">
              <input
                value={option1}
                onChange={(e) =>
                  setOption1(e.target.value)
                }
                placeholder="Option 1"
                className="border rounded-xl p-3"
              />

              <input
                value={option2}
                onChange={(e) =>
                  setOption2(e.target.value)
                }
                placeholder="Option 2"
                className="border rounded-xl p-3"
              />

              <input
                value={option3}
                onChange={(e) =>
                  setOption3(e.target.value)
                }
                placeholder="Option 3"
                className="border rounded-xl p-3"
              />

              <input
                value={option4}
                onChange={(e) =>
                  setOption4(e.target.value)
                }
                placeholder="Option 4"
                className="border rounded-xl p-3"
              />
            </div>

            <div className="mt-5">
              <label className="font-medium block mb-2">
                Correct Answer
              </label>

              <select
                value={correctOption}
                onChange={(e) =>
                  setCorrectOption(
                    e.target.value
                  )
                }
                className="w-full border rounded-xl p-3"
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
            </div>

            <textarea
              value={explanation}
              onChange={(e) =>
                setExplanation(
                  e.target.value
                )
              }
              placeholder="Explanation"
              className="w-full h-32 border rounded-xl p-4 mt-5"
            />

            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={addQuestion}
                className="bg-indigo-600 text-white px-8 py-3 rounded-xl"
              >
                {editingIndex !== null
                  ? "Update Question"
                  : "Add Question"}
              </button>

              <button
                type="button"
                onClick={clearForm}
                className="border px-8 py-3 rounded-xl"
              >
                Clear
              </button>
            </div>
          </div>

          {/* Added Questions */}
          {questions.length > 0 && (
            <div className="bg-white border rounded-2xl p-6 mt-8">
              <h2 className="text-xl font-bold mb-5">
                Added Questions ({questions.length})
              </h2>

              <div className="space-y-4">
                {questions.map((q, index) => (
                  <div
                    key={index}
                    className="border rounded-xl p-4"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-semibold">
                          {index + 1}.{" "}
                          {q.question}
                        </h3>

                        <p className="text-sm text-gray-500 mt-2">
                          Correct Answer :
                          {" "}
                          {q.correctOption}
                        </p>
                      </div>

                      <div className="flex gap-3">
                        <button
                          onClick={() =>
                            editQuestion(index)
                          }
                          className="text-blue-600"
                        >
                          Edit
                        </button>

                        <button
                          onClick={() =>
                            deleteQuestion(index)
                          }
                          className="text-red-600"
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex justify-end mt-8">
                <button
                  onClick={saveQuestions}
                  className="bg-green-600 text-white px-8 py-3 rounded-xl"
                >
                  Save & Continue
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}