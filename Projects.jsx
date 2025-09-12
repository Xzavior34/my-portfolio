import React from 'react';
import miniJumia from '../assets/mini-jumia.png';
import weatherApp from '../assets/weather-app.png';
import xzaviorChess from '../assets/xzavior-chess.png';

const projects = [
  {
    title: "Mini Jumia",
    desc: "E-commerce store with Firebase login, cart, and admin dashboard.",
    img: miniJumia,
    link: "#"
  },
  {
    title: "Weather App",
    desc: "Real-time weather data with clean UI.",
    img: weatherApp,
    link: "#"
  },
  {
    title: "Xzavior Chess",
    desc: "Online chess with AI and mobile support.",
    img: xzaviorChess,
    link: "#"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects py-16 bg-gray-50">
      <h2 className="text-4xl font-bold mb-8 text-center">Highlighted Projects</h2>
      <div className="grid md:grid-cols-3 gap-8 px-4 md:px-16">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-2 transition duration-300"
          >
            <img src={project.img} alt={project.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
