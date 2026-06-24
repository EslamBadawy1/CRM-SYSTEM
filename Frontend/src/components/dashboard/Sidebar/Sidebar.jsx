import { NavLink } from "react-router-dom";
import styles from "./Sidebar.module.css";

function Sidebar() {
 const links = [
  { title: "Dashboard", path: "" },
  { title: "Admins", path: "admins" },
  { title: "Agents", path: "agents" },
  { title: "Leads", path: "leads" },
  {title: "Tasks", path: "tasks"  },
  { title: "Reports", path: "reports" },
  { title: "Settings", path: "settings" },
];
  

  return (
    <aside className={`${styles.sidebar} min-vh-100 py-4`}>

      <div className="fw-semibold px-4 mb-4 fs-5">
        Super Admin
      </div>

      <nav>
        {links.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            end={item.path === ""}
            className={({ isActive }) =>
              `${styles.navItem} d-flex align-items-center gap-3 py-3 px-4 ${isActive ? styles.active : ""
              }`
            }
          >
            <i className={`fa-solid ${item.icon}`}></i>
            <span>{item.title}</span>
          </NavLink>
        ))}
      </nav>

    </aside>
  );
}

export default Sidebar;