function Experience() {
  const experiences = [
    {
      company: "Sef Academy",
      role: "Full Stack Developer",
      period: "06/2025 – Present",
      location: "Cairo, Egypt",
      description: [
        "Designed and developed scalable web applications using Clean Architecture principles.",
        "Built and optimized RESTful APIs for efficient client-server communication.",
        "Managed database schemas and complex queries using SQL Server.",
        "Collaborated with frontend teams to integrate user-facing elements with server-side logic.",
        "Implemented authentication and authorization features.",
      ],
    },
    {
      company: "Intcore",
      role: "Full Stack Developer",
      period: "03/2025 – 09/2025",
      location: "Remote, Cairo, Egypt",
      description: [
        "Developed scalable web applications and dashboards using Node.js, Express, and React.js.",
        "Designed and optimized RESTful APIs for secure and high-performance data exchange.",
        "Managed database schemas using MongoDB and PostgreSQL.",
        "Applied clean code principles and MVC architecture.",
        "Integrated third-party services including payment gateways and email services.",
      ],
    },
    {
      company: "Innova",
      role: "Frontend Developer",
      period: "01/2024 – 02/2025",
      location: "Mansoura, Egypt",
      description: [
        "Built responsive and interactive user interfaces using React.js and Bootstrap.",
        "Collaborated with backend developers to integrate REST APIs.",
        "Translated Figma and Adobe XD designs into reusable components.",
        "Optimized application performance and loading times.",
        "Utilized Git for version control and collaborated in an Agile environment.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <span>02</span>
        <h2>Experience</h2>
      </div>

      <div className="experience-list">
        {experiences.map((experience, index) => (
          <article className="experience-item" key={experience.company}>
            <div className="experience-number">
              0{index + 1}
            </div>

            <div className="experience-main">
              <div className="experience-top">
                <div>
                  <h3>{experience.role}</h3>
                  <h4>{experience.company}</h4>
                </div>

                <div className="experience-meta">
                  <span>{experience.period}</span>
                  <span>{experience.location}</span>
                </div>
              </div>

              <ul>
                {experience.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Experience;