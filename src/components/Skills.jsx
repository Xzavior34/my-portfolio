import React from "react";
import { FaCode, FaPaintBrush, FaMobileAlt, FaCloud } from "react-icons/fa";

export default function Skills() {
  const skills = [
    { icon: <FaCode size={40} />, title: "Full-Stack Development", desc: "React, Node.js, Express, Firebase" },
    { icon: <FaPaintBrush size={40} />, title: "UI/UX Design", desc: "Figma, Tailwind, Responsive Design" },
    { icon: <FaMobileAlt size={40} />, title: "Mobile Friendly", desc: "Cross-platform & PWA Development" },
    { icon: <FaCloud size={40} />, title: "Cloud & APIs", desc: "REST APIs, Firebase, Deployment" },
  ];

  return (
    <section id="skills" className="py-16 bg-gradient-to-r from-black via-gray-900 to-blue-900 backdrop-blur-lg text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {skills.map((skill, i) => (
            <div key={i} className="p-6 bg-white/10 rounded-xl shadow-lg hover:scale-105 transition transform">
              <div className="mb-4 text-blue-400 flex justify-center">{skill.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
              <p className="text-gray-300">{skill.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
