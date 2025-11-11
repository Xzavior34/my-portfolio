import React from "react";
import { motion } from "framer-motion";

// Defensive definition to prevent ReferenceError in non-Node environments (like this runtime)
const PUBLIC_URL = typeof process !== 'undefined' ? process.env.PUBLIC_URL : "";

// NOTE: Using PUBLIC_URL + "/image.jpg" ensures paths are correct 
// when deploying React applications to subfolders (like GitHub Pages).
const projects = [
  {
    title: "Xzavior Piano Tiles",
    desc: "Fast-paced piano tile game with smooth controls and addictive gameplay.",
    img:"/piano.jpg",
    link: "https://xzavior34.github.io/X-piano-tiles/",
  },
  {
    title: "Xzavior ChatAI",
    desc: "Real-time AI chatbot with modern UI, WebSocket backend, and mobile-friendly design.",
    img: "/chat.jpg",
    link: "https://xzavior34.github.io/Xzavior-ai/",
  },
  {
    title: "Xzavior Chess",
    desc: "Online chess with AI and mobile support.",
    img: "/xzavior-chess.jpg",
    link: "https://xzavior34.github.io/Chess-game-/",
  },
  {
    title: "E-commerce store",
    desc: "E-commerce store with Firebase login, cart, and admin dashboard.",
    img: "/mini-jumia.jpg",
    link: "https://xzavior34.github.io/market/",
  },
  {
    title: "Xza movies",
    desc: "Real-time movie app that shows all movies and trends.",
    img: "/weather-app.jpg",
    link: "https://xzavior34.github.io/weather/",
  },
    {
    title: "Edufind",
    desc: "Real-time app that gives u courses u searched for with ratings.",
    img: "edufind.jpg",
    link: "https://edufind.vercel.app/",
  },
];

const cardMotion = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

export default function Projects() {
  return (
    <section
      id="projects"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 font-inter"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl lg:text-5xl font-extrabold mb-12 text-blue-900 border-b-4 border-blue-500 inline-block pb-1"
          {...cardMotion}
        >
          Highlighted Projects
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              className="relative rounded-2xl overflow-hidden shadow-xl border border-gray-200 
                         bg-white/70 backdrop-blur-md 
                         hover:shadow-2xl hover:border-blue-500 transform hover:scale-[1.01] 
                         transition-all duration-300"
              initial={{ ...cardMotion.initial }}
              whileInView={{ ...cardMotion.whileInView }}
              transition={{ ...cardMotion.transition, delay: i * 0.15 }}
            >
              {/* Project Image */}
              <motion.img
                src={project.img}
                alt={project.title}
                className="w-full h-52 object-cover"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                // Fallback using the same placeholder technique
                onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/800x400/F9FAFB/111827?text=Project+Preview"; }}
              />

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-black/0 hover:bg-black/70 flex justify-center items-center opacity-0 hover:opacity-100 transition-all duration-300">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  // View Project button using the gold/amber accent
                  className="px-6 py-3 bg-amber-500 text-gray-900 rounded-lg font-bold shadow-lg hover:bg-amber-600 hover:scale-105 transition-transform duration-300"
                >
                  View Project
                </a>
              </div>

              {/* Project Details */}
              <div className="p-6 relative z-10 text-left">
                <h3 className="text-2xl font-bold mb-2 text-blue-800">
                  {project.title}
                </h3>
                <p className="text-gray-600">{project.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
