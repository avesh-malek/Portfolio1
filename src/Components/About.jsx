import main from "../assets/main.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./About.css";

function About() {
  return (
    <section id="About">
      <div className="hero">
        {/* LEFT */}
        <div className="wrapper">
          <h1 className="heading">
            Trust me, I'm a <span className="cyan">Front-end developer.</span>
          </h1>

          <p className="para">
            I’m Avesh Malek, a web developer interested in JavaScript and React.
            I like building clean and responsive web applications and learning
            new things every day. I’m currently working on improving my
            development skills through projects.
          </p>

          <p className="para">
            Currently open to new challenges — let’s build something great
            together.
          </p>

          {/* DOWNLOAD RESUME */}
          <div className="resume-actions">
            <a
              href="/Avesh_Malek_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn outline"
            >
              View Resume
            </a>

            <a href="/Avesh_Malek_Resume.pdf" download className="btn">
              Download Resume
            </a>
          </div>
        </div>

        {/* RIGHT */}
        <div className="wrapper2">
          <img src={main} className="profile-img" alt="Avesh Malek" />

          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/avesh-malek-733991327"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={32} />
            </a>

            <a
              href="https://github.com/avesh-malek"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={32} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
