import { Routes, Route } from "react-router-dom";

import Login from "../pages/login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import CreateTest from "../pages/CreateTest/CreateTest";
import AddQuestions from "../pages/AddQuestions/AddQuestions";
import PreviewPublish from "../pages/PreviewPublish/PreviewPublish";

import ProtectedRoute from "./ProtectedRoute";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />

      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        }
      />

      <Route
        path="/create-test"
        element={
          <ProtectedRoute>
            <CreateTest />
          </ProtectedRoute>
        }
      />

      <Route
        path="/add-questions"
        element={
          <ProtectedRoute>
            <AddQuestions />
          </ProtectedRoute>
        }
      />

      <Route
        path="/preview-publish"
        element={
          <ProtectedRoute>
            <PreviewPublish />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}