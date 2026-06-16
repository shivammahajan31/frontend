import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png.svg";
import avatar from "../../assets/admin-avatar.svg";

import dashboardIcon from "../../assets/dashboard.svg";
import questionIcon from "../../assets/question.svg";
import trackingIcon from "../../assets/tracking.svg";
import bellIcon from "../../assets/bell.svg";

export default function Dashboard() {
  const navigate = useNavigate();

  const tests = JSON.parse(
    localStorage.getItem("tests") || "[]"
  );

  const questions = JSON.parse(
    localStorage.getItem("questions") || "[]"
  );

  const totalTests = tests.length;

  const publishedTests = tests.filter(
    (test: any) => test.status === "Published"
  ).length;

  const draftTests = totalTests - publishedTests;

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="flex min-h-screen bg-[#F7FBFF]">
      {/* SIDEBAR */}
      <div className="w-[260px] bg-white border-r border-gray-200">

        <div className="p-6 border-b">
          <img
            src={logo}
            alt="logo"
            className="h-10"
          />
        </div>

        <div className="p-4 space-y-2">

          <button className="w-full flex items-center gap-3 px-4 py-3 rounded-xl bg-indigo-50 text-indigo-600 font-medium">
            <img
              src={dashboardIcon}
              alt=""
              className="w-5 h-5"
            />
            Dashboard
          </button>

          <button
            onClick={() =>
              navigate("/create-test")
            }
            className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-100"
          >
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

      {/* MAIN */}
      <div className="flex-1">

        {/* TOPBAR */}
        <div className="h-20 bg-white border-b flex justify-end items-center px-8 gap-5">

          <img
            src={bellIcon}
            alt=""
            className="w-6 h-6 cursor-pointer"
          />

          <div className="flex items-center gap-3">

            <img
              src={avatar}
              alt=""
              className="w-11 h-11 rounded-full"
            />

            <div>
              <p className="font-semibold">
                Shivam Mahajan
              </p>

              <p className="text-xs text-gray-500">
                Administrator
              </p>
            </div>

          </div>

        </div>

        {/* CONTENT */}
        <div className="p-8">

          <h1 className="text-3xl font-semibold text-gray-800">
            Dashboard
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome to Preproute Test Management
            System
          </p>

          {/* STATS */}
          <div className="grid md:grid-cols-4 gap-6 mt-8">

            <div className="bg-white rounded-2xl border p-6">
              <p className="text-gray-500">
                Total Tests
              </p>

              <h2 className="text-4xl font-bold text-indigo-600 mt-3">
                {totalTests}
              </h2>
            </div>

            <div className="bg-white rounded-2xl border p-6">
              <p className="text-gray-500">
                Published Tests
              </p>

              <h2 className="text-4xl font-bold text-green-600 mt-3">
                {publishedTests}
              </h2>
            </div>

            <div className="bg-white rounded-2xl border p-6">
              <p className="text-gray-500">
                Draft Tests
              </p>

              <h2 className="text-4xl font-bold text-orange-500 mt-3">
                {draftTests}
              </h2>
            </div>

            <div className="bg-white rounded-2xl border p-6">
              <p className="text-gray-500">
                Total Questions
              </p>

              <h2 className="text-4xl font-bold text-blue-600 mt-3">
                {questions.length}
              </h2>
            </div>

          </div>

          {/* QUICK ACTIONS */}
          <div className="bg-white rounded-2xl border p-8 mt-8">

            <h2 className="text-xl font-semibold mb-5">
              Quick Actions
            </h2>

            <div className="flex gap-4">

              <button
                onClick={() =>
                  navigate("/create-test")
                }
                className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-3 rounded-xl"
              >
                Create Test
              </button>

              <button
                onClick={() =>
                  navigate("/add-questions")
                }
                className="border px-6 py-3 rounded-xl"
              >
                Add Questions
              </button>

              <button
                onClick={handleLogout}
                className="border px-6 py-3 rounded-xl"
              >
                Logout
              </button>

            </div>

          </div>

          {/* RECENT ACTIVITY */}
          <div className="bg-white rounded-2xl border p-8 mt-8">

            <h2 className="text-xl font-semibold mb-4">
              Recent Activity
            </h2>

            {tests.length === 0 ? (
              <p className="text-gray-500">
                No tests created yet.
              </p>
            ) : (
              <div className="space-y-3">

                {tests
                  .slice(-5)
                  .reverse()
                  .map(
                    (
                      test: any,
                      index: number
                    ) => (
                      <div
                        key={index}
                        className="flex justify-between border-b pb-3"
                      >
                        <span>
                          {test.testName}
                        </span>

                        <span className="text-gray-500">
                          {test.status}
                        </span>
                      </div>
                    )
                  )}

              </div>
            )}

          </div>

        </div>
      </div>
    </div>
  );
}