import styles from "./RecentTasksWidget.module.css";

const RecentTasksWidget = () => {

  const tasks = [
    {
      title: "Follow up with Ahmed Ali",
      completed: true,
    },
    {
      title: "Review Leads Report",
      completed: false,
    },
    {
      title: "Approve New Agent",
      completed: true,
    },
    {
      title: "Contact New Customer",
      completed: false,
    },
  ];

  return (
    <div className={styles.widget}>

      <div className={styles.header}>
        <h3>Recent Tasks</h3>
        <span>Today's Activity</span>
      </div>

      <div className={styles.tasks}>

        {tasks.map((task, index) => (
          <div
            key={index}
            className={styles.task}
          >

            <div
              className={`${styles.status} ${
                task.completed
                  ? styles.completed
                  : styles.pending
              }`}
            />

            <span>{task.title}</span>

          </div>
        ))}

      </div>

    </div>
  );
};

export default RecentTasksWidget;