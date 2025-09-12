import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    { name: "Sara Foundation", text: "Philip transformed our digital presence with creativity and precision. His designs elevated our brand." },
    { name: "Regamos Foundation", text: "Working with Philip was a joy. His professionalism and results-driven mindset made a huge impact." },
    { name: "Tech Startup", text: "He built a seamless e-commerce platform that helped us grow rapidly. Truly a full-stack wizard!" },
  ];

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-r from-black via-gray-900 to-blue-900 backdrop-blur-lg text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white/10 rounded-xl shadow-lg hover:scale-105 transition transform"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.6 }}
            >
              <p className="italic mb-4 text-gray-300">“{t.text}”</p>
              <h3 className="text-lg font-semibold text-blue-400">— {t.name}</h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
