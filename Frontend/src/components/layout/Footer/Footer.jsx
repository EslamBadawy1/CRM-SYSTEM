import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>

      <div className="container">

        <div className="row">

          <div className="col-lg-3 ">

            <h4>Nexus CRM</h4>

            <p>
              The complete CRM solution to manage
              your leads, tasks and team performance.
            </p>

            <div className={styles.socials}>
              <i className="fab fa-facebook-f"></i>
              <i className="fab fa-twitter"></i>
              <i className="fab fa-linkedin-in"></i>
              <i className="fab fa-instagram"></i>
            </div>

          </div>

          <div className="col-lg-3">

            <h5>Quick Links</h5>

            <ul>
              <li>Features</li>
              <li>About Us</li>
              <li>How It Works</li>
              <li>Contact</li>
            </ul>

          </div>

          <div className="col-lg-3">

            <h5>Support</h5>

            <ul>
              <li>Help Center</li>
              <li>Privacy Policy</li>
              <li>Terms Of Service</li>
              <li>FAQ</li>
            </ul>

          </div>

          <div className="col-lg-3">

            <h5>Contact Us</h5>

            <ul>
              <li>+20 123 456 7890</li>
              <li>info@crmsystem.com</li>
              <li>Cairo, Egypt</li>
            </ul>

          </div>

        </div>

        <div className={styles.copyRight}>
          © 2024 CRM System. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;