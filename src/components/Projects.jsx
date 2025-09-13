import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mini Jumia",
    desc: "E-commerce store with Firebase login, cart, and admin dashboard.",
    img: process.env.PUBLIC_URL + "/mini-jumia.jpg",
    link: "#",
  },
  {
    title: "Weather App",
    desc: "Real-time weather data with clean UI.",
    img: process.env.PUBLIC_URL + "/weather-app.jpg",
    link: "#",
  },
  {
    title: "Xzavior Chess",
    desc: "Online chess with AI and mobile support.",
    img: process.env.PUBLIC_URL + "/xzavior-chess.jpg",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 bg-gradient-to-br from-[#0a1f44] to-[#0d1117] text-gray-200"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Highlighted Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="rounded-xl bg-white/10 backdrop-blur-lg shadow-lg overflow-hidden hover:scale-105 hover:shadow-blue-500/40 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-600/80 hover:bg-blue-700 text-white rounded-lg transition"
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
      }
