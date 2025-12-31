import "./Skills.css";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skills-header">
        <h2>
          Skills & <span>Expertise</span>
        </h2>
        <p>
          Here's a quick overview of my skillset — including frontend magic,
          backend wizardry, and everything in between. I am always eager to
          learn new technologies.
        </p>
      </div>

      <div className="skills-grid">
        {/* Frontend Card */}
        <div className="skills-card">
          <div className="card-title">
            <span className="icon">🖥️</span>
            <h3>Frontend Development</h3>
          </div>

          <p className="card-desc">
            Designing and developing modern, responsive user interfaces
          </p>

          <div className="skill-tags">
            <span>React + Vite</span>
            <span>Tailwind CSS</span>
            <span>REST API Integration</span>
            <span>GSAP</span>
            <span>React Native</span>
          </div>
        </div>

        {/* Backend Card */}
        <div className="skills-card">
          <div className="card-title">
            <span className="icon">🗄️</span>
            <h3>Backend Development</h3>
          </div>

          <p className="card-desc">
            Architecting and maintaining scalable and secure backend systems
          </p>

          <div className="skill-tags">
            <span>Spring Boot</span>
            <span>Spring Security</span>
            <span>Node.js</span>
            <span>Express</span>
            <span>REST APIs</span>
            <span>JWT</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
