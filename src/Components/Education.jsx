import "./Education.css";
import SchoolIcon from "@mui/icons-material/School";
import { MdOutlineCastForEducation } from "react-icons/md";
import { FaBuilding } from "react-icons/fa";

const educationData = [
  {
    id: 1,
    title: "Bachelor of Computer Applications",
    institute: "S.S. Agrawal college, Navsari",
    date: "passed out 2024",
    score: "6.74 SGPA",
    icon: SchoolIcon,
   
  },
  {
    id: 2,
    title: "Masters of Computer Applications",
    institute: "S.S. Agrawal Institute of Managment & Technologt",
    date: "passed out 2026",
    score: "7.09 SPI",
    icon: MdOutlineCastForEducation,
  },
  {
    id: 3,
    title: "GSEB (10th Grade)",
    institute: "Navsari High School",
    date: "2019",
    score: "60.33%",
    icon: FaBuilding,
  },
];

const Education = () => {
  return (
    <section id="education">
      <div className="edu-header">
        <h2>Education</h2>
        <p>
          My academic journey and the institutions that shaped my technical
          foundation.
        </p>
      </div>

      <div className="edu-grid">
        {educationData.map((edu) => (
          <div
            key={edu.id}
            className={`edu-card ${edu.highlight ? "highlight" : ""}`}
          >
            <div className="edu-icon">
              <edu.icon />
            </div>

            <h3>{edu.title}</h3>
        
            <p className="institute">{edu.institute}</p>

            <div className="edu-footer">
              <span>{edu.date}</span>
              <span className="score">{edu.score}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
