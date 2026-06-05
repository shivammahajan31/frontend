import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function Login() {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
const [password, setPassword] = useState("");
// const handleLogin = async () => {
//   try {
//     setLoading(true);

//     const response = await api.post("/auth/login", {
//       userId,
//       password,
//     });

//     console.log(response.data);

//     localStorage.setItem(
//       "token",
//       response.data.data.token
//     );

//     navigate("/dashboard");
//   } catch (error) {
//     console.error(error);
//     alert("Login failed");
//   } finally {
//     setLoading(false);
//   }
// }; 
const handleLogin = () => {
  if (!userId || !password) {
    alert("Please enter username and password");
    return;
  }

  localStorage.setItem("token", "dummy-token");

  navigate("/dashboard");
};

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-md w-96">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Preproute Login
        </h1>

        <input
  type="text"
  placeholder="Username"
  value={userId}
  onChange={(e) => setUserId(e.target.value)}
  className="w-full border p-3 rounded mb-4"
/>

        <input
  type="password"
  placeholder="Password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  className="w-full border p-3 rounded mb-4"
/>

        <button
          onClick={handleLogin}
          className="w-full bg-blue-600 text-white p-3 rounded"
        >
         
         Login
        </button>
      </div>
    </div>
  );
}