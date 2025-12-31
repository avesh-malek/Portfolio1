import { useState } from "react";
import dp from "../assets/dp.jpg";
import "./Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <nav className="navbar">

        {/* Logo / Profile */}
        <div className="nav-left">
          <img src={dp} alt="profile" />
          <p>Avesh Malek</p>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>

        {/* Menu */}
        <ul className={`nav-list ${menuOpen ? "open" : ""}`}>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#About">About</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#skills">Skills</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#projects">Projects</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#education">Education</a>
          </li>
          <li onClick={() => setMenuOpen(false)}>
            <a href="#contact">Contact</a>
          </li>
        </ul>

      </nav>
    </header>
  );
}

export default Navbar;
