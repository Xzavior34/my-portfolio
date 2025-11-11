import React from "react";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Senior PM, Springer Capital",
      text: "Philip's work on low-latency architectures directly contributed to a 20% improvement in our transaction processing speed. His ability to deliver mission-critical microservice solutions is exceptional.",
      role: "Quantitative Development Lead",
    },
    {
      name: "Project Manager, Forage Program",
      text: "He consistently demonstrated the capacity to transition complex business requirements into robust, full-stack applications, showing genuine technical leadership across the entire SDLC.",
      role: "Software Engineering Mentor",
    },
    {
      name: "Founder, Sara Foundation",
      text: "Beyond development, Philip optimized our database queries and enhanced our API-driven performance, dramatically improving user stability and reducing operational latency.",
      role: "Digital Transformation Officer",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden text-gray-800"
    >
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl font-extrabold mb-16 text-blue-900"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Endorsements on Impact
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="p-8 bg-white/70 backdrop-blur-md rounded-2xl shadow-xl hover:shadow-blue-300/50 transition-all duration-300 border-b-4 border-blue-400/50 hover:scale-[1.02]"
            >
              <div className="text-amber-500 mb-4 flex justify-center">
                <Quote size={32} />
              </div>

              <p className="italic mb-6 text-gray-600 text-lg leading-relaxed">
                “{t.text}”
              </p>

              <div className="text-center pt-4 border-t border-gray-200">
                <h3 className="text-xl font-bold text-blue-800">
                  {t.name}
                </h3>
                <p className="text-sm text-amber-500 font-medium mt-1">
                  {t.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
