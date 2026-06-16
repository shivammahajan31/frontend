// import { useState } from "react";
// import { useNavigate } from "react-router-dom";


// export default function Login() {
//   const navigate = useNavigate();
//   const [userId, setUserId] = useState("");
// const [password, setPassword] = useState("");
// // const handleLogin = async () => {
// //   try {
// //     setLoading(true);

// //     const response = await api.post("/auth/login", {
// //       userId,
// //       password,
// //     });

// //     console.log(response.data);

// //     localStorage.setItem(
// //       "token",
// //       response.data.data.token
// //     );

// //     navigate("/dashboard");
// //   } catch (error) {
// //     console.error(error);
// //     alert("Login failed");
// //   } finally {
// //     setLoading(false);
// //   }
// // }; 
// const handleLogin = () => {
//   if (!userId || !password) {
//     alert("Please enter username and password");
//     return;
//   }

//   localStorage.setItem("token", "dummy-token");

//   navigate("/dashboard");
// };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-xl shadow-md w-96">
//         <h1 className="text-3xl font-bold mb-6 text-center">
//           Preproute Login
//         </h1>

//         <input
//   type="text"
//   placeholder="Username"
//   value={userId}
//   onChange={(e) => setUserId(e.target.value)}
//   className="w-full border p-3 rounded mb-4"
// />

//         <input
//   type="password"
//   placeholder="Password"
//   value={password}
//   onChange={(e) => setPassword(e.target.value)}
//   className="w-full border p-3 rounded mb-4"
// />

//         <button
//           onClick={handleLogin}
//           className="w-full bg-blue-600 text-white p-3 rounded"
//         >
         
//          Login
//         </button>
//       </div>
//     </div>
//   );
// } 


// import api from "../../api/axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.png.svg";
import illustration from "../../assets/login-illustration.png.svg";

export default function Login() {
  const navigate = useNavigate();

  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

//  const handleLogin = async () => {
//   try {
//     const response = await api.post(
//       "/auth/login",
//       {
//         userId,
//         password,
//       }
//     );

//     console.log(response.data);

//     localStorage.setItem(
//       "token",
//       response.data.data.token
//     );

//     navigate("/dashboard");
//   } catch (error) {
//     console.error(error);
//     alert("Login Failed");
//   }
// };
// const handleLogin = async () => {
//   try {
//     const response = await api.post("/auth/login", {
//       userId: userId.trim(),
//       password: password.trim(),
//     });

//     console.log("SUCCESS:", response.data);

//     alert(JSON.stringify(response.data, null, 2));
//   } catch (error: any) {
//     console.log("FULL ERROR:", error);

//     if (error.response) {
//       console.log("STATUS:", error.response.status);
//       console.log("DATA:", error.response.data);
//     }

//     alert(error.message);
//   }
// };
const handleLogin = async () => {
  if (
    userId === "vedant-admin" &&
    password === "vedant123"
  ) {
    localStorage.setItem("token", "demo-token");

    navigate("/dashboard");
  } else {
    alert("Invalid Credentials");
  }
};

  return (
    <div className="min-h-screen bg-[#F7FBFF] flex items-center justify-center p-6">
      <div className="w-full max-w-[1320px] h-[850px] bg-white border border-[#DCE7F5] rounded-md flex overflow-hidden">

        {/* Left Section */}
        <div className="w-1/2 bg-[#EEF4FA] flex items-center justify-center">
          <img
            src={illustration}
            alt="illustration"
            className="w-[520px] object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="w-[420px]">

            <img
              src={logo}
              alt="logo"
              className="w-[170px] mb-10"
            />

            <h1 className="text-[28px] font-semibold text-[#1E293B] mb-2">
              Login
            </h1>

            <p className="text-[13px] text-[#6B7280] mb-8">
              Use your company provided Login credentials
            </p>

            {/* User ID */}
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              User ID
            </label>

            <input
              type="text"
              placeholder="Enter User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
              className="w-full h-[48px] border border-[#D1D5DB] rounded-md px-4 mb-6 outline-none focus:border-blue-500"
            />

            {/* Password */}
            <label className="block text-[14px] font-medium text-[#374151] mb-2">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full h-[48px] border border-[#D1D5DB] rounded-md px-4 mb-4 outline-none focus:border-blue-500"
            />

            <button
              type="button"
              className="text-[#4F7BF6] text-sm mb-8"
            >
              Forgot password?
            </button>

            <button
  onClick={handleLogin}
  disabled={!userId || !password}
  className="w-full h-[48px] bg-[#5A84F5] disabled:opacity-50 text-white rounded-md font-medium"
></button>

          </div>
        </div>

      </div>
    </div>
  );
}