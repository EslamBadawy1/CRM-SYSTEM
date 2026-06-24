import { Routes, Route } from "react-router-dom";

import SuperAdminLayout from "../layout/SuperAdminLayout";
import CreateAdmin from "../admins/CreateAdmin";
import EditAdmin from "../admins/EditAdmin";
import AdminDetails from "../admins/AdminDetails";
import DashboardHome from "../dashboard/DashboardHome";
import Admins from "../admins/Admins";
import Agents from "../agents/Agents";
import Leads from "../leads/Leads";
import Tasks from '../TASKS/Task'
import Reports from "../reports/Reports";
import Settings from "../settings/Settings";

const SuperAdminRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<SuperAdminLayout />}>
        <Route index element={<DashboardHome />} />

        <Route path="admins" element={<Admins />} />
        <Route path="admins/create" element={<CreateAdmin />} />
        <Route path="admins/edit/:id" element={<EditAdmin />} />
        <Route path="admins/:id"element={<AdminDetails />}
/>
        <Route path="agents" element={<Agents />} />
        <Route path="leads" element={<Leads />} />
        <Route path="tasks" element={<Tasks />} />
        <Route path="reports" element={<Reports />} />
        <Route path="settings" element={<Settings />} />
      </Route>
    </Routes>
  );
};

export default SuperAdminRoutes;