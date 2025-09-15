import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    { name: "Sara Foundation", text: "Philip transformed our digital presence with creativity and precision. His designs elevated our brand." },
    { name: "Regamos Foundation", text: "Working with Philip was a joy. His professionalism and results-driven mindset made a huge impact." },
    { name: "Tech Startup", text: "He built a seamless e-commerce platform that helped us grow rapidly. Truly a full-stack wizard!" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.3, duration: 0.6, type: "spring", stiffness: 100 },
    }),
  };

  return (
    <section
      id="testimonials"
      className="py-20 bg-gradient-to-r from-[#0a1f44] via-[#0d1117] to-[#1e3a8a] relative overflow-hidden text-white"
    >
      {/* Optional floating circles */}
      <div className="absolute top-10 left-10 w-24 h-24 bg-yellow-400/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-blue-400/20 rounded-full animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-12 text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              className="p-6 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl hover:scale-105 hover:shadow-blue-400/50 transition-transform duration-300"
            >
              <p className="italic mb-4 text-gray-300 text-lg">“{t.text}”</p>
              <h3 className="text-lg font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-400">
                — {t.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
        }
