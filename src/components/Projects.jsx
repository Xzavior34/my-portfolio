import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Mini Jumia",
    desc: "E-commerce store with Firebase login, cart, and admin dashboard.",
    img: "https://source.unsplash.com/400x300/?ecommerce",
    link: "#",
  },
  {
    title: "Weather App",
    desc: "Real-time weather data with clean UI.",
    img: "https://source.unsplash.com/400x300/?weather",
    link: "#",
  },
  {
    title: "Xzavior Chess",
    desc: "Online chess with AI and mobile support.",
    img: "https://source.unsplash.com/400x300/?chess",
    link: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section projects py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
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
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition-transform duration-300"
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
                <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-700 mb-4">{project.desc}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
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
