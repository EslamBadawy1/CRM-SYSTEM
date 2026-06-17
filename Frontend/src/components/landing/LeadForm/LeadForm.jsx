import styles from "./LeadForm.module.css";

const LeadForm = () => {
  return (
    <section
      id="lead-form"
      className={styles.leadForm}
    >
      <div className="container">

        <div className="row justify-content-center">

          <div className="col-lg-8">

            <div className={styles.formCard}>

              <div className={styles.header}>

                <h2>Register Your Interest</h2>

                <p>
                  Leave your information and our team
                  will contact you shortly.
                </p>

              </div>

              <form>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className={`form-control ${styles.input}`}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="email"
                      placeholder="Email"
                      className={`form-control ${styles.input}`}
                    />
                  </div>

                </div>

                <div className="row">

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Phone Number"
                      className={`form-control ${styles.input}`}
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <input
                      type="text"
                      placeholder="Company"
                      className={`form-control ${styles.input}`}
                    />
                  </div>

                </div>

                <div className="mb-4">

                  <textarea
                    rows="5"
                    placeholder="Message"
                    className={`form-control ${styles.textarea}`}
                  ></textarea>

                </div>

                <button
                  type="submit"
                  className={`btn btn-primary ${styles.submitBtn}`}
                >
                  Submit Lead
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default LeadForm;