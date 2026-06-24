import { useEffect, useState } from "react";
import styles from "./FormDashboard.module.css";

const FormDashboard = ({
  mode = "create",
  initialData = null,
  defaultRole = "admin",
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: defaultRole,
    status: "active",
  });

  useEffect(() => {
    if (mode === "edit" && initialData) {
      setFormData({
        name: initialData.name || "",
        email: initialData.email || "",
        phone: initialData.phone || "",
        password: "",
        confirmPassword: "",
        role: initialData.role || defaultRole,
        status: initialData.status || "active",
      });
    }
  }, [mode, initialData, defaultRole]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      mode === "create" &&
      formData.password !== formData.confirmPassword
    ) {
      alert("Passwords do not match");
      return;
    }

    console.log(formData);

    // Backend Later
    // createUser(formData)
  };

  return (
    <div className={styles.formContainer}>
      <form
        onSubmit={handleSubmit}
        className={styles.form}
        autoComplete="off"
      >
        <h2 className={styles.title}>
          {mode === "create" ? "Create Admin" : "Edit Admin"}
        </h2>

        <div className={styles.grid}>
          {/* Name */}
          <div className={styles.formGroup}>
            <label>Name</label>

            <input
              type="text"
              name="name"
              autoComplete="off"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter Name"
              required
            />
          </div>

          {/* Email */}
          <div className={styles.formGroup}>
            <label>Email</label>

            <input
              type="email"
              name="email"
              autoComplete="off"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter Email"
              required
            />
          </div>

          {/* Phone */}
          <div className={styles.formGroup}>
            <label>Phone</label>

            <input
              type="text"
              name="phone"
              autoComplete="off"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter Phone"
            />
          </div>

          {/* Role */}
          <div className={styles.formGroup}>
            <label>Role</label>

            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
            >
              <option value="admin">Admin</option>
              <option value="agent">Agent</option>
            </select>
          </div>

          {/* Password */}
          <div className={styles.formGroup}>
            <label>Password</label>

            <input
              type="password"
              name="password"
              autoComplete="new-password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter Password"
              required={mode === "create"}
            />
          </div>

          {/* Confirm Password */}
          <div className={styles.formGroup}>
            <label>Confirm Password</label>

            <input
              type="password"
              name="confirmPassword"
              autoComplete="new-password"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm Password"
              required={mode === "create"}
            />
          </div>




          {/* Status */}
          <div className={styles.formGroup}>
            <label>Status</label>

            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              disabled={mode === "create"}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>

        </div> {/* نهاية grid */}

        <button type="submit" className={styles.submitBtn}>
          {mode === "create" ? "Create Admin" : "Update Admin"}
        </button>
      </form>
    </div>
  );
};

export default FormDashboard;