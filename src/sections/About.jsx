import {
  FaCode,
  FaServer,
  FaDatabase,
  FaTools,
} from "react-icons/fa";

function About() {
  const skillGroups = [
    {
      icon: <FaCode />,
      title: "Frontend",
      skills: ["React.js", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3"],
    },
    {
      icon: <FaServer />,
      title: "Backend",
      skills: ["Node.js", "Express.js", "RESTful APIs", "JWT", "MVC Architecture"],
    },
    {
      icon: <FaDatabase />,
      title: "Databases",
      skills: ["MongoDB", "Mongoose", "PostgreSQL", "SQL Server"],
    },
    {
      icon: <FaTools />,
      title: "Tools",
      skills: ["Git", "GitHub", "Postman", "VS Code"],
    },
  ];

  return (
    <section id="about" className="about-section">
      <div className="section-header">
        <span>01</span>
        <h2>About Me</h2>
      </div>

      <div className="about-content">
        <div className="about-text">
          <p>
            I'm a Software Engineer and Full Stack Developer specializing in
            the JavaScript ecosystem, with a focus on Node.js, Express, and
            React.
          </p>

          <p>
            I build scalable web applications and efficient RESTful APIs,
            with experience in database management, authentication,
            authorization, and clean application architecture.
          </p>

          <p>
            I'm passionate about solving problems and building maintainable,
            high-performance software.
          </p>
        </div>

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.title}>
              <div className="skill-icon">{group.icon}</div>

              <h3>{group.title}</h3>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;