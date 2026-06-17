 import styles from "./Features.module.css";

const Features = () => {
  const features = [
    {
      icon: "fa-solid fa-users",
      title: "Lead Management",
      description:
        "Capture and manage customer leads efficiently.",
    },

    {
      icon: "fa-solid fa-user-tie",
      title: "Agent Management",
      description:
        "Assign and monitor agents performance.",
    },

    {
      icon: "fa-solid fa-list-check",
      title: "Task Follow-ups",
      description:
        "Schedule and track follow-up tasks easily.",
    },

    {
      icon: "fa-solid fa-chart-line",
      title: "Reports & Analytics",
      description:
        "Track conversions and business growth.",
    },
  ];

  return (
    <section id="features" className={styles.features}>
      <div className="container">

        <div className={styles.sectionHeader}>
          <h2>Powerful CRM Features</h2>

          <p>
            Everything you need to manage leads,
            agents and customer relationships.
          </p>
        </div>

        <div className="row g-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="col-lg-3 col-md-6"
            >
              <div className={styles.card}>

                <div className={styles.icon}>
                  <i className={feature.icon}></i>
                </div>

                <h4>{feature.title}</h4>

                <p>{feature.description}</p>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;