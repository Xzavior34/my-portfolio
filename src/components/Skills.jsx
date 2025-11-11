import React from "react";
import { Gauge, Zap, Database, Cloud, LayoutGrid, Layers, Code } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skills = [
    { 
      icon: <Layers size={36} />, 
      title: "Architecture & Scalability", 
      desc: "Designing secure, modular, and fault-tolerant full-stack systems built for high traffic and long-term maintenance." 
    },
    { 
      icon: <Zap size={36} />, 
      title: "Performance Optimization", 
      desc: "Specialized focus on algorithmic efficiency, low-latency processing, and optimizing mission-critical database queries." 
    },
    { 
      icon: <Database size={36} />, 
      title: "Data & Systems Integrity", 
      desc: "Implementing secure data modeling, robust testing (unit/integration), and zero-downtime deployment strategies." 
    },
    { 
      icon: <LayoutGrid size={36} />, 
      title: "Front-End Engineering", 
      desc: "Expertise in React/Tailwind/Framer Motion for high-fidelity UI/UX, accessibility, and fluid responsiveness." 
    },
    { 
      icon: <Code size={36} />, 
      title: "Core Languages", 
      desc: "Mastery in JavaScript (ES6+), TypeScript, Python, and efficient database interaction (SQL/NoSQL)." 
    },
    { 
      icon: <Cloud size={36} />, 
      title: "Deployment & DevOps", 
      desc: "Experience with containerization (Docker), CI/CD pipelines, and cloud platform services (Firebase, Vercel)." 
    },
  ];

  // Framer motion variants for staggered entry
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, type: "spring", stiffness: 80 },
    }),
  };

  return (
    <section 
      id="skills" 
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2
          className="text-4xl font-extrabold mb-4 text-gray-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Technical Specialization
        </motion.h2>
        <motion.p
          className="text-xl text-gray-500 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My cumulative experience focuses on building performant, scalable, and resilient software across the entire stack.
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl border border-gray-100/50 
                         transition-all duration-300 transform hover:scale-[1.03] hover:shadow-blue-300/40 hover:border-blue-300/70"
            >
              <div className="mb-4 text-amber-500 flex justify-center">{skill.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-blue-700">{skill.title}</h3>
              <p className="text-gray-600">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
