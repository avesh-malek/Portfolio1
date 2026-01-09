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
          <a href="https://www.linkedin.com/in/avesh-malek-733991327?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/avesh-malek" target="_blank"><FaGithub /></a>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
