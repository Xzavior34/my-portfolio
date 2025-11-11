import React from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, MessageSquare } from "lucide-react";

export default function Contact() {
  const buttonData = [
    { label: "Email Me", href: "mailto:philipinem7@gmail.com", icon: <Mail size={24} />, style: "primary" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/your-profile-url", icon: <Linkedin size={24} />, style: "secondary" },
    { label: "GitHub", href: "https://github.com/Xzavior34", icon: <Github size={24} />, style: "tertiary" },
    { label: "Download CV", href: "Philip_Inem_CV_Summary.pdf", icon: <Download size={24} />, style: "quaternary" },
  ];

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.15, duration: 0.5, type: "spring", stiffness: 100 },
    }),
  };

  const getButtonStyle = (style) => {
    switch (style) {
      case "primary":
        // Blue filled (primary CTA)
        return "bg-blue-600 text-white shadow-lg shadow-blue-400/40 hover:bg-blue-700";
      case "secondary":
        // Amber filled (secondary CTA)
        return "bg-amber-500 text-gray-900 shadow-lg shadow-amber-300/40 hover:bg-amber-600";
      case "tertiary":
        // Blue outlined
        return "bg-transparent border-2 border-blue-500 text-blue-600 hover:bg-blue-50";
      case "quaternary":
        // Amber outlined
        return "bg-transparent border-2 border-amber-500 text-amber-600 hover:bg-amber-50";
      default:
        return "";
    }
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-white via-gray-50 to-blue-50 text-gray-800 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <motion.div
          className="bg-white/90 backdrop-blur-md p-10 md:p-16 rounded-3xl shadow-2xl border-t-4 border-amber-500/70"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <MessageSquare className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          
          <motion.h2
            className="text-4xl font-extrabold mb-4 text-blue-900"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Connect and Collaborate
          </motion.h2>

          <motion.p
            className="text-gray-600 mb-12 text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            I am actively seeking roles where technical leadership and full-stack performance are paramount. Reach out directly or connect through my professional channels.
          </motion.p>

          <motion.div
            className="grid sm:grid-cols-2 gap-4 md:gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {buttonData.map((btn, i) => (
              <motion.a
                key={i}
                custom={i}
                variants={cardVariants}
                href={btn.href}
                target="_blank"
                rel="noreferrer"
                className={`flex items-center justify-center px-6 py-4 rounded-xl font-bold tracking-wide hover:scale-[1.03] transition-transform duration-300 ${getButtonStyle(btn.style)}`}
              >
                {btn.icon}
                <span className="ml-3">{btn.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
