import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Xzavior Piano Tiles",
    desc: "Fast-paced piano tile game with smooth controls and addictive gameplay.",
    img: process.env.PUBLIC_URL + "/piano.jpg",
    link: "https://xzavior34.github.io/X-piano-tiles/",
  },
  {
    title: "Xzavior ChatAI",
    desc: "Real-time AI chatbot with modern UI, WebSocket backend, and mobile-friendly design.",
    img: process.env.PUBLIC_URL + "/chat.jpg",
    link: "https://xzavior34.github.io/Xzavior-ai/",
  },
  {
    title: "Xzavior Chess",
    desc: "Online chess with AI and mobile support.",
    img: process.env.PUBLIC_URL + "/xzavior-chess.jpg",
    link: "https://xzavior34.github.io/Chess-game-/",
  },
  {
    title: "Mini Jumia",
    desc: "E-commerce store with Firebase login, cart, and admin dashboard.",
    img: process.env.PUBLIC_URL + "/mini-jumia.jpg",
    link: "https://xzavior34.github.io/market/",
  },
  {
    title: "Weather App",
    desc: "Real-time weather data with clean UI.",
    img: process.env.PUBLIC_URL + "/weather-app.jpg",
    link: "https://xzavior34.github.io/weather/",
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
              className="relative rounded-2xl overflow-hidden shadow-2xl bg-white/10 backdrop-blur-lg hover:shadow-yellow-400/40 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              {/* Project Image */}
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/60 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-yellow-400 text-gray-900 rounded-lg font-semibold hover:bg-yellow-500 transition"
                >
                  View Project
                </a>
              </div>

              {/* Project Details */}
              <div className="p-6 relative z-10">
                <h3 className="text-2xl font-semibold mb-2 text-white">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
                           }
