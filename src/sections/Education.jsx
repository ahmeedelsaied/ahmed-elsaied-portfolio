import { FaGraduationCap, FaCertificate } from "react-icons/fa";

function Education() {
  const certifications = [
    "Front-End Development Libraries — FreeCodeCamp",
    "Responsive Web Design — FreeCodeCamp",
    "Complete Full-Stack Web Development Bootcamp — Udemy",
  ];

  return (
    <section id="education" className="education-section">
      <div className="section-header">
        <span>04</span>
        <h2>Education & Certifications</h2>
      </div>

      <div className="education-content">
        <div className="education-card">
          <div className="education-icon">
            <FaGraduationCap />
          </div>

          <div>
            <span className="education-period">2019 – 2023</span>

            <h3>Bachelor of Software Engineering</h3>

            <h4>
              Faculty of Computer & Information Sciences
            </h4>

            <p>
              Mansoura University
            </p>
          </div>
        </div>

        <div className="certifications-card">
          <div className="education-icon">
            <FaCertificate />
          </div>

          <div>
            <h3>Certifications & Courses</h3>

            <ul>
              {certifications.map((certification) => (
                <li key={certification}>
                  {certification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;