import { Routes, Route } from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import Home from "../pages/Home";
import CompleteProfile from "../pages/auth/CompleteProfile";
import ProtectedRoute from "../components/ProtectedRoute";

function App() {
  return (
    <Routes>
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/complete-profile" element={<CompleteProfile />} />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

export default App;
