import { Link } from "react-router-dom";
import styles from "./AdminDetails.module.css";

const AdminDetails = () => {
  const admin = {
    id: 1,
    name: "Mohamed Hassan",
    email: "mohamed@test.com",
    phone: "01012345678",
    role: "admin",
    status: "active",
    createdAt: "2026-06-20",
    updatedAt: "2026-06-24",
  };

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div>
          <h2>Admin Details</h2>
          <p>View administrator information</p>
        </div>

        <Link
          to="/admin/dashboard/admins"
          className={styles.backBtn}
        >
          Back
        </Link>
      </div>

      <div className={styles.card}>
        <div className={styles.row}>
          <span>Name</span>
          <strong>{admin.name}</strong>
        </div>

        <div className={styles.row}>
          <span>Email</span>
          <strong>{admin.email}</strong>
        </div>

        <div className={styles.row}>
          <span>Phone</span>
          <strong>{admin.phone}</strong>
        </div>

        <div className={styles.row}>
          <span>Role</span>
          <strong>{admin.role}</strong>
        </div>

        <div className={styles.row}>
          <span>Status</span>

          <strong
            className={
              admin.status === "active"
                ? styles.active
                : styles.inactive
            }
          >
            {admin.status}
          </strong>
        </div>

        <div className={styles.row}>
          <span>Created At</span>
          <strong>{admin.createdAt}</strong>
        </div>

        <div className={styles.row}>
          <span>Updated At</span>
          <strong>{admin.updatedAt}</strong>
        </div>
      </div>
    </div>
  );
};

export default AdminDetails;