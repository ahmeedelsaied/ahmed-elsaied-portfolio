import { FaGithub, FaLinkedinIn, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <a href="#home" className="footer-logo">
            AH.
          </a>

          <p>
            Software Engineer & Full Stack Developer
          </p>
        </div>

        <div className="footer-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="footer-socials">
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

          <a href="#home" aria-label="Back to top">
            <FaArrowUp />
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Ahmed Elsaied. All rights reserved.
        </p>

        <p>
          Built with React.js
        </p>
      </div>
    </footer>
  );
}

export default Footer;