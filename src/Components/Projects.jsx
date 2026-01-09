import { useState } from "react";
import "./Projects.css";
import attendanceImg from "../assets/Fooditemimg.png";


const projectsData = [
  {
    id: 1,
    title: "Fooditem App",
    status: "basik dummy",
    shortDesc:
      "basik React-based CRUD application to manage food items with add, update, remove, and active state features.",
    fullDesc:
      "Each item can be marked as active, edited inline, or deleted.The application demonstrates clean state management using React Hooks and component-based architecture This project focuses on understanding real-world React concepts such as lifting state up, controlled components, conditional rendering, and immutable updates.",
    image: attendanceImg,
    tech: ["React","Javascript","CSS Module","basik Hooks"],
    github: "https://github.com/avesh-malek/first-demo-react-app.git",
    live: "https://attendance-demo.com",
  },
  {
    id: 2,
    title: "",
    status: "Full Stack",
    shortDesc:
      "",
    fullDesc:
      "",
    // image: "https://via.placeholder.com/900x500?text=Task+Management+System",
    image: "",
    tech: [""],
    github: "",
    live: "",
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
