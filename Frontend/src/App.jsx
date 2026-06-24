import { Routes, Route } from "react-router-dom";

import LandingPage from "./pages/LandingPage/LandingPage";
import Login from "./pages/Login/Login";

import SuperAdminRoutes from "./pages/super-admin/routes/SuperAdminRoutes";

function App() {
  return (
    <Routes>

      {/* Public */}
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<Login />} />

      {/* Super Admin Dashboard */}
      <Route path="/admin/dashboard/*" element={<SuperAdminRoutes />} />

    </Routes>
  );
}

export default App;