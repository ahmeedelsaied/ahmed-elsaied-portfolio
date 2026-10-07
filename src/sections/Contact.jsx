import {
  FaEnvelope,
  FaGithub,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaPaperPlane,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="section-header">
        <span>05</span>
        <h2>Let's Work Together</h2>
      </div>

      <div className="contact-content">
        <div className="contact-text">
          <p className="contact-intro">
            Have a project in mind or looking for a Full Stack Developer?
            I'd love to hear from you.
          </p>

          <p className="contact-description">
            I'm currently open to new opportunities, freelance projects,
            and collaborations. Feel free to reach out and let's build
            something great together.
          </p>

          <div className="contact-info">
            <a href="mailto:ahmed.elsaied.eng@gmail.com">
              <FaEnvelope />
              <span>
                <small>Email</small>
                ahmed.elsaied.eng@gmail.com
              </span>
            </a>

            <div className="contact-location">
              <FaMapMarkerAlt />
              <span>
                <small>Location</small>
                Riyadh, Saudi Arabia
              </span>
            </div>
          </div>
        </div>

        <div className="contact-card">
          <div className="contact-card-icon">
            <FaPaperPlane />
          </div>

          <h3>Get In Touch</h3>

          <p>
            Let's discuss your next project, job opportunity, or
            collaboration.
          </p>

          <a
            href="mailto:ahmed.elsaied.eng@gmail.com"
            className="contact-button"
          >
            Send Me an Email
            <FaPaperPlane />
          </a>

          <div className="contact-socials">
            <a
              href="https://github.com/ahmeedelsaied"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="https://linkedin.com/in/ahmed-elsaid-hassan/"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;