import React, { useEffect, useState } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import "./App.css";

// Typing effect component
const TypingEffect = ({ text, speed = 120 }) => {
  const [displayed, setDisplayed] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i === text.length) clearInterval(interval);
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);
  return <span className="typing">{displayed}</span>;
};

// Skill Bar Component with percentage
const SkillBar = ({ skill, index }) => {
  return (
    <div className="skill">
      <span>{skill.name}</span>
      <div className="skill-bar">
        <div
          className="skill-progress"
          style={{ width: `${skill.level}%`, animationDelay: `${index * 0.2}s` }}
        ></div>
        <span className="skill-percent">{skill.level}%</span>
      </div>
    </div>
  );
};

// Project Card
const ProjectCard = ({ project, delay }) => (
  <div className="project-card" style={{ animationDelay: `${delay}s` }}>
    <img src={project.img} alt={project.title} />
    <div className="project-info">
      <h3>{project.title}</h3>
      <p>{project.desc}</p>
      <a href={project.link} className="btn btn-primary" target="_blank" rel="noreferrer">View Project</a>
    </div>
  </div>
);

function App() {
  const [skills] = useState([
    { name: "HTML5, CSS3, JavaScript", level: 95 },
    { name: "React.js & Hooks", level: 90 },
    { name: "Firebase (Auth & Firestore)", level: 85 },
    { name: "Bootstrap & Tailwind", level: 90 },
    { name: "PWA & Responsive Design", level: 85 },
    { name: "Git & GitHub", level: 95 },
  ]);

  const [projects] = useState([
    { title: "Mini Jumia", desc: "E-commerce store with Firebase login, cart, and admin dashboard.", img: "https://source.unsplash.com/400x200/?ecommerce", link: "#" },
    { title: "Weather App", desc: "Real-time weather data with clean UI.", img: "https://source.unsplash.com/400x200/?weather", link: "#" },
    { title: "Xzavior Chess", desc: "Online chess with AI and mobile support.", img: "https://source.unsplash.com/400x200/?chess", link: "#" },
  ]);

  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div className="App">
      {/* Particle Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: { color: "#000428" },
          fpsLimit: 60,
          particles: {
            color: { value: "#ffffff" },
            links: { enable: true, distance: 120, color: "#004e92", opacity: 0.4, width: 1 },
            move: { enable: true, speed: 2 },
            number: { value: 50 },
            size: { value: { min: 1, max: 4 } },
          },
          detectRetina: true,
        }}
      />

      {/* Header */}
      <header className="header">
        <h1><TypingEffect text="Philip Inem" /></h1>
        <p className="sub-title">Full-Stack Developer | UI/UX Designer | Social Media Growth Strategist</p>
        <div className="contact-buttons">
          <a href="mailto:philipinem7@gmail.com" className="btn btn-light">Email Me</a>
          <a href="https://github.com/Xzavior34" target="_blank" rel="noreferrer" className="btn btn-outline-light">GitHub</a>
          <a href="/Philip_Inem_CV_Summary.pdf" target="_blank" rel="noreferrer" className="btn btn-warning">Download CV</a>
        </div>
      </header>

      {/* About */}
      <section className="section about">
        <h2>About Me</h2>
        <p>I'm a passionate full-stack developer and digital strategist building impactful web apps with clean code and thoughtful design. Also skilled in social media growth and digital campaigns.</p>
      </section>

      {/* Skills */}
      <section className="section skills">
        <h2>Skills & Tech Stack</h2>
        <div className="skills-container">
          {skills.map((skill, i) => <SkillBar key={i} skill={skill} index={i} />)}
        </div>
      </section>

      {/* Projects */}
      <section className="section projects">
        <h2>Highlighted Projects</h2>
        <div className="projects-container">
          {projects.map((p, i) => <ProjectCard key={i} project={p} delay={i * 0.3} />)}
        </div>
      </section>

      {/* Contact */}
      <section className="section contact">
        <h2>Contact Me</h2>
        <p>Email: <a href="mailto:philipinem7@gmail.com">philipinem7@gmail.com</a></p>
        <p>Phone: 09064513390</p>
      </section>

      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 Philip Inem. Built with React & 💻</p>
      </footer>
    </div>
  );
}

export default App;
