import main from "../assets/main.jpg";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <>
      <section id="About">
        <div className="hero">
          <div className=" wreapper">
            <h1 className="h" id="h">
              Trust me, I'm a <span className="cyan">Front-end devloper.</span>
            </h1>
            <p className="para">
              I’m Avesh Malek, a web developer interested in JavaScript and React. I like building clean and responsive web applications and learning new things every day. I’m currently working on improving my development skills through projects.
            </p>
            <p className="para">
              {" "}
              Currently open to new challenges — let’sbuildsomething great
              together..
            </p>
            <button className="btn" type="button">
              Download Resume
            </button>
          </div>
          <div className="wreapper2">
            <img src={main} className="backimg" alt="error" />

            <div className="linkdih">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={32} color="#0A66C2" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub size={32} color="#dadadaff" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
