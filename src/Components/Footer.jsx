import "./Footer.css";
import dp from "../assets/dp.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Footer() {
  return (
    <footer id="footer">
      <div className="footer-content">

        {/* Profile */}
        <div className="footer-profile">
           <img src={dp} alt="error" />
          <h3>Avesh Malek</h3>
        </div>

        {/* Links */}
        <nav className="footer-links">
          <a href="#About">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* Social */}
        <div className="footer-social">
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com" target="_blank"><FaGithub /></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
