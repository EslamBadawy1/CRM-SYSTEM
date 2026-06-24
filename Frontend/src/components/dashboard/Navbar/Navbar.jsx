import styles from "./Navbar.module.css";
import Logo from "../../../assets/images/logo.png";

function Navbar({ adminName = "SA", notifications = 0 }) {
  return (
    <nav className={`${styles.nav} d-flex justify-content-between align-items-center shadow-sm`}>

      {/* LOGO SECTION */}
      <div className={`${styles.parentImg} d-flex align-items-center gap-2`}>
        <img src={Logo} alt="CRM Logo" className={styles.Logo} />
        {/* <span className={styles.brandName}>CRM System</span> */}
      </div>

      {/* RIGHT SECTION */}
      <div className="d-flex align-items-center gap-4">

        {/* NOTIFICATION */}
        <div className={styles.notificationSection}>
          <i className="fa-solid fa-bell"></i>

          {notifications > 0 && (
            <span className={`${styles.countNoti} bg-danger text-white rounded-pill`}>
              {notifications}
            </span>
          )}
        </div>

        {/* ADMIN INFO */}
        <div className="d-flex align-items-center gap-2">

          <span className={styles.adminName}>{adminName}</span>

          <div className={styles.avatar}>
            {adminName === "SA"
              ? "SA"
              : adminName.charAt(0).toUpperCase()}
          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;