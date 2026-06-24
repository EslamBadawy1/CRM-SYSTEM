import { Outlet } from "react-router-dom";
import Navbar from "../../../components/dashboard/Navbar/Navbar";
import Sidebar from "../../../components/dashboard/Sidebar/Sidebar";
import styles from "./SuperAdminLayout.module.css";

const SuperAdminLayout = () => {
  return (
    <div className={styles.layout}>
      <Navbar />

      <div className={styles.body}>
        <Sidebar />

        <div className={styles.content}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default SuperAdminLayout;