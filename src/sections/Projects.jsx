import { motion } from "framer-motion";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaShoppingCart,
  FaTasks,
  FaVrCardboard,
  FaUtensils,
} from "react-icons/fa";

function Projects() {
  const projects = [
    {
      number: "01",
      title: "shopEase",
      subtitle: "Multi-Vendor E-Commerce Platform",
      description:
        "A scalable multi-vendor e-commerce platform with secure authentication, payments, caching, and complete order management.",
      icon: <FaShoppingCart />,
      featured: true,
      tech: [
        "Node.js",
        "Express",
        "MongoDB",
        "Mongoose",
        "Redis",
        "Stripe",
        "JWT",
      ],
      features: [
        "RESTful API using Node.js & Express",
        "JWT Authentication & Role-Based Access Control",
        "Admin, Seller, and Customer roles",
        "Stripe Payment Gateway",
        "Redis caching",
        "Order, Inventory, and Reviews management",
      ],
      github: "https://github.com/ahmeedelsaied",
      live: "https://shopease-frontend-pic.vercel.app",
    },

    {
      number: "02",
      title: "TaskFlow",
      subtitle: "Real-Time Collaboration System",
      description:
        "A real-time project management system that enables teams to collaborate through boards, lists, tasks, and instant updates.",
      icon: <FaTasks />,
      featured: true,
      tech: [
        "Node.js",
        "Socket.io",
        "React.js",
        "PostgreSQL",
        "Sequelize",
        "AWS S3",
        "Jest",
      ],
      features: [
        "Real-time collaboration using Socket.io",
        "Boards, lists, and task management",
        "Real-time task movement and updates",
        "AWS S3 file uploads",
        "Complex SQL relationships with Sequelize",
        "Unit testing with Jest",
      ],
      github: "https://github.com/ahmeedelsaied",
      live: "#",
    },

    {
      number: "03",
      title: "Anti-Phobia",
      subtitle: "Virtual Reality Therapy System",
      description:
        "A VR-based therapy system designed for treating phobias, with applications for patients and doctors.",
      icon: <FaVrCardboard />,
      tech: ["Unity", "Flutter", "Firebase"],
      features: [
        "VR therapy experience for patients",
        "Flutter application for doctors",
        "Firebase Authentication",
        "Realtime Database",
        "Cloud Storage",
        "Doctor-patient chat functionality",
      ],
      github: "#",
      live: "#",
    },

    {
      number: "04",
      title: "BiteCraft",
      subtitle: "Restaurant Landing & Menu Interface",
      description:
        "A modern responsive restaurant interface with dynamic menu rendering and optimized user experience.",
      icon: <FaUtensils />,
      tech: ["JavaScript", "HTML5", "CSS3", "Flexbox", "CSS Grid", "Bootstrap"],
      features: [
        "Fully responsive restaurant interface",
        "Dynamic DOM manipulation",
        "Dynamic menu rendering",
        "Smooth scrolling",
        "Optimized image loading",
        "Cross-browser compatibility",
      ],
      github: "#",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="section-header">
        <span>03</span>
        <h2>Featured Projects</h2>
      </div>

      <motion.div
        className="projects-list"
        variants={{
          hidden: {},
          show: {
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        viewport={{
          once: true,
          amount: 0.1,
        }}
      >
        {projects.map((project) => (
          <motion.article
            className={`project-card ${
              project.featured ? "project-featured" : ""
            }`}
            key={project.title}
            variants={{
              hidden: {
                opacity: 0,
                y: 50,
              },
              show: {
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.6,
                  ease: "easeOut",
                },
              },
            }}
            whileHover={{
              y: -8,
              transition: {
                duration: 0.25,
              },
            }}
          >
            <div className="project-top">
              <div className="project-icon">{project.icon}</div>

              <span className="project-number">{project.number}</span>
            </div>

            <div className="project-content">
              <p className="project-subtitle">{project.subtitle}</p>

              <h3>{project.title}</h3>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-features">
                <h4>Key Features</h4>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div className="project-links">
                {project.github !== "#" && (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    <FaGithub />
                    GitHub
                  </a>
                )}

                {project.live !== "#" && (
                  <a href={project.live} target="_blank" rel="noreferrer">
                    <FaExternalLinkAlt />
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          </motion.article>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
