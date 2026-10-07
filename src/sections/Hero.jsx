import { motion } from "framer-motion";
import {
  FaArrowDown,
  FaGithub,
  FaLinkedinIn,
  FaDownload,
} from "react-icons/fa";

function Hero() {
  return (
    <section id="home" className="hero">
      <motion.div
        className="hero-content"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I'm
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          Ahmed Elsaied
          <span>Abdallah Hassan</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          Software Engineer | Full Stack Developer
        </motion.h2>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
        >
          I build scalable web applications and efficient RESTful APIs using
          Node.js, Express, React, and modern database technologies.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <motion.a
            href="#projects"
            className="btn btn-primary"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            View My Work
            <FaArrowDown />
          </motion.a>

          <motion.a
            href="/Ahmed_Hassan_Resume.pdf"
            className="btn btn-secondary"
            download="Ahmed_Elsaied_Resume.pdf"
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.97 }}
          >
            <FaDownload />
            Download Resume
          </motion.a>
        </motion.div>

        <motion.div
          className="hero-socials"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/ahmeedelsaied"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
          >
            <FaGithub /> GitHub
          </motion.a>

          <motion.a
            href="https://linkedin.com/in/ahmed-elsaid-hassan/"
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -4 }}
          >
            <FaLinkedinIn /> LinkedIn
          </motion.a>
        </motion.div>
      </motion.div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      >
        <span>Scroll down</span>

        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <FaArrowDown />
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
