import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png.svg";
import adminAvatar from "../../assets/admin-avatar.svg";
import dashboardIcon from "../../assets/dashboard.svg";
import questionIcon from "../../assets/question.svg";
import trackingIcon from "../../assets/tracking.svg";
import bellIcon from "../../assets/bell.svg";

type FormData = {
  testName: string;
  subject: string;
  difficulty: string;
  testType: string;
  totalTime: number;
  totalMarks: number;
  positiveMarks: number;
  negativeMarks: number;
  topics: string;
  subTopics: string;
  unattemptMarks: number;
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
      testName: data.testName,
      subject: data.subject,
      difficulty: data.difficulty,
      testType: data.testType,
      totalTime: data.totalTime,
      totalMarks: data.totalMarks,
      positiveMarks: data.positiveMarks,
      negativeMarks: data.negativeMarks,
      topics: data.topics,
      subTopics: data.subTopics,
      unattemptMarks: data.unattemptMarks,
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
    <div className="min-h-screen bg-[#F7FBFF] flex">
      {/* Sidebar */}
      <div className="w-[260px] bg-white border-r border-gray-200 flex flex-col">

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
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition"
          >
            <img
              src={dashboardIcon}
              alt=""
              className="w-5 h-5"
            />
            Dashboard
          </button>

          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-50 text-indigo-600 font-medium"
          >
            <img
              src={questionIcon}
              alt=""
              className="w-5 h-5"
            />
            Test Creation
          </button>

          <button
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100 transition"
          >
            <img
              src={trackingIcon}
              alt=""
              className="w-5 h-5"
            />
            Test Tracking
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">

        {/* Top Navbar */}
        <div className="h-20 bg-white border-b flex items-center justify-end px-8 gap-6">

          <img
            src={bellIcon}
            alt="bell"
            className="w-6 h-6 cursor-pointer"
          />

          <div className="flex items-center gap-3">
            <img
              src={adminAvatar}
              alt="admin"
              className="w-11 h-11 rounded-full"
            />

            <div>
              <p className="font-semibold text-gray-800">
                Shivam Mahajan
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">

          {/* Breadcrumb */}
          <p className="text-sm text-gray-400 mb-6">
            Test Creation / Create Test
          </p>

          {/* Tabs */}
          <div className="flex gap-3 mb-8">

            <button className="px-5 py-2 rounded-lg bg-indigo-50 text-indigo-600 font-medium">
              Chapter Wise
            </button>

            <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-500">
              PYQ
            </button>

            <button className="px-5 py-2 rounded-lg border border-gray-300 text-gray-500">
              Mock Test
            </button>

          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-2xl p-8 shadow-sm"
          >

            <div className="grid md:grid-cols-2 gap-8">

              {/* Subject */}
              <div>
                <label className="block mb-2 font-medium">
                  Subject
                </label>

                <select
                  {...register("subject", {
                    required: true,
                  })}
                  className="w-full border rounded-xl p-3"
                >
                  <option value="">
                    Select Subject
                  </option>

                  <option value="Physics">
                    Physics
                  </option>

                  <option value="Chemistry">
                    Chemistry
                  </option>

                  <option value="Mathematics">
                    Mathematics
                  </option>
                </select>
              </div>

              {/* Test Name */}
              <div>
                <label className="block mb-2 font-medium">
                  Test Name
                </label>

                <input
                  {...register("testName", {
                    required:
                      "Test Name is required",
                  })}
                  placeholder="Enter Test Name"
                  className="w-full border rounded-xl p-3"
                />

                {errors.testName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.testName.message}
                  </p>
                )}
              </div>

              {/* Topic */}
              <div>
                <label className="block mb-2 font-medium">
                  Topic
                </label>

                <input
                  {...register("topics")}
                  placeholder="Enter Topic"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              {/* Sub Topic */}
              <div>
                <label className="block mb-2 font-medium">
                  Sub Topic
                </label>

                <input
                  {...register("subTopics")}
                  placeholder="Enter Sub Topic"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              {/* Duration */}
              <div>
                <label className="block mb-2 font-medium">
                  Duration (Minutes)
                </label>

                <input
                  type="number"
                  {...register("totalTime")}
                  placeholder="60"
                  className="w-full border rounded-xl p-3"
                />
              </div>

              {/* Difficulty */}
              <div>
                <label className="block mb-2 font-medium">
                  Difficulty
                </label>

                <select
                  {...register("difficulty")}
                  className="w-full border rounded-xl p-3"
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
              </div>

            </div>

            {/* Marking Scheme */}
            <div className="mt-10">

              <h3 className="text-lg font-semibold mb-4">
                Marking Scheme
              </h3>

              <div className="grid md:grid-cols-4 gap-5">

                <input
                  type="number"
                  {...register("positiveMarks")}
                  placeholder="Positive Marks"
                  className="border rounded-xl p-3"
                />

                <input
                  type="number"
                  {...register("negativeMarks")}
                  placeholder="Negative Marks"
                  className="border rounded-xl p-3"
                />

                <input
                  type="number"
                  {...register("unattemptMarks")}
                  placeholder="Unattempted Marks"
                  className="border rounded-xl p-3"
                />

                <input
                  type="number"
                  {...register("totalMarks")}
                  placeholder="Total Marks"
                  className="border rounded-xl p-3"
                />

              </div>
            </div>

            {/* Footer Buttons */}
            <div className="flex justify-end gap-4 mt-10">

              <button
                type="button"
                onClick={() =>
                  navigate("/dashboard")
                }
                className="px-8 py-3 rounded-xl border"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-8 py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition"
              >
                Next
              </button>

            </div>

          </form>
        </div>
      </div>
    </div>
  );
}