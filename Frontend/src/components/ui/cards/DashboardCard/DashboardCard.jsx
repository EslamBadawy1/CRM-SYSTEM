import styles from "./DashboardCard.module.css";

const DashboardCard = ({ title, value, icon }) => {
  return (
    <div className={styles.card}>

      <div className={styles.icon}>
        <i className={icon}></i>
      </div>

      <div className={styles.info}>
        <span className={styles.value}>
          {value}
        </span>

        <span className={styles.title}>
          {title}
        </span>
      </div>

    </div>
  );
};

export default DashboardCard;