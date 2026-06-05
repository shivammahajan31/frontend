// import { useForm } from "react-hook-form";
// import { useNavigate } from "react-router-dom";

// type FormData = {
//   testName: string;
//   subject: string;
//   difficulty: string;
//   testType: string;
//   totalTime: number;
//   totalMarks: number;
//   positiveMarks: number;
//   negativeMarks: number;
//   topics: string;
//   subTopics: string;
//   unattemptMarks: number;
// };

// export default function CreateTest() {
//   const navigate = useNavigate();

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm<FormData>();

//   const onSubmit = (data: FormData) => {
//     const existingTests = JSON.parse(
//       localStorage.getItem("tests") || "[]"
//     );

//     const newTest = {
//       id: Date.now(),
//       testName: data.testName,
//       subject: data.subject,
//       difficulty: data.difficulty,
//       testType: data.testType,
//       totalTime: data.totalTime,
//       totalMarks: data.totalMarks,
//       positiveMarks: data.positiveMarks,
//       negativeMarks: data.negativeMarks,
//       topics: data.topics,
//       subTopics: data.subTopics,
//       unattemptMarks: data.unattemptMarks,
//       status: "Draft",
//     };

//     existingTests.push(newTest);

//     localStorage.setItem(
//       "tests",
//       JSON.stringify(existingTests)
//     );

//     navigate("/add-questions");
//   };

//   return (
//     <div className="p-8">
//       <h1 className="text-3xl font-bold mb-6">
//         Create Test
//       </h1>

//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="space-y-4"
//       >
//         <input
//           {...register("testName", {
//             required: "Test Name is required",
//           })}
//           placeholder="Test Name"
//           className="border p-3 rounded w-full"
//         />

//         {errors.testName && (
//           <p className="text-red-500">
//             {errors.testName.message}
//           </p>
//         )}

//         <select
//           {...register("subject", {
//             required: "Subject is required",
//           })}
//           className="border p-3 rounded w-full"
//         >
//           <option value="">Select Subject</option>
//           <option value="Physics">Physics</option>
//           <option value="Mathematics">Mathematics</option>
//           <option value="Chemistry">Chemistry</option>
//         </select>

//         {errors.subject && (
//           <p className="text-red-500">
//             {errors.subject.message}
//           </p>
//         )}

//         <select
//           {...register("difficulty", {
//             required: "Difficulty is required",
//           })}
//           className="border p-3 rounded w-full"
//         >
//           <option value="">Select Difficulty</option>
//           <option value="Easy">Easy</option>
//           <option value="Medium">Medium</option>
//           <option value="Hard">Hard</option>
//         </select>

//         {errors.difficulty && (
//           <p className="text-red-500">
//             {errors.difficulty.message}
//           </p>
//         )}

//         <input
//           {...register("topics")}
//           placeholder="Topics (comma separated)"
//           className="border p-3 rounded w-full"
//         />

//         <input
//           {...register("subTopics")}
//           placeholder="Sub Topics (comma separated)"
//           className="border p-3 rounded w-full"
//         />

//         <select
//           {...register("testType")}
//           className="border p-3 rounded w-full"
//         >
//           <option value="">Select Test Type</option>
//           <option value="Practice">Practice</option>
//           <option value="Mock">Mock</option>
//           <option value="Exam">Exam</option>
//         </select>

//         <input
//           type="number"
//           {...register("totalTime")}
//           placeholder="Total Time (minutes)"
//           className="border p-3 rounded w-full"
//         />

//         <input
//           type="number"
//           {...register("totalMarks")}
//           placeholder="Total Marks"
//           className="border p-3 rounded w-full"
//         />

//         <input
//           type="number"
//           {...register("positiveMarks")}
//           placeholder="Positive Marks"
//           className="border p-3 rounded w-full"
//         />

//         <input
//           type="number"
//           {...register("negativeMarks")}
//           placeholder="Negative Marks"
//           className="border p-3 rounded w-full"
//         />

//         <input
//           type="number"
//           {...register("unattemptMarks")}
//           placeholder="Unattempt Marks"
//           className="border p-3 rounded w-full"
//         />

//         <button
//           type="submit"
//           className="bg-blue-600 text-white px-5 py-2 rounded"
//         >
//           Save & Add Questions
//         </button>
//       </form>
//     </div>
//   );
// }

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";


