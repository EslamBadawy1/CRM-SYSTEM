import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ahmed Hassan",
      role: "Sales Manager",
      letter: "A",
      review:
        "This CRM system has completely transformed the way we manage our leads. Highly recommended!",
    },

    {
      name: "Sara Ali",
      role: "Marketing Director",
      letter: "S",
      review:
        "The dashboard and reports give us amazing insights. Our team productivity has increased a lot.",
    },

    {
      name: "Mohamed Adel",
      role: "Business Owner",
      letter: "M",
      review:
        "Very easy to use and powerful features. Best CRM solution for growing businesses.",
    },
  ];

  return (
    <section
      id="testimonials"
      className={styles.testimonials}
    >
      <div className="container">

        <span className={styles.badge}>
          TESTIMONIALS
        </span>

        <h2>What Our Clients Say</h2>

        <p className={styles.subtitle}>
          Trusted by businesses worldwide.
        </p>

        <div className="row mt-5">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="col-lg-4"
            >
              <div className={styles.card}>

                <i
                  className={`fa-solid fa-quote-left ${styles.quote}`}
                ></i>

                <p>{item.review}</p>

                <div className={styles.footer}>

                  <div className={styles.user}>

                    <div className={styles.avatar}>
                      {item.letter}
                    </div>

                    <div>
                      <h6>{item.name}</h6>
                      <span>{item.role}</span>
                    </div>

                  </div>

                  <div className={styles.stars}>
                    ★★★★★
                  </div>

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;