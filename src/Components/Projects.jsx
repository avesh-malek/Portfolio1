import { useState } from "react";
import "./Projects.css";
import attendanceImg from "../assets/882548.jpg";


const projectsData = [
  {
    id: 1,
    title: "Face Recognition Attendance System",
    status: "Production",
    shortDesc:
      "A production-ready face recognition attendance system for SMEs.",
    fullDesc:
      "This project is a face recognition–based attendance management system designed and deployed for real-world SME usage. It allows employees to mark IN and OUT attendance using face recognition, eliminating biometric machines and manual registers. Includes admin dashboard, employee management, reports, and device control.",
    image: attendanceImg,
    tech: ["React", "Spring Boot", "MySQL", "JWT", "OpenCV"],
    github: "https://github.com/yourusername/attendance-system",
    live: "https://attendance-demo.com",
  },
  {
    id: 2,
    title: "Task Management System",
    status: "Full Stack",
    shortDesc:
      "A role-based task management system with real-time updates.",
    fullDesc:
      "A full-stack task management system with user authentication, role-based access, and real-time task updates. Users can create projects, assign tasks, track progress, and collaborate efficiently.",
    // image: "https://via.placeholder.com/900x500?text=Task+Management+System",
    image: attendanceImg,
    tech: ["React", "Spring Boot", "MySQL", "JWT", "Tailwind CSS"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://taskpro-demo.com",
  },
];

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null);

  return (
    <section id="projects">
      <div className="projects-header">
        <h2>
          My <span>Projects</span>
        </h2>
        <p>
          Explore my portfolio of innovative solutions across various domains
          and technologies.
        </p>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onClick={() => setActiveProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.shortDesc}</p>

            <div className="tech-tags">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {activeProject && (
        <div className="project-modal">
          <div className="modal-content">
            <button
              className="close-btn"
              onClick={() => setActiveProject(null)}
            >
              ✕
            </button>

            <h2>
              {activeProject.title} ({activeProject.status})
            </h2>

            <img
              src={activeProject.image}
              alt={activeProject.title}
              className="modal-image"
            />

            <p className="modal-desc">{activeProject.fullDesc}</p>

            <div className="modal-tech">
              {activeProject.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="modal-actions">
              <a
                href={activeProject.github}
                target="_blank"
                rel="noreferrer"
              >
                View on GitHub
              </a>
              <a
                href={activeProject.live}
                target="_blank"
                rel="noreferrer"
                className="primary"
              >
                Visit Website
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
