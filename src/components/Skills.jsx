import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { icon: <FaCode size={40} />, title: "Full-Stack Development", desc: "React, Node.js, Express, Firebase" },
    { icon: <FaPaintBrush size={40} />, title: "UI/UX Design", desc: "Figma, Tailwind, Responsive Design" },
    { icon: <FaMobileAlt size={40} />, title: "Mobile Friendly", desc: "Cross-platform & PWA Development" },
    { icon: <FaCloud size={40} />, title: "Cloud & APIs", desc: "REST APIs, Firebase, Deployment" },
  ];

  // Framer motion variants for staggered entry
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-black via-gray-900 to-blue-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          className="text-4xl font-bold mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="p-6 bg-white/10 rounded-2xl shadow-2xl hover:scale-105 hover:shadow-yellow-400/50 transition-transform duration-300"
            >
              <div className="mb-4 text-yellow-400 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
    }