import logo from "../../assets/logo.png.svg";
import adminAvatar from "../../assets/admin-avatar.svg";

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
      <div className="w-64 bg-white border-r">
        <div className="p-6">
          <img
            src={logo}
            alt="logo"
            className="h-12"
          />
        </div>

        <div className="px-4 mt-6 space-y-2">
          <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100">
            Dashboard
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg bg-indigo-50 text-indigo-600 font-medium">
            Test Creation
          </button>

          <button className="w-full text-left px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100">
            Test Tracking
          </button>
        </div>
      </div>

      {/* Main Area */}
      <div className="flex-1">
        {/* Top Bar */}
        <div className="bg-white h-20 border-b flex items-center justify-between px-8">
          <div></div>

          <div className="flex items-center gap-4">
            <img
  src={adminAvatar}
  alt="Admin"
  className="w-12 h-12 rounded-full"
/>

            <div>
              <p className="font-semibold">
                shivam mahajan
              </p>
              <p className="text-xs text-gray-500">
                Admin
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          <p className="text-sm text-gray-500 mb-6">
            Test Creation / Create Test /
            Chapter Wise
          </p>

          {/* Tabs */}
          <div className="flex gap-2 mb-8">
            <button className="px-5 py-2 bg-indigo-50 text-indigo-600 rounded-md">
              Chapter Wise
            </button>

            <button className="px-5 py-2 border rounded-md text-gray-400">
              PYQ
            </button>

            <button className="px-5 py-2 border rounded-md text-gray-400">
              Mock Test
            </button>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-8"
          >
            {/* Row 1 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 text-sm">
                  Subject
                </label>

                <select
                  {...register("subject")}
                  className="w-full border rounded-lg p-3"
                >
                  <option value="">
                    Choose from Drop-down
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

              <div>
                <label className="block mb-2 text-sm">
                  Name of Test
                </label>

                <input
                  {...register("testName", {
                    required:
                      "Test Name is required",
                  })}
                  placeholder="Enter name of Test"
                  className="w-full border rounded-lg p-3"
                />

                {errors.testName && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.testName.message}
                  </p>
                )}
              </div>
            </div>

            {/* Row 2 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 text-sm">
                  Topic
                </label>

                <input
                  {...register("topics")}
                  placeholder="Choose from Drop-down"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm">
                  Sub Topic
                </label>

                <input
                  {...register("subTopics")}
                  placeholder="Choose from Drop-down"
                  className="w-full border rounded-lg p-3"
                />
              </div>
            </div>

            {/* Row 3 */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block mb-2 text-sm">
                  Duration (Minutes)
                </label>

                <input
                  type="number"
                  {...register("totalTime")}
                  placeholder="Enter the time"
                  className="w-full border rounded-lg p-3"
                />
              </div>

              <div>
                <label className="block mb-4 text-sm">
                  Test Difficulty Level
                </label>

                <div className="flex gap-10">
                  <label>
                    <input
                      type="radio"
                      value="Easy"
                      {...register(
                        "difficulty"
                      )}
                    />
                    <span className="ml-2">
                      Easy
                    </span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Medium"
                      {...register(
                        "difficulty"
                      )}
                    />
                    <span className="ml-2">
                      Medium
                    </span>
                  </label>

                  <label>
                    <input
                      type="radio"
                      value="Hard"
                      {...register(
                        "difficulty"
                      )}
                    />
                    <span className="ml-2">
                      Difficult
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Marking Scheme */}
            <div>
              <h3 className="font-medium mb-4">
                Marking Scheme:
              </h3>

              <div className="grid md:grid-cols-5 gap-6">
                <div>
                  <label className="block mb-2 text-sm">
                    Wrong Answer
                  </label>

                  <input
                    type="number"
                    {...register(
                      "negativeMarks"
                    )}
                    placeholder="-1"
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">
                    Unattempted
                  </label>

                  <input
                    type="number"
                    {...register(
                      "unattemptMarks"
                    )}
                    placeholder="+0"
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">
                    Correct Answer
                  </label>

                  <input
                    type="number"
                    {...register(
                      "positiveMarks"
                    )}
                    placeholder="+5"
                    className="w-full border rounded-lg p-3"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">
                    No of Questions
                  </label>

                  <input
                    type="number"
                    className="w-full border rounded-lg p-3"
                    placeholder="Ex: 50"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm">
                    Total Marks
                  </label>

                  <input
                    type="number"
                    {...register(
                      "totalMarks"
                    )}
                    placeholder="Ex: 250"
                    className="w-full border rounded-lg p-3"
                  />
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                className="px-8 py-3 bg-gray-100 rounded-lg"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="px-8 py-3 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600"
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