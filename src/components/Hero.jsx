import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Download, ArrowRight } from 'lucide-react'; 

export default function Hero() {

  // Define PUBLIC_URL defensively for local execution testing
  const PUBLIC_URL = typeof process !== 'undefined' && process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "";
  // Using the path for the uploaded image and ensuring GitHub Pages compatibility
  const heroBackgroundImagePath = PUBLIC_URL + "/1000597015.jpg"; 

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center text-gray-900 overflow-hidden"
      style={{
        backgroundImage: `url(${heroBackgroundImagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark Overlay for contrast (like in the image) */}
      <div className="absolute inset-0 bg-black bg-opacity-70 z-0"></div> 

      {/* Hero Content - Split Layout */}
      <motion.div
        className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between w-full max-w-7xl mx-auto px-6 gap-12"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* --- Left Column (Text Content - Aligned Left) --- */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left pt-20 lg:pt-0">
          
          <motion.p 
            className="text-xl md:text-2xl font-medium mb-2 text-blue-300"
            variants={itemVariants}
          >
            Hi, I am
          </motion.p>
          
          <motion.h1
            className="text-5xl md:text-7xl font-black mb-2 leading-tight text-white" 
            variants={itemVariants}
          >
            <span className="text-amber-400">Philip</span> Inem
          </motion.h1>

          <motion.p
            className="text-2xl md:text-4xl text-gray-200 font-semibold mb-6 tracking-wide"
            variants={itemVariants}
          >
            Full-Stack Developer | UI/UX Architect
          </motion.p>

          <motion.p 
            className="text-md md:text-lg text-gray-300 max-w-lg mb-8 leading-relaxed"
            variants={itemVariants}
          >
            I specialize in engineering <span className="font-semibold text-blue-200">high-performance, full-stack architectures</span>. My focus lies in delivering <span className="font-semibold text-amber-300">low-latency solutions</span> and exceptional user experiences, translating complex requirements into reliable, scalable code.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 mb-8"
            variants={itemVariants}
          >
            {/* Button 1: Hire Me (Primary CTA) */}
            <a
              href="#contact" 
              className="flex items-center justify-center px-8 py-3 bg-amber-500 text-gray-900 rounded-lg font-bold text-lg shadow-xl shadow-amber-300/30 hover:bg-amber-600 hover:scale-[1.05] transition-transform duration-300"
            >
              Hire Me <ArrowRight className="w-5 h-5 ml-2"/>
            </a>
            
            {/* Button 2: Let's Talk (Secondary CTA) */}
            <a
              href="#contact" // Links to contact section
              className="flex items-center justify-center px-8 py-3 bg-blue-600 text-white rounded-lg font-bold text-lg shadow-xl shadow-blue-400/30 hover:bg-blue-700 hover:scale-[1.05] transition-transform duration-300"
            >
              <Mail className="w-5 h-5 mr-3"/> Let's Talk
            </a>
          </motion.div>

          {/* Socials & CV Links */}
          <motion.div 
            className="flex items-center justify-center lg:justify-start gap-8 mt-4"
            variants={itemVariants}
          >
            <a 
              href="Philip_Inem_CV_Summary.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-gray-300 hover:text-blue-300 transition-colors" 
            >
              <Download className="w-5 h-5" /> Download CV
            </a>
            <a 
              href="https://github.com/Xzavior34"
              target="_blank"
              rel="noreferrer"
              className="text-gray-300 hover:text-blue-300 transition-colors" 
            >
              <Github className="w-6 h-6" />
            </a>
          </motion.div>

        </div>

        {/* --- Right Column (Visual placeholder removed to let BG image dominate) --- */}
        <div className="flex-1 hidden lg:block">
          {/* Empty to push content left */}
        </div>
      </motion.div>
    </section>
  );
}
