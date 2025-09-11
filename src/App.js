import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"; // optional custom styles

function App() {
  return (
    <div>
      {/* Header */}
      <header className="text-center text-white" style={{ background: "linear-gradient(90deg, #000428, #004e92)", padding: "80px 0" }}>
        <h1 className="display-4 fw-bold">Philip Inem</h1>
        <p className="lead">Full-Stack Developer | UI/UX Designer | Social Media Growth Strategist</p>
        <p>
          Email:{" "}
          <a className="text-warning" href="mailto:philipinem7@gmail.com">
            philipinem7@gmail.com
          </a>{" "}
          | Phone: 09064513390
        </p>
        <a href="https://github.com/Xzavior34" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">GitHub</a>{" "}
        <a href="https://www.linkedin.com/in/philip-inem-9b690536b" target="_blank" rel="noreferrer" className="btn btn-outline-light btn-sm">LinkedIn</a>{" "}
        <a href="/Philip_Inem_CV_Summary.pdf" target="_blank" rel="noreferrer" className="btn btn-warning btn-sm">
          Download CV
        </a>
      </header>

      {/* About Me */}
      <section className="container py-5">
        <h2 className="section-title border-start border-5 border-primary ps-2 mb-4">About Me</h2>
        <p>
          I’m a passionate and results-driven full-stack developer and digital strategist, building impactful web applications with clean code and thoughtful design. 
          I combine my technical knowledge with creative thinking to solve real-world problems.
        </p>
        <p>
          Beyond coding, I’m a social media strategist who has helped brands grow by 300+ followers weekly. I’ve worked with <b>Regamos Foundation</b>, <b>Sara Foundation</b>, 
          and manage impactful publicity campaigns through graphic design and digital strategy. 
          I'm also actively upskilling through the <b>Forage virtual experience program</b>, gaining real-world exposure to software engineering practices.
        </p>
      </section>

      {/* Skills */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="section-title border-start border-5 border-primary ps-2 mb-4">Professional Skills</h2>
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>HTML5, CSS3, JavaScript (ES6+)</li>
                <li>Bootstrap 5 & Tailwind CSS</li>
                <li>Firebase (Auth, Firestore, Hosting)</li>
                <li>EmailJS & REST APIs</li>
                <li>React.js (Fundamentals)</li>
                <li>Progressive Web Apps (PWA)</li>
                <li>UI/UX Design (Figma, Adobe XD)</li>
              </ul>
            </div>
            <div className="col-md-6">
              <ul>
                <li>SEO Optimization & Google Indexing</li>
                <li>Git & GitHub for version control</li>
                <li>Responsive & Mobile-First Web Design</li>
                <li>Social Media Growth & Content Strategy</li>
                <li>Email marketing integration (EmailJS)</li>
                <li>Problem Solving & Debugging Techniques</li>
                <li>Project Management (Agile, Trello)</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="container py-5">
        <h2 className="section-title border-start border-5 border-primary ps-2 mb-4">Highlighted Projects</h2>
        <div className="row g-4">
          {/* Mini Jumia */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src="https://source.unsplash.com/400x200/?ecommerce" className="card-img-top" alt="Mini Jumia" />
              <div className="card-body">
                <h5 className="card-title">Mini Jumia (E-Commerce)</h5>
                <p className="card-text">Firebase-based store with user login, cart, admin dashboard, order tracking, and EmailJS notifications. Responsive and PWA-ready.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Weather App */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src="https://source.unsplash.com/400x200/?weather" className="card-img-top" alt="Weather App" />
              <div className="card-body">
                <h5 className="card-title">Weather Forecast App</h5>
                <p className="card-text">Displays real-time weather data using APIs. Fully responsive with a clean modern interface.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>

          {/* Chess Game */}
          <div className="col-md-4">
            <div className="card h-100">
              <img src="https://source.unsplash.com/400x200/?chess" className="card-img-top" alt="Chess Game" />
              <div className="card-body">
                <h5 className="card-title">Xzavior Chess Game</h5>
                <p className="card-text">Realistic online chess game with checkmate logic, undo, player vs AI, and mobile compatibility.</p>
                <a href="#" className="btn btn-primary">View Project</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-light py-5">
        <div className="container">
          <h2 className="section-title border-start border-5 border-primary ps-2 mb-4">Testimonials</h2>
          <blockquote className="blockquote">
            <p>“Philip delivered a stunning web platform for our foundation. Reliable, fast, and truly creative.”</p>
            <footer className="blockquote-footer">Sara Foundation</footer>
          </blockquote>
          <blockquote className="blockquote">
            <p>“He’s not just a developer—he’s a strategist. Our online store grew rapidly after his revamp.”</p>
            <footer className="blockquote-footer">Regamos Foundation</footer>
          </blockquote>
        </div>
      </section>

      {/* Contact */}
      <section className="bg-dark text-white py-5">
        <div className="container">
          <h2 className="section-title text-white border-start border-5 border-warning ps-2 mb-4">Contact Me</h2>
          <p>Let’s collaborate on your next big idea.</p>
          <ul>
            <li>Email: <a href="mailto:philipinem7@gmail.com" className="text-info">philipinem7@gmail.com</a></li>
            <li>Phone: 09064513390</li>
            <li>GitHub: <a href="https://github.com/Xzavior34" target="_blank" rel="noreferrer" className="text-info">Xzavior34</a></li>
            <li>LinkedIn: <a href="https://www.linkedin.com/in/philip-inem-9b690536b" target="_blank" rel="noreferrer" className="text-info">philip-inem-9b690536b</a></li>
          </ul>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-4 bg-light">
        <p>&copy; 2025 Philip Inem. Built with React, Bootstrap & a passion for impactful digital solutions.</p>
      </footer>
    </div>
  );
}

export default App;
