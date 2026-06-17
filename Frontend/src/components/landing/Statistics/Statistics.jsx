import styles from "./Statistics.module.css";

const Statistics = () => {
  const stats = [
    {
      icon: "fa-solid fa-users",
      value: "2,500+",
      title: "Happy Clients",
    },
    {
      icon: "fa-solid fa-chart-column",
      value: "15,000+",
      title: "Leads Managed",
    },
    {
      icon: "fa-regular fa-circle-check",
      value: "98%",
      title: "Success Rate",
    },
    {
      icon: "fa-regular fa-clock",
      value: "24/7",
      title: "Support",
    },
  ];

  return (
    <section className={styles.statistics}>
      <div className="container">
        <div className="row justify-content-center">

          {stats.map((item) => (
            <div
              key={item.title}
              className="col-lg-3 col-md-6"
            >
              <div className={styles.statItem}>

                <div className={styles.icon}>
                  <i className={item.icon}></i>
                </div>

                <div>
                  <h3>{item.value}</h3>
                  <p>{item.title}</p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Statistics;