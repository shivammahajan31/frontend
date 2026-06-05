import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

type FormData = {
  testName: string;
  subject: string;
  difficulty: string;
  testType: string;
  totalTime: number;
  totalMarks: number;
  positiveMarks: number;
  negativeMarks: number;
};

export default function CreateTest() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    const existingTests = JSON.parse(
      localStorage.getItem("tests") || "[]"
    );

    const newTest = {
      id: Date.now(),
      ...data,
      status: "Draft",
    };

    existingTests.push(newTest);

    localStorage.setItem(
      "tests",
      JSON.stringify(existingTests)
    );

    navigate("/add-questions");
  };

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-6">
        Create Test
      </h1>

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4"
      >
        <input
          {...register("testName", {
            required: "Test Name is required",
          })}
          placeholder="Test Name"
          className="border p-3 rounded w-full"
        />

        {errors.testName && (
          <p className="text-red-500">
            {errors.testName.message}
          </p>
        )}

        <select
          {...register("subject")}
          className="border p-3 rounded w-full"
        >
          <option value="">Select Subject</option>
          <option value="Physics">Physics</option>
          <option value="Mathematics">Mathematics</option>
          <option value="Chemistry">Chemistry</option>
        </select>

        <select
          {...register("difficulty")}
          className="border p-3 rounded w-full"
        >
          <option value="">Select Difficulty</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>

        <select
          {...register("testType")}
          className="border p-3 rounded w-full"
        >
          <option value="">Select Test Type</option>
          <option value="Practice">Practice</option>
          <option value="Mock">Mock</option>
          <option value="Exam">Exam</option>
        </select>

        <input
          type="number"
          {...register("totalTime")}
          placeholder="Total Time (minutes)"
          className="border p-3 rounded w-full"
        />

        <input
          type="number"
          {...register("totalMarks")}
          placeholder="Total Marks"
          className="border p-3 rounded w-full"
        />

        <input
          type="number"
          {...register("positiveMarks")}
          placeholder="Positive Marks"
          className="border p-3 rounded w-full"
        />

        <input
          type="number"
          {...register("negativeMarks")}
          placeholder="Negative Marks"
          className="border p-3 rounded w-full"
        />

        <button
          type="submit"
          className="bg-blue-600 text-white px-5 py-2 rounded"
        >
          Save & Add Questions
        </button>
      </form>
    </div>
  );
}